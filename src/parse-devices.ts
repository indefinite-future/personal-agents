import * as fs from "fs";
import * as path from "path";

interface Device {
  name: string;
  basedOn?: string;
  version: string;
}

interface Section {
  title: string;
  devices: Device[];
}

function parseDeviceList() {
  const filePath = "C:\\Users\\alanho\\.cursor\\projects\\c-Users-alanho-Documents-personal-agents\\uploads\\device-list-0.md";
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").map(line => line.trim()).filter(line => line.length > 0);

  // Parse sections
  const sections: { title: string; startIndex: number; endIndex: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) {
      if (sections.length > 0) {
        sections[sections.length - 1].endIndex = i;
      }
      sections.push({
        title: lines[i].substring(3).trim(),
        startIndex: i,
        endIndex: lines.length
      });
    }
  }

  // Sections that always have a "Based on" field
  const alwaysHasBasedOn = new Set([
    "Neural Captures V2",
    "Neural Captures V1",
    "Guitar amps",
    "Bass amps",
    "Guitar cabinets",
    "Bass cabinets",
    "Guitar overdrive",
    "Bass overdrive",
    "Plugin devices",
    "Announced devices that have not yet been released"
  ]);

  const parsedSections: Section[] = [];

  for (const sec of sections) {
    const sLines = lines.slice(sec.startIndex + 1, sec.endIndex);
    
    // Find first version number in the section
    const firstVersionIdx = sLines.findIndex(line => /^\d+\.\d+(\.\d+)?$/.test(line));
    if (firstVersionIdx === -1) {
      continue;
    }

    let headerEndIdx = 0;
    if (alwaysHasBasedOn.has(sec.title)) {
      if (sec.title.startsWith("Neural Captures")) {
        headerEndIdx = firstVersionIdx - 3;
      } else {
        headerEndIdx = firstVersionIdx - 2;
      }
    } else {
      const prevLine = sLines[firstVersionIdx - 1];
      const hasBasedOn = prevLine.includes("®") || prevLine.includes("™") || prevLine.startsWith("Inspired by") || prevLine.startsWith("Based on");
      headerEndIdx = hasBasedOn ? firstVersionIdx - 2 : firstVersionIdx - 1;
    }

    const dataLines = sLines.slice(headerEndIdx);
    const versionIndices: number[] = [];
    for (let i = 0; i < dataLines.length; i++) {
      if (/^\d+\.\d+(\.\d+)?$/.test(dataLines[i])) {
        versionIndices.push(i);
      }
    }

    const devices: Device[] = [];

    for (let i = 0; i < versionIndices.length; i++) {
      const vIdx = versionIndices[i];
      const version = dataLines[vIdx];

      let name = "";
      let basedOn: string | undefined = undefined;

      if (alwaysHasBasedOn.has(sec.title)) {
        name = dataLines[vIdx - 2];
        basedOn = dataLines[vIdx - 1];
      } else {
        const candidateBasedOn = dataLines[vIdx - 1];
        const isBasedOn = 
          candidateBasedOn.includes("®") || 
          candidateBasedOn.includes("™") || 
          candidateBasedOn.startsWith("Inspired by") || 
          candidateBasedOn.startsWith("Based on") ||
          candidateBasedOn.toLowerCase().includes("model") ||
          candidateBasedOn.toLowerCase().includes("reverb") && candidateBasedOn.length > 20 ||
          candidateBasedOn.toLowerCase().includes("delay") && candidateBasedOn.length > 20;

        if (isBasedOn && vIdx >= 2) {
          name = dataLines[vIdx - 2];
          basedOn = candidateBasedOn;
        } else {
          name = candidateBasedOn;
        }
      }

      name = name.replace(/\\/g, "").trim();
      if (basedOn) {
        basedOn = basedOn.replace(/\\/g, "").trim();
      }

      devices.push({ name, basedOn, version });
    }

    parsedSections.push({
      title: sec.title,
      devices
    });
  }

  // Ensure output directory exists in the workspace
  const workspaceUploadsDir = "c:\\Users\\alanho\\Documents\\personal-agents\\uploads";
  if (!fs.existsSync(workspaceUploadsDir)) {
    fs.mkdirSync(workspaceUploadsDir, { recursive: true });
  }

  // Build a beautiful, rich Markdown document structured for user manual parameter editing.
  let mdContent = `# Quad Cortex Official Device List (with Parameters & Units)

This is a compact, high-density reference of all Quad Cortex devices and their parameters.
Use this document as a strict reference for exact device names and parameter structures.

---

## Category Parameter Templates

Below are the standard parameter layouts, ranges, and units for key categories. Use these as defaults for devices in these categories unless a device overrides them with its own list.

### 1. Guitar & Bass Amps (General)
- **Gain / Drive / Preamp** [0.0 - 10.0] - Controls input preamp gain and saturation.
- **Bass** [0.0 - 10.0] - Low-frequency shelving EQ.
- **Middle** [0.0 - 10.0] - Mid-frequency peak EQ.
- **Treble** [0.0 - 10.0] - High-frequency shelving EQ.
- **Presence** [0.0 - 10.0] - High-frequency shelving in power amp feedback loop.
- **Depth / Resonance** [0.0 - 10.0] - Low-frequency response in power amp feedback loop.
- **Master** [0.0 - 10.0] - Power amp volume / saturation.

### 2. Guitar & Bass Cabinets (Dual / Single)
- **Microphone (Mic)** [Dynamic / Condenser / Ribbon] - Selection of microphone model.
- **Position** [0.00 - 10.00] - Distance from center of speaker cone to edge.
- **Distance** [0.00 - 10.00 cm] - Distance of the microphone from the grille.
- **Low Cut** [20.0 Hz - 500.0 Hz] - High-pass filter.
- **High Cut** [500.0 Hz - 20.0 kHz] - Low-pass filter.
- **Level** [-inf dB to +12.0 dB] - Output volume of the cab block.
- **Pan** [100L - Center - 100R] - Stereo panning.

### 3. Guitar Overdrives, Fuzzes & Drives
- **Gain / Drive** [0.0 - 10.0] - Level of clipping/distortion.
- **Tone** [0.0 - 10.0] - High-cut/boost filter.
- **Level / Volume** [0.0 - 10.0] - Output level of the effect.

### 4. Delays
- **Time** [10.0 ms - 2000.0 ms] or [Subdivision: 1/16, 1/8, 1/8d, 1/4, etc.] - Delay time.
- **Feedback** [0% - 100%] - Number of repeats.
- **Mix** [0% - 100%] - Dry/wet balance.
- **Tone** [0.0 - 10.0] - High roll-off on repeats.
- **Low Cut** [20.0 Hz - 500.0 Hz] - Filters low end of repeats.
- **High Cut** [500.0 Hz - 20.0 kHz] - Filters high end of repeats.

### 5. Reverbs
- **Decay** [0.1 s - 30.0 s or Infinite] - Reverb tail length.
- **Pre-Delay** [0.0 ms - 250.0 ms] - Delay before reverb onset.
- **Mix** [0% - 100%] - Dry/wet balance.
- **Diffusion** [0.0 - 10.0] - Density of early reflections.
- **Low Cut** [20.0 Hz - 500.0 Hz] - Filters low end of reverberation.
- **High Cut** [500.0 Hz - 20.0 kHz] - Filters high end of reverberation.

---

## Devices by Category

You can manually document specific parameters and units for any device below using markdown. For example:
\`\`\`markdown
### Brit 2203
- **Parameters:** [Presence, Bass, Middle, Treble, Preamp Volume, Master Volume]
- **Special Controls:**
  - Preamp Volume [0.0 - 10.0]
  - Master Volume [0.0 - 10.0]
\`\`\`

`;

  for (const sec of parsedSections) {
    if (sec.devices.length === 0) continue;
    mdContent += `## ${sec.title}\n\n`;
    for (const dev of sec.devices) {
      if (dev.basedOn) {
        mdContent += `### ${dev.name}\n- **Based on:** *${dev.basedOn}*\n- **CorOS:** ${dev.version}\n- **Parameters:** (Add custom parameters here)\n\n`;
      } else {
        mdContent += `### ${dev.name}\n- **CorOS:** ${dev.version}\n- **Parameters:** (Add custom parameters here)\n\n`;
      }
    }
    mdContent += `\n`;
  }

  const outputMdPath = path.join(workspaceUploadsDir, "device-list-compact.md");
  fs.writeFileSync(outputMdPath, mdContent, "utf-8");
  console.log("Successfully wrote compact device list to workspace:", outputMdPath);

  // Also copy it to the cache directory as a backup
  const cacheMdPath = "C:\\Users\\alanho\\.cursor\\projects\\c-Users-alanho-Documents-personal-agents\\uploads\\device-list-compact.md";
  fs.writeFileSync(cacheMdPath, mdContent, "utf-8");

  console.log("Total sections parsed:", parsedSections.length);
}

parseDeviceList();
