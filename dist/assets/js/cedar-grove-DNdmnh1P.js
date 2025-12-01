const cedarGrove = new Proxy({ "src": "/assets/img/cedar-grove-Ce0RzZ5I.jpg", "width": 1200, "height": 654, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/cedar-grove.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/cedar-grove.jpg");
    return target[name];
  }
});
export {
  cedarGrove as default
};
