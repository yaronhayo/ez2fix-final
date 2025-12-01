const jerseyCity = new Proxy({ "src": "/assets/img/jersey-city-BdUefLGz.jpg", "width": 1200, "height": 654, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/jersey-city.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/jersey-city.jpg");
    return target[name];
  }
});
export {
  jerseyCity as default
};
