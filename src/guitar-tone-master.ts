import { Agent, SDKAgent } from "@cursor/sdk";
import * as dotenv from "dotenv";
import * as readline from "readline";
import * as fs from "fs";
import * as path from "path";

// Load environment variables from .env file
dotenv.config();

const SYSTEM_PROMPT = `You are a professional Guitar Tech and Sound Engineer specialized in Neural DSP Quad Cortex tone-tuning. 
Your job is to receive a song or artist request and output a complete, block-by-block Quad Cortex preset chain.

--- USER'S RIG PROFILE (Always assume this setup unless specified otherwise) ---
- Guitar: Fender Stratocaster with single-coils
- Tuning: Standard E
- Monitoring Output: Headphones
- Favorite QC Blocks: Brit 2203 87, Green 808, Vintage Chorus, Hall Reverb

--- TONE GENERATION RULES ---
1. Identify the core amp style used in the original recording (e.g., British Plexi, American High-Gain, Tweed Clean) and map it to the corresponding Quad Cortex device name.
2. Structure the signal chain in logical order: Gate -> Pitch/Wah -> Drive -> Amp -> Cab -> EQ -> Modulation -> Delay -> Reverb.
3. For cabinet blocks, always specify mic choices, placements, and high/low cuts, as these are critical for headphone/monitor users.
4. Output specific parameter settings (on a scale of 1 to 10, or using QC-specific parameters like dB, Hz, or ms).
5. Provide brief tips on how to play the song with this tone (e.g., pickup selection, volume rolling).
6. Plain text only. Do not use any icons, symbols, or emojis.`;

async function main() {
  const apiKey = process.env.CURSOR_API_KEY;
  if (!apiKey) {
    console.error("Error: CURSOR_API_KEY environment variable is not set.");
    console.error("Please create a .env file with CURSOR_API_KEY=your_key or set it in your environment.");
    process.exit(1);
  }

  // Determine user request (from CLI arguments or interactive prompt)
  const args = process.argv.slice(2);
  let request = args.join(" ").trim();

  if (!request) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    request = await new Promise<string>((resolve) => {
      rl.question("Enter song or artist request (e.g., Pink Floyd - Comfortably Numb): ", (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }

  if (!request) {
    console.log("No request entered. Exiting.");
    process.exit(0);
  }

  console.log(`Generating Quad Cortex preset for: "${request}"...`);
  console.log("=".repeat(50));

  let agent: SDKAgent | undefined;
  try {
    // Create local agent using recommended composer-2 model
    agent = await Agent.create({
      apiKey,
      model: { id: "composer-2" },
      local: { cwd: process.cwd() },
    });

    // Load the official compact device list if it exists
    let deviceListContext = "";
    try {
      const deviceListPath = path.join(__dirname, "..", "uploads", "device-list-compact.md");
      if (fs.existsSync(deviceListPath)) {
        deviceListContext = fs.readFileSync(deviceListPath, "utf-8");
      } else {
        const localPath = path.join(process.cwd(), "uploads", "device-list-compact.md");
        if (fs.existsSync(localPath)) {
          deviceListContext = fs.readFileSync(localPath, "utf-8");
        }
      }
    } catch (e) {
      // Graceful fallback if file loading fails
    }

    let fullPrompt = `${SYSTEM_PROMPT}\n\n`;
    if (deviceListContext) {
      fullPrompt += `--- OFFICIAL QUAD CORTEX DEVICE LIST (STRICTLY ADHERE TO THESE NAMES) ---\nUse the exact device names from this list for any amps, drives, cabs, delays, reverbs, or modulation blocks you select:\n\n${deviceListContext}\n\n`;
    }
    fullPrompt += `Request: Please generate a tone for: ${request}`;
    const run = await agent.send(fullPrompt);

    // Keep track of printed characters to display stream incremental deltas correctly.
    let lastPrintedLength = 0;

    for await (const event of run.stream()) {
      if (event.type === "assistant") {
        let fullText = "";
        for (const block of event.message.content) {
          if (block.type === "text") {
            fullText += block.text;
          }
        }
        if (fullText.length > lastPrintedLength) {
          const newChunk = fullText.slice(lastPrintedLength);
          process.stdout.write(newChunk);
          lastPrintedLength = fullText.length;
        }
      }
    }

    console.log(); // Ensure final newline
    console.log("=".repeat(50));

    const result = await run.wait();
    if (result.status === "error") {
      console.error("Agent execution completed with error.");
      process.exit(2);
    } else {
      console.log("Tone generation completed successfully.");
    }
  } catch (error) {
    console.error("An unexpected error occurred during execution:");
    console.error(error);
    process.exit(1);
  } finally {
    if (agent) {
      await agent[Symbol.asyncDispose]();
    }
  }
}

main();
