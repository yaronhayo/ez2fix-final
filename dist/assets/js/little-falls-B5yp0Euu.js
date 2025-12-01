const littleFalls = new Proxy({ "src": "/assets/img/little-falls-BA4Glqxf.jpg", "width": 1200, "height": 669, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/little-falls.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/little-falls.jpg");
    return target[name];
  }
});
export {
  littleFalls as default
};
