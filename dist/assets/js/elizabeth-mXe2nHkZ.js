const elizabeth = new Proxy({ "src": "/assets/img/elizabeth-Dihx1TaZ.jpg", "width": 1200, "height": 654, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/elizabeth.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/elizabeth.jpg");
    return target[name];
  }
});
export {
  elizabeth as default
};
