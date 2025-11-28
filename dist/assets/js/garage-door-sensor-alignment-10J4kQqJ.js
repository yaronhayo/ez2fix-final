async function getMod() {
  return import("./garage-door-sensor-alignment-DPMIrWAs.js");
}
const collectedLinks = [];
const collectedStyles = [];
const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };
export {
  defaultMod as default
};
