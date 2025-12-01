const passaic = new Proxy({ "src": "/assets/img/passaic-JJipdr9D.jpg", "width": 1200, "height": 669, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/passaic.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/passaic.jpg");
    return target[name];
  }
});
export {
  passaic as default
};
