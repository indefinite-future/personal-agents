# Quad Cortex Official Device List (with Parameters & Units)

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
```markdown
### Brit 2203
- **Parameters:** [Presence, Bass, Middle, Treble, Preamp Volume, Master Volume]
- **Special Controls:**
  - Preamp Volume [0.0 - 10.0]
  - Master Volume [0.0 - 10.0]
```

## Neural Captures V2

### Brit 2203 87
- **Based on:** *Marshall® JCM800® 1987*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### DC Heavy Crusader
- **Based on:** *Dean Costello Audio® Heavy Metal Warfare®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Dovre 50
- **Based on:** *Dover Amplification® DA-50®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Drywood Purple Horror
- **Based on:** *Driftwood Amplifiers® Purple Nightmare®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Dumbbell ODS
- **Based on:** *Overdrive Special® by Dumble®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### ENG Feral 120
- **Based on:** *ENGL® Savage® 120*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### EV101IIIS EL34
- **Based on:** *EVH® 5150 III®S EL34*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Fryed Pit Bull 50
- **Based on:** *Fryette® Pittbull Fifty/CL®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Nailer Battle 38
- **Based on:** *Naylor® Duel 38®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### RV Amp G120
- **Based on:** *Revv Amplification® Generator 120® MK3*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### US DLX 58
- **Based on:** *Fender® Deluxe 5E2® 1958*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### UK C10 64
- **Based on:** *Vox® AC10® 1964*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Gibb GA8
- **Based on:** *Gibson® GA-8®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Super Bolt
- **Based on:** *Two Notes® Supro® Thunderbolt 15”®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Amped Super Valve Pro
- **Based on:** *Ampeg® SVT-2® Pro*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Bass Mark LM3
- **Based on:** *Markbass® Little Mark® III*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### CA 400
- **Based on:** *Mesa® Boogie® Bass 400®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Peace BC1
- **Based on:** *Pearce® BC-1®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Tech41 GED12
- **Based on:** *Tech 21® SansAmp® GED-2112®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 4-Comp Custom
- **Based on:** *Based on a handmade, heavily-modified device inspired by Keeley Electronics® 4 Knob®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Bogna Bloom
- **Based on:** *Bogner® Harlow®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Symmetrical Comp
- **Based on:** *Darkglass® Super Symmetry® 115 GeV®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### OC-76 Comp
- **Based on:** *Origin Effects® Cali76®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Beehive Wasp Fuzz
- **Based on:** *Beetronics® Vezzpa®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Iba Basic Fuzz
- **Based on:** *Ibanez® No. 59 Standard Fuzz®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Love Believer
- **Based on:** *Lovepedal® Believe®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Love Bender Mk3
- **Based on:** *Lovepedal® MKIII Tonebender®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Love Fuzz Lord III
- **Based on:** *Lovepedal® Fuzz Master III®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### MKK Bass Lord
- **Based on:** *Malekko® B:assmaster®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Otso Bender Mk1
- **Based on:** *Otsola® Mk1*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Reus Bender Mk2
- **Based on:** *Reuss Musical Instruments® Germanium Bender®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Trademark Fuzz
- **Based on:** *Hallmark® Guitars Nu-Fuzz®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Unsound Hyper Pozzum
- **Based on:** *Unsound Circuitry® Hyper Pozzum®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Unsound Kato
- **Based on:** *Unsound Circuitry® Kato®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Chief HM2
- **Based on:** *Boss® HM-2®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Love Champion
- **Based on:** *Lovepedal® Champ®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Love DLX
- **Based on:** *Lovepedal® 5E3 Deluxe®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Love TM
- **Based on:** *Lovepedal® JTM®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Love Drive 11
- **Based on:** *Lovepedal® OD Eleven®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### TW Tube Drive
- **Based on:** *Tube Works® Tube Driver®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Unsound Shivver
- **Based on:** *Unsound Circuitry® Shivver®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)


## Neural Captures V1

### ABA MPre1
- **Based on:** *ADA® MP1® Preamp*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Aggi 700
- **Based on:** *Aguilar® AG700®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Aggi 751
- **Based on:** *Aguilar® DB751®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Aggi Hammer 500
- **Based on:** *Aguilar® ToneHammer 500®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Amped SV Classic
- **Based on:** *Ampeg® SVT Classic®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Amped V5B
- **Based on:** *Ampeg® V-4B®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Anima Fuzz
- **Based on:** *Human Gear® Animato®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### BBD SonicMax
- **Based on:** *BBE® Sonic Stomp Sonic Maximizer®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Bogna Fish
- **Based on:** *Bogner® Fish®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Bogna Fish+290
- **Based on:** *Bogner® Fish® + Mesa® Boogie® Stereo Simul-Class™ 2:Ninety™*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Bogna Uber
- **Based on:** *Bogner® Überschall®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X Blue
- **Based on:** *Bogner® Ecstasy Blue®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Ch1
- **Based on:** *Bogner® Ecstasy 100B® Ch1*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Ch2
- **Based on:** *Bogner® Ecstasy 100B® Ch2*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Ch3
- **Based on:** *Bogner® Ecstasy 100B® Ch3*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B PA NEW
- **Based on:** *Bogner® Ecstasy 100B® Power Amp EL34 New*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B PA NEW+VAR
- **Based on:** *Bogner® Ecstasy® 100B Power Amp EL34 New+Var*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B PA OLD
- **Based on:** *Bogner® Ecstasy 100B® Power Amp EL34 Old*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B PA OLD+VAR
- **Based on:** *Bogner® Ecstasy® 100B Power Amp EL34 Old+Var*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Pre Ch1
- **Based on:** *Bogner® Ecstasy 100B® Preamp Ch1*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Pre Ch2 Hi
- **Based on:** *Bogner® Ecstasy 100B® Preamp Ch2 High Gain*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Pre Ch2 Lo
- **Based on:** *Bogner® Ecstasy 100B® Preamp Ch2 Low Gain*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Pre Ch3 Lead
- **Based on:** *Bogner® Ecstasy 100B® Preamp Ch3 Lead*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bogna X100B Pre Ch3 Plexi
- **Based on:** *Bogner® Ecstasy 100B® Preamp Ch3 Plexi*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Brit 2210
- **Based on:** *Marshall® JCM800® 2210*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Brit 2210 PA EL34
- **Based on:** *Marshall® 2210 Power Amp EL34*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Brit 2555 Clean
- **Based on:** *Marshall® Silver Jubilee® 2555 Clean*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Brit 2555 Lead
- **Based on:** *Marshall® Silver Jubilee® 2555 Lead*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Brit 2555 Rhy
- **Based on:** *Marshall® Silver Jubilee® 2555 Rhythm*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Brit PA-EL34
- **Based on:** *Marshall® Silver Jubilee 2555®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 3Axe
- **Based on:** *Mesa® Boogie® Triaxis®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 3Axe+290
- **Based on:** *Mesa® Boogie® Triaxis® + Mesa® Boogie® Stereo Simul-Class™ 2:Ninety™*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA BassWalk
- **Based on:** *Mesa® Boogie® Walkabout™*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA BigBrick750
- **Based on:** *Mesa® Boogie® Big Block 750®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA John's
- **Based on:** *Mesa Boogie® JP2C® Channels 1-3*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA John's Ch1
- **Based on:** *Mesa Boogie® JP2C® Ch1*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA John's Ch2
- **Based on:** *Mesa Boogie® JP2C® Ch2*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA John's Ch3
- **Based on:** *Mesa Boogie® JP2C® Ch3*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA M6Rifle
- **Based on:** *Mesa® Boogie® M6 Carbine®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA MixBass
- **Based on:** *Mesa® Boogie® M6 Carbine® & Big Block 750® Mixed*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA MkCC+
- **Based on:** *Mesa® Boogie® Mark IIC+®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA MkIIIRed
- **Based on:** *Mesa® Boogie® Mark III Red Stripe®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA PA-Sim290
- **Based on:** *Mesa® Boogie® Stereo Simul-Class™ 2:Ninety™*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA Quad+290
- **Based on:** *Mesa® Boogie® Quad Preamp® + Mesa® Boogie® Stereo Simul-Class™ 2:Ninety™*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA Studio+290
- **Based on:** *Mesa® Boogie® Studio Preamp® + Mesa® Boogie® Stereo Simul-Class™ 2:Ninety™*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA Tremo Blues
- **Based on:** *Mesa Boogie® Trem-O-Verb® Red Blues*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA Tremo Clean
- **Based on:** *Mesa Boogie® Trem-O-Verb® Orange Clean*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA Tremo Modern
- **Based on:** *Mesa Boogie® Trem-O-Verb® Red Modern*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA Tremo Vintage
- **Based on:** *Mesa Boogie® Trem-O-Verb® Orange Vintage*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Chief Bass Overdrive
- **Based on:** *Boss® ODB-3®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Comet 60
- **Based on:** *Komet® 60*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Corn Vixen
- **Based on:** *Cornford® Hellcat®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Crank Rev1
- **Based on:** *Krank® Rev1*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Cravin X100
- **Based on:** *Carvin® X100B® Series IV*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Custom 3SE
- **Based on:** *Custom Audio Amplifier® 3+SE®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Custom 3SE+290
- **Based on:** *Custom Audio Amplifier® 3+SE® + Mesa® Boogie® Stereo Simul-Class™ 2:Ninety™*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch1
- **Based on:** *Diezel® VH4® Ch1*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch2
- **Based on:** *Diezel® VH4® Ch2*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch3
- **Based on:** *Diezel® VH4® Ch3*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch4
- **Based on:** *Diezel® VH4® Ch4*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell Herb
- **Based on:** *Diezel® Herbert®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell PA-6550
- **Based on:** *Diezel® Herbert® 6550® Power Amp*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Darkglass AO900
- **Based on:** *Darkglass® Alpha·Omega 900®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Darkglass AOU
- **Based on:** *Darkglass® Alpha·Omega Ultra®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Darkglass B7K
- **Based on:** *Darkglass® B7K®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Darkglass MT900V2
- **Based on:** *Darkglass® Microtubes 900® V2*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Darkglass VMT
- **Based on:** *Darkglass® Vintage Microtubes®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Darkglass VMT+B7K
- **Based on:** *Darkglass® Vintage Microtubes® & B7K® Mixed*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Darkglass VU
- **Based on:** *Darkglass® Vintage Ultra®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### ENG Energy
- **Based on:** *ENGL® Powerball® Mark I*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### ENG Marty's
- **Based on:** *ENGL® Inferno® Marty Friedman Signature*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### ENG PA-930
- **Based on:** *ENGL® Tube Poweramp® 930/60*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### ENG Rainbow
- **Based on:** *ENGL® Ritchie Blackmore Signature 100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Exotic BB
- **Based on:** *Xotic Effects® BB Preamp®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Exotic SL
- **Based on:** *Xotic Effects® SL Drive®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Fryed Sig10
- **Based on:** *Fryette® SigX®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Gametrader Magma
- **Based on:** *Gamechanger Audio® Plasma®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Iba Green
- **Based on:** *Ibanez® Tube Screamer 9®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Iba Sonic Dist 9
- **Based on:** *Ibanez® Sonic Distortion 9®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### MadPro Golden
- **Based on:** *Mad Professor® Golden Cello®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### MadPro SimpleOD
- **Based on:** *Mad Professor® Simple Overdrive®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### MetalX M1K Clean
- **Based on:** *Metaltronix® M1000® Clean*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### MetalX M1K Stage1
- **Based on:** *Metaltronix® M1000® HiGain Stage 1*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### MetalX M1K Stage2
- **Based on:** *Metaltronix® M1000® HiGain Stage 2*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### MX BassFuzzDLX
- **Based on:** *MXR® Bass Fuzz Deluxe®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### MX ClassicOD
- **Based on:** *MXR® Classic Distortion®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### NoMatch Chief
- **Based on:** *Matchless® Chieftain®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### OMG PA-KT66
- **Based on:** *Omega Ampworks® KT66® Poweramp*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Paul's MT16
- **Based on:** *Paul Reed Smith® MT15*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Pearce Billy
- **Based on:** *Pearce® BC1® Bass Preamp*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### PV 505Sig
- **Based on:** *Peavey® 5150® Signature*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Range AD200
- **Based on:** *Orange® AD200 Bass MK3®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Range Rock
- **Based on:** *Orange® Rocker® 30*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Range Rverb
- **Based on:** *Orange® Rockerverb® 100 MK3*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Range Stormverb
- **Based on:** *Orange® Thunderverb® 50*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Rodent+SV
- **Based on:** *ProCo® Rat® + Ampeg® SVT Classic®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Rodent+V5B
- **Based on:** *ProCo® Rat® + Ampeg® V-4B®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### SCity B120
- **Based on:** *Sound City® B120®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### TeaBird
- **Based on:** *Antti® T-Bird®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Tech41 BDDI
- **Based on:** *Tech21® Bass Driver DI®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Tech41 GED
- **Based on:** *Tech 21® SansAmp® Geddy Lee YYZ Preamp®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Tech41 PSA
- **Based on:** *Tech21® SansAmp® PSA®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Tech41 VTBassDLX
- **Based on:** *Tech21® VT Bass Deluxe®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### TuneRoyal MK2
- **Based on:** *Tone King® Imperial MKII®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### US HRDLX ChA
- **Based on:** *Fender® Hot Rod Deluxe® Channel A*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### US HRDLX ChB
- **Based on:** *Fender® Hot Rod Deluxe® Channel B*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### US HRDLX PA 6V6
- **Based on:** *Fender® Hot Rod Deluxe® Power Amp 6V6*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### US Prince 65
- **Based on:** *Fender® Princeton® 65*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### VHD PA-2502
- **Based on:** *VHT® Two/Fifty/Two®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Victor Marshal
- **Based on:** *Victory® Sheriff® 22*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Victor Mega Squid
- **Based on:** *Victory® Super Kraken®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Warwitch ProF5
- **Based on:** *Warwick® Pro Fet 5.1®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom 1959
- **Based on:** *Hermansson Hiwatt® Custom PA100® 1959 Channel*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom Clean
- **Based on:** *Hermansson Hiwatt® Custom PA100® Clean Channel*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom Jose
- **Based on:** *Hermansson Hiwatt® Custom PA100® Jose Channel*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom LoMid1
- **Based on:** *Hermansson Hiwatt® Custom PA100® Power Amp EL34 with LoMid1 engaged*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom LoMid2
- **Based on:** *Hermansson Hiwatt® Custom PA100® Power Amp EL34 with LoMid2 engaged*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom LoMid3
- **Based on:** *Hermansson Hiwatt® Custom PA100® Power Amp EL34 with LoMid3 engaged*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom Pre 1959
- **Based on:** *Hermansson Hiwatt® Custom PA100® Preamp 1959*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom Pre Clean
- **Based on:** *Hermansson Hiwatt® Custom PA100® Preamp Clean*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom Pre Jose
- **Based on:** *Hermansson Hiwatt® Custom PA100® Preamp Jose*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom Pre VH
- **Based on:** *Hermansson Hiwatt® Custom PA100® Preamp VH*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Watt Custom VH
- **Based on:** *Hermansson Hiwatt® Custom PA100® VH Channel*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)


## Guitar amps

### Bogna Uber Clean
- **Based on:** *Bogner® Uberschall® Rev. Blue*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Bogna Uber Lead
- **Based on:** *Bogner® Uberschall® Rev. Blue*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Bogna Vishnu 20th Clean
- **Based on:** *Bogner® Shiva® 20th Anniversary*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Brit 2203
- **Based on:** *Marshall® JCM800®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit 900 Clean
- **Based on:** *Marshall® JCM900® 4100*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit 900 Lead
- **Based on:** *Marshall® JCM900® 4100*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Plexi 100 Bright
- **Based on:** *Marshall® Super Lead 100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Plexi 100 Normal
- **Based on:** *Marshall® Super Lead 100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Plexi 100 Patch
- **Based on:** *Marshall® Super Lead 100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Plexi 50 Bright
- **Based on:** *Marshall® Lead 50®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Plexi 50 Normal
- **Based on:** *Marshall® Lead 50®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Plexi 50 Patch
- **Based on:** *Marshall® Lead 50®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit TM45 Bright
- **Based on:** *Marshall® JTM 45®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit TM45 Normal
- **Based on:** *Marshall® JTM 45®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit TM45 Patch
- **Based on:** *Marshall® JTM 45®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit UBL Lead
- **Based on:** *Marshall® Silver Jubilee®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Brit UBL Lead Clip
- **Based on:** *Marshall® Silver Jubilee®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Clean 100W Normal
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Clean 100W Tweed
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Clean 50W Normal
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Clean 50W Tweed
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Drive 100W Normal
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Drive 100W Tweed
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Drive 50W Normal
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 1Star Drive 50W Tweed
- **Based on:** *Mesa® Boogie® Lone Star®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA Duo Ch3 Modern
- **Based on:** *Mesa® Boogie® Dual Rectifier®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA Duo Ch3 Raw
- **Based on:** *Mesa® Boogie® Dual Rectifier®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA Duo Ch3 Vintage
- **Based on:** *Mesa® Boogie® Dual Rectifier®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA John’s 2C Ch1
- **Based on:** *Mesa® Boogie® JP2C®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA John’s 2C Ch2
- **Based on:** *Mesa® Boogie® JP2C®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA John’s 2C Ch3
- **Based on:** *Mesa® Boogie® JP2C®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### CA Tremo Orange
- **Based on:** *Mesa® Boogie® Trem-O-Verb®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA Tremo Red
- **Based on:** *Mesa® Boogie® Trem-O-Verb®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Captain 50
- **Based on:** *Morgan® SW50®*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch1 Bright
- **Based on:** *Diezel® VH4®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Diezel® VH4®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch1 Normal
- **Based on:** *Diezel® VH4®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Diezel® VH4®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch2 Bright
- **Based on:** *Diezel® VH4®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Diezel® VH4®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch2 Normal
- **Based on:** *Diezel® VH4®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Diezel® VH4®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch3
- **Based on:** *Diezel® VH4®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Diezel® VH4®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell H4 Ch4
- **Based on:** *Diezel® VH4®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Diezel® VH4®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### D-Cell Hisbert Ch1
- **Based on:** *Diezel® Herbert®*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### D-Cell Hisbert Ch2
- **Based on:** *Diezel® Herbert®*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### D-Cell Hisbert Ch3
- **Based on:** *Diezel® Herbert®*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Dumbbell ODS
- **Based on:** *Dumble® Overdrive Special®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### EV101IIIS Blue 6L6 100W
- **Based on:** *EVH® 5150 III® 100S® 6L6*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### EV101IIIS Blue EL34 100W
- **Based on:** *EVH® 5150 III®S EL34*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 1.0.0
- **Based on:** *EV101 III Blue*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### EV101IIIS Red 6L6 100W
- **Based on:** *EVH® 5150 III® 100S® 6L6*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### EV101IIIS Red EL34 100W
- **Based on:** *EVH® 5150 III®S EL34*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 1.0.0
- **Based on:** *EV101 III Red*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Freeman 100 Clean
- **Based on:** *Friedman® HBE100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Freeman 100 Lead
- **Based on:** *Friedman® HBE100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Freeman 100 Rhythm
- **Based on:** *Friedman® HBE100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Matchmore D30 Ch1
- **Based on:** *Matchless Amplifiers® DC30® Ch1*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Matchmore D30 Ch2
- **Based on:** *Matchless Amplifiers® DC30® Ch2*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Matchmore Jefe
- **Based on:** *Matchless Amplifiers® Chieftain®*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### PV-505 Lead
- **Based on:** *Peavey® 6505®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### PV-505 Rhythm
- **Based on:** *Peavey® 6505®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Rols Jazz CH120
- **Based on:** *Roland® Jazz Chorus 120®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Solo 100 Crunch Bright
- **Based on:** *Soldano® SLO® 100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Soldano® SLO® 100®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Solo 100 Crunch Normal
- **Based on:** *Soldano® SLO® 100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Soldano® SLO® 100®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Solo 100 Lead
- **Based on:** *Soldano® SLO® 100®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Soldano® SLO® 100®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### UK C15 Normal
- **Based on:** *Vox® AC15®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### UK C15 TopBoost
- **Based on:** *Vox® AC15®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### UK C30 Normal
- **Based on:** *Vox® AC30®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### UK C30 TopBoost
- **Based on:** *Vox® AC30®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### US DLX 64 Vintage
- **Based on:** *Fender® Deluxe Reverb ‘64 Vintage®*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### US DLX 65 Reissue
- **Based on:** *Fender® Deluxe Reverb ‘65 Reissue®*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### US HP Tweed TWN Bright
- **Based on:** *Fender® High Power Tweed Twin 5F8-A®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### US HP Tweed TWN Bright Patch
- **Based on:** *Fender® High Power Tweed Twin 5F8-A®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### US HP Tweed TWN Normal
- **Based on:** *Fender® High Power Tweed Twin 5F8-A®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### US HP Tweed TWN Normal Patch
- **Based on:** *Fender® High Power Tweed Twin 5F8-A®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### US Prince
- **Based on:** *Fender® Blackface Princeton Reverb®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### US SPR Normal
- **Based on:** *Fender® Super Reverb® ‘65*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### US SPR Vibrato
- **Based on:** *Fender® Super Reverb® ‘65*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### US Tweed Basslad Bright
- **Based on:** *Fender® Bassman® Tweed*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### US Tweed Basslad Bright Patch
- **Based on:** *Fender® Bassman® Tweed*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### US Tweed Basslad Normal
- **Based on:** *Fender® Bassman® Tweed*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### US Tweed Basslad Normal Patch
- **Based on:** *Fender® Bassman® Tweed*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### US TWN Normal
- **Based on:** *Fender® Twin Reverb®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### US TWN Vibrato
- **Based on:** *Fender® Twin Reverb®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Victor Squid Ch1
- **Based on:** *Victory Amps® Kraken® Ch1*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Victor Squid Ch2
- **Based on:** *Victory Amps® Kraken® Ch2*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Watt D103 Bright
- **Based on:** *Hiwatt® DR103®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Watt D103 Normal
- **Based on:** *Hiwatt® DR103®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)


## Bass amps

### Amped Flip-Top 6464
- **Based on:** *Ampeg® Heritage® B15N®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Amped Flip-Top 6466
- **Based on:** *Ampeg® Heritage® B15N®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Amped Flip-Top 6664
- **Based on:** *Ampeg® Heritage® B15N®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Amped Flip-Top 6666
- **Based on:** *Ampeg® Heritage® B15N®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Amped Super Valve
- **Based on:** *Ampeg® Heritage® SVT-CL®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Bass 50 Bright
- **Based on:** *Marshall® Super Bass® 50*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Bass 50 Normal
- **Based on:** *Marshall® Super Bass® 50*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Bass 50 Patch
- **Based on:** *Marshall® Super Bass® 50*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 400+ Ch1
- **Based on:** *Mesa® Boogie® Bass 400+®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### CA 400+ Ch2
- **Based on:** *Mesa® Boogie® Bass 400+®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### G800K
- **Based on:** *Gallien Krueger® 800RB®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Watt Bass Mod Bright
- **Based on:** *Hiwatt® DR103® Mod*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Watt Bass Mod Normal
- **Based on:** *Hiwatt® DR103® Mod*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)


## Guitar cabinets

### 110 US PRN Brown FatJ 10s
- **Based on:** *Fender® Princeton® with FatJimmy® C1060 Drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 110 US PRN C10R
- **Based on:** *Fender® Princeton® with Jensen® C10R drivers*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### 110 US PRN Gold G10
- **Based on:** *Fender® Princeton® “Brownface” with Celestion® G10 Alnico Gold Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 112 Brit P-Series TX 33
- **Based on:** *Marshall® 1933 with Eminence® Patriot Series® Texas Heat™ Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 112 UK C15 Blue
- **Based on:** *Vox® AC15® with Celestion® Alnico Blue drivers*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### 112 US DLX Black C12K 00s
- **Based on:** *Fender® Deluxe® “Blackface” with Jensen® C12K drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 112 US DLX SC64
- **Based on:** *Fender® Deluxe® 1x12 Eminence® GA-SC64*
- **CorOS:** 1.0.2
- **Parameters:** (Add custom parameters here)

### 112 US DLX Tweed WGS-Q 10s
- **Based on:** *Fender® Deluxe® “Tweed” with WGS® G12Q drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 112 Zila MiniMod RB ’17
- **Based on:** *Zilla® Mini Modern with Celestion® G12H150 Redback drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 210 US TRMLX Oxf ’63
- **Based on:** *Fender® Tremolux® with Oxford® Alnico drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 CA Recto Legend V12
- **Based on:** *Mesa® Rectifier® 2x12 Legend V12*
- **CorOS:** 1.0.2
- **Parameters:** (Add custom parameters here)

### 212 CA Recto V30 ’98
- **Based on:** *Mesa® Rectifier® with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 Rols Jazz ’87
- **Based on:** *Roland® JC-120®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 Sur V-type 10
- **Based on:** *Suhr® Cab with Celestion® V-Type drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 Too Rock EV
- **Based on:** *Two Rock® Open Back with ElectroVoice® EVM12L Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 212 Too Rock G65
- **Based on:** *Two Rock® Open Back with Celestion® G12-65 Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 212 Too Rock KM65
- **Based on:** *Two Rock® Open Back with K&M® 65 Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 212 UK C30 ’65
- **Based on:** *VOX® AC30® Top Boost with Celestion® Alnico “Silver Bell” drivers*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### 212 UK C30 GB ’69
- **Based on:** *VOX® AC30® with Celestion® Pre-Rola Greenback Pulsonic drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 US A-type 00s
- **Based on:** *Fender® Cab with Celestion® A-Type 12” drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 US Bleached Basslad V30 01
- **Based on:** *Fender Blonde Bassman® with Celestion® Vintage 30® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 212 US TWN C12Q 00s
- **Based on:** *Fender® Twin Reverb® with Jensen® C12K-2 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 US TWN CK2
- **Based on:** *Fender® Twin Reverb® 2x12 Jensen C12K-2*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### 212 US TWN Web Classic 08
- **Based on:** *Fender Tweed Twin® with Weber® Classic Alnico® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 212 Zila CB ’16
- **Based on:** *Zilla® Cab with Celestion® Creamback G12H-75 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 212 Zila Fatboy V30 '02
- **Based on:** *Zilla® Fatboy 2x12 2002 with Celestion® UK Vintage 30*
- **CorOS:** 1.0.2
- **Parameters:** (Add custom parameters here)

### 212 Zila Open CL80 19
- **Based on:** *Zilla® Open with Celestion® Classic Lead 80® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 212 Zila Open G65 82
- **Based on:** *Zilla® Open with Celestion® G12-65® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 212 Zila Open Gold ’19
- **Based on:** *Zilla® Open with Celestion® Alnico Gold drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 410 US Basslad PR10
- **Based on:** *Fender® Bassman® Tweed with Jensen® P10R drivers*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### 412 Bogna Uber T75 00s
- **Based on:** *Bogner® Ubercab® with Celestion® T75 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Bogna Uber V30 00s
- **Based on:** *Bogner® Ubercab® with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Brit 35B Alnico Cream
- **Based on:** *Marshall® 1935B® Alnico Cream*
- **CorOS:** 1.0.2
- **Parameters:** (Add custom parameters here)

### 412 Brit 60A G75 80s
- **Based on:** *Marshall® 1960A® with Celestion® G12T-75® 80s Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 412 Brit 60A GB75Hz ’89
- **Based on:** *Marshall® 1960A® with Celestion® G12M25 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Brit 60A LB50 12
- **Based on:** *Marshall® 1960A® with Celestion® G12-50GL® Lynchback® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 412 Brit 60B GB ’71
- **Based on:** *Marshall® 1960B® with Celestion® Pulsonic Greenback drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Brit 60B GB 90s
- **Based on:** *Marshall® 1960B® with Celestion® Greenback drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Brit 60B V30 ’95
- **Based on:** *Marshall® 1960B® with Celestion® Marshall® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Brit Silver B 70w ’87
- **Based on:** *Marshall® 2551B® with Celestion® drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Brit TV GB75Hz ’69
- **Based on:** *Marshall® 1960TV® with Celestion® G12M25 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 CA Custom A Shadow 87
- **Based on:** *Mesa® Boogie® Custom with Celestion® Black Shadow® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 412 CA Dagger A V30 01
- **Based on:** *Mesa® Boogie® Stiletto® with Celestion® Vintage 30® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 412 CA Stand OS A V30 ’01
- **Based on:** *Mesa® Standard OS Angled with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 CA Stand OS A V30 '03
- **Based on:** *Mesa® Oversize Angle 2003 with Celestion® UK Vintage 30*
- **CorOS:** 1.0.2
- **Parameters:** (Add custom parameters here)

### 412 CA Stand OS S V30 90s
- **Based on:** *Mesa® Standard OS Straight with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 CA Trad A V30 ’92
- **Based on:** *Mesa® Traditional Angled with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 CA Trad S H30 ’15
- **Based on:** *Mesa® Traditional Straight with Celestion® G12H30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 CA Trad S UKV30 90s
- **Based on:** *Mesa® Traditional Straight with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Cornfield V30
- **Based on:** *Cornford® RK412® with Celestion® Vintage 30 Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 412 D-Cell Front V30 ’04
- **Based on:** *Diezel® Front Loaded with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 ENG Pro V30 18
- **Based on:** *ENGL® V30®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 EV Straight G12 00s
- **Based on:** *EVH® Straight with Celestion® G12EVH drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Range PPC V30 ’02
- **Based on:** *Orange® PPC412 with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Range PPC V30 ’03
- **Based on:** *Orange® PPC412 with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 VH Fat P50
- **Based on:** *VHT® FatBottom® with Eminence® P50e® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 412 Watt S4123
- **Based on:** *Hiwatt® SE4123® 4x12*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### 412 Zila Cust V30 ’12 V2
- **Based on:** *Zilla® Custom with Celestion® Vintage 30 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Match D30 Sig A
- **Based on:** *Matchless Amplifiers® DC30® Sig A*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Match D30 Sig B
- **Based on:** *Matchless Amplifiers® DC30® Sig B*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Match Jefe Sig 02
- **Based on:** *Matchless Amplifiers® Chieftain® Sig 02*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Match Jefe V30 02
- **Based on:** *Matchless Amplifiers® Chieftain® V30 02*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)


## Bass cabinets

### 115 Amped Modern
- **Based on:** *Ampeg® SVT® 115HE®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 210 Darkglass® Neo
- **Based on:** *Darkglass® DG212N® with custom Eminence® neodymium drivers*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### 210C Darkglass®
- **Based on:** *Darkglass® D210C® with custom Eminence® ceramic drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 410 Amped B410 90s
- **Based on:** *Ampeg® B410HE® with 90s Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 410 US Basslad P10Q ’16
- **Based on:** *Fender® Bassman® with Jensen® P10Q drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 412 Brit 35A GB55Hz ’75
- **Based on:** *Marshall® 1935A® with Celestion® G12M25 drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 810 Amped VT 90s
- **Based on:** *Ampeg® SVT810® with 90s Eminence® Speakers*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 810 Amped VT Aln 70s
- **Based on:** *Ampeg® SVT® 810® with custom Eminence® ceramic drivers*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)


## Guitar overdrive

### 81 Creations Drive
- **Based on:** *1981 Inventions® DRV®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Brit Blues
- **Based on:** *Marshall® BluesBreaker®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Brit Governor
- **Based on:** *Marshall® Guv’nor®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Chief BD2
- **Based on:** *BOSS® BD-2®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Chief DS1
- **Based on:** *BOSS® DS-1®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Chief MT
- **Based on:** *BOSS® MT-2®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Chief OD1
- **Based on:** *BOSS® OD-1®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Chief SD1
- **Based on:** *BOSS® SD-1®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Exotic
- **Based on:** *Xotic® BB Preamp®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Exotic Z Boost
- **Based on:** *Xotic® RC Booster®*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Facial Fuzz
- **Based on:** *Dunlop® Fuzzface®*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Freeman BOD
- **Based on:** *Friedman® BE-OD®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Fuzz Pi
- **Based on:** *Electro-Harmonix® Big Muff Pi®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Green 808
- **Based on:** *Ibanez® TS808®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Ibanez® TS808®
- **Based on:** *1.0.0*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### MK3 Silicon Fuzz
- **Based on:** *JHS® Bender® 1973 London®*
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Myth Drive
- **Based on:** *Klon® Centaur®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### No-Bell OD1
- **Based on:** *Nobels® ODR-1®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Obsessive Drive
- **Based on:** *Fulltone® OCD®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### OD250
- **Based on:** *DOD® Overdrive Preamp 250®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Rage Booster
- **Based on:** *Dallas® Rangemaster®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Red Drive
- **Based on:** *Keeley Electronics® Red Dirt®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Rodent Drive
- **Based on:** *ProCo® Rat®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Thunderpaw
- **Based on:** *Mr Black® Thunderclaw®*
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Vemural Ray
- **Based on:** *Vemuram® Jan Ray®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)


## Bass overdrive

### BDDI
- **Based on:** *Tech 21® Bass Driver DI®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Exotic Bass Z Boost
- **Based on:** *Xotic® RC Bass Booster®*
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Microtubes B3K
- **Based on:** *Darkglass® Microtubes B3K®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Microtubes VMT
- **Based on:** *Darkglass® Vintage Microtubes®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Soviet Fuzz
- **Based on:** *Electro-Harmonix® Russian Big Muff®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)


## Delay

### Analog Delay
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Slapback Delay
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Digital Delay
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Dual Delay
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Dual Reverse Delay
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### 2.1.0
- **Based on:** *Simple Ping Pong Delay*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Reverse Delay
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Simple Delay
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Tape Delay
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Circular Delay
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)


## Reverb

### Ambience
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Blossom (ST)
- **Based on:** *Inspired by Strymon® BigSky® Bloom mode*
- **CorOS:** 4.0.0
- **Parameters:** (Add custom parameters here)

### Cave
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Hall
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Mind Hall
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Modulated
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Nordic Concert Hall (ST)
- **Based on:** *Inspired by Valhalla VintageVerb™ Concert Hall mode*
- **CorOS:** 4.0.0
- **Parameters:** (Add custom parameters here)

### Plate
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Plate Lush
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Plate Tight
- **CorOS:** 1.2.0
- **Parameters:** (Add custom parameters here)

### Room
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Shimmer
- **CorOS:** 1.1.0
- **Parameters:** (Add custom parameters here)

### Spring (M)
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Spring (ST)
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Spring Reverb
- **Based on:** *Spring Reverb Engine (M)*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### 3.3.0
- **Based on:** *Spring Reverb Engine (ST)*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Studio Plate 70 (ST)
- **Based on:** *Lexicon® PCM70™ Rich Plate programs*
- **CorOS:** 4.0.0
- **Parameters:** (Add custom parameters here)


## Compressor

### Chief CS3
- **Based on:** *BOSS® CS-3® Compression Sustainer*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Jewel
- **Based on:** *Diamond® Compressor®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Legendary 87
- **Based on:** *Universal Audio® 1176®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Legendary 87 (ST)
- **Based on:** *Universal Audio® 1176®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Legendary 87 (S/C)
- **Based on:** *Universal Audio® 1176®*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Opto Comp
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Opto Comp (ST)
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Opto Comp (S/C)
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Solid State Comp
- **Based on:** *SSL® Bus*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Solid State Comp (ST)
- **Based on:** *SSL® Bus*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Solid State Comp (S/C)
- **Based on:** *SSL® Bus*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### VCA Comp
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### VCA Comp (ST)
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### VCA Comp (S/C)
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)


## Pitch

### Aggi Sub Octaver
- **Based on:** *Aguilar® Octamizer®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Chief OC2
- **Based on:** *BOSS® OC-2®*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Minivoicer
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Pitch Correction
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Pitch Shifter
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Poly Octaver
- **Based on:** *Electro-Harmonix® POG®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Subharmonic Synth
- **Based on:** *Digitech® DOD® Meatbox SubSynth®*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Transpose
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Wham
- **Based on:** *Digitech® Whammy®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)


## Modulation

### Chief CE2W
- **Based on:** *BOSS® CE-2W®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Chief CE2W (M)
- **Based on:** *BOSS® CE-2W®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Chief DC2W
- **Based on:** *BOSS® DC-2W® Dimension*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Chief DC2W (M)
- **Based on:** *BOSS® DC-2W® Dimension*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### Chorus 229T
- **Based on:** *TC Electronic® TC-2290®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Chorus Engine
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Digital Flanger
- **CorOS:** 1.1.0
- **Parameters:** (Add custom parameters here)

### Dream Chorus
- **Based on:** *TC Electronic® Dreamscape®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Dream Chorus (M)
- **Based on:** *TC Electronic® Dreamscape®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Dual Chorus
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Flanger Engine
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Flangerish
- **CorOS:** 1.1.0
- **Parameters:** (Add custom parameters here)

### Harmonic Tremolo
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Micro Processor (ST)
- **Based on:** *Eventide® Micropitch Delay®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### MX Flanger
- **Based on:** *MXR® Flanger M117R®*
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### MX Phase 95
- **Based on:** *MXR® Phase 95®*
- **CorOS:** 1.4.0
- **Parameters:** (Add custom parameters here)

### MX Vibes
- **Based on:** *MXR® UniVibe®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### NuVibes
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Pattern Tremolo
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Phaser
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 1.0.0
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Rotary
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Tremolo
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Vibrato
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Vintage Chorus
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)


## Morph

### Bit-Crusher (ST)
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Bit-Crusher Engine (M)
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Freeze
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)

### Phase-Locked Loop
- **Based on:** *EarthQuaker Devices® Data Corrupter®*
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)


## Filter

### Env. Filter
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 1.0.0
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Env. filter (S/C)
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### 3.0.0
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Foog
- **Based on:** *Moog® Moogerfooger® MF-101*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Love Meat
- **Based on:** *Lovetone® Meatball®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)


## EQ

### Graphic-9
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 9 Band Graphic EQ
- **CorOS:** 2.3.0
- **Parameters:** (Add custom parameters here)

### Low-High Cut
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Parametric-3
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Parametric-8
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Plugin Graphic-9
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)


## IR loader

### Dual (M)
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Dual (M) Lite
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Dual (ST)
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Dual (ST) Lite
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Single (M)
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Single (M) Lite
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Single (ST)
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Single (ST) Lite
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)


## Wah

### Auto Wah
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)

### Bad Horse
- **Based on:** *Morley® Bad Horsie®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### 1.0.0
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Bass Wah
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Bubba Wah
- **Based on:** *Dunlop® Budda Budwah®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Crying Clyde Wah
- **Based on:** *Dunlop® Cry Baby® Clyde McCoy®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### McWah
- **CorOS:** 2.0.0
- **Parameters:** (Add custom parameters here)

### Crying Wah
- **Based on:** *Dunlop® Cry Baby® GCB-95®*
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Crying Wah From Hell
- **Based on:** *Dunlop® Crybaby from Hell®*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)


## Looper

### Looper X
- **CorOS:** 1.3.0
- **Parameters:** (Add custom parameters here)


## Synth

### A free and enhanced version of the Overlord Synth from Archetype: Rabea X
- **CorOS:** 3.3.0
- **Parameters:** (Add custom parameters here)


## Utility

### Adaptive Gate
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Adaptive Gate (S/C)
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Gain
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Simple Gate
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Utility Gate
- **CorOS:** 1.0.0
- **Parameters:** (Add custom parameters here)

### Volume
- **CorOS:** 2.1.0
- **Parameters:** (Add custom parameters here)

### Phase Doctor
- **Based on:** *Inspired by the Little Labs® IBP Phase Alignment Tool™*
- **CorOS:** 4.0.0
- **Parameters:** (Add custom parameters here)

### Plugin Gate
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Doubler
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Plugin Doubler
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Plugin Blend
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Transparent Blend
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)


## Plugin devices

### Compressor
- **Based on:** *Plini Comp*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Pitch
- **Based on:** *Plini Octaver*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Plini Drive*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *Plini Pre Delay (M)*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Plini Clean*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Plini Crunch*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Plini Lead*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Plini Cab (M) & (ST)*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Modulation
- **Based on:** *Plini Chorus*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *Plini Delay (ST)*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *Plini Reverb*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Pitch
- **Based on:** *Gojira WOW*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Pitch
- **Based on:** *Gojira OCT*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Gojira OD*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Gojira DRT*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Modulation
- **Based on:** *Gojira PHSR*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Modulation
- **Based on:** *Gojira CHR*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Gojira CLN*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Gojira RST*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Gojira HOT*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Gojira Cab 1 (M) & (ST)*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Gojira Cab 2 (M) & (ST)*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Gojira Cab 3 (M) & (ST)*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *Gojira DLY (ST)*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *Gojira REV*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *Gojira REV Shimmer*
- **CorOS:** 3.0.0
- **Parameters:** (Add custom parameters here)

### Compressor
- **Based on:** *SLO-100 Compressor*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *SLO-100 Overdrive-1*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *SLO-100 Overdrive-2*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Modulation
- **Based on:** *SLO-100 Chorus*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Soldano® SLO-100®*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *SLO-100 Cab (M) & (ST)*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *SLO-100 Delay*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *SLO-100 Reverb*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Utility
- **Based on:** *Nameless Zuul*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Nameless Hexdrive*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Nameless Grind*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Fortin® Nameless*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Nameless Cab (M) & (S)*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *Nameless Delay*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *Nameless Reverb*
- **CorOS:** 3.1.0
- **Parameters:** (Add custom parameters here)

### Wah
- **Based on:** *Cory Wong Wah*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Filter
- **Based on:** *Cory Wong The Postal Service*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Compressor
- **Based on:** *Cory Wong The 4th Position Compressor*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Cory Wong The Tuber*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Cory Wong The Big Rig Overdrive*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Cory Wong D.I. Funk Console*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Cory Wong The Clean Machine*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Cory Wong The Amp Snob*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Cory Wong Cab 1 (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Cory Wong Cab 2 (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Cory Wong Cab 3 (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Modulation
- **Based on:** *Cory Wong The 80s*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *Cory Wong Delay-y-y*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *Cory Wong The Wash*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *Cory Wong The Wash Shimmer*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Compressor
- **Based on:** *Nolly Compressor*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Nolly Overdrive-1*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *Nolly Delay-1 (M)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar overdrive
- **Based on:** *Nolly Overdrive-2*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Nolly Clean*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Nolly Crunch*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Nolly Rhythm*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar amps
- **Based on:** *Nolly Lead*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Nolly Cab 1 (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Nolly Cab 2 (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Nolly Cab 3 (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Guitar cabinets
- **Based on:** *Nolly Cab 4 (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### EQ
- **Based on:** *Nolly Graphic-9*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Delay
- **Based on:** *Nolly Delay-2*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Reverb
- **Based on:** *Nolly Reverb*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Bass amps
- **Based on:** *Parallax*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)

### Bass cabinets
- **Based on:** *Parallax Cab (M) & (ST)*
- **CorOS:** 3.2.0
- **Parameters:** (Add custom parameters here)


