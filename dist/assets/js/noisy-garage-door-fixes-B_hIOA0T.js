async function getMod() {
  return import("./noisy-garage-door-fixes-DpuPDaL0.js");
}
const collectedLinks = [];
const collectedStyles = [];
const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };
export {
  defaultMod as default
};
