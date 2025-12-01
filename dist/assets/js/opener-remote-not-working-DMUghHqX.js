async function getMod() {
  return import("./opener-remote-not-working-DUFTWkAO.js");
}
const collectedLinks = [];
const collectedStyles = [];
const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };
export {
  defaultMod as default
};
