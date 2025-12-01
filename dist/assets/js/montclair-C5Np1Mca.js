const montclair = new Proxy({ "src": "/assets/img/montclair-DLYfT91x.jpg", "width": 1200, "height": 654, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/montclair.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/montclair.jpg");
    return target[name];
  }
});
export {
  montclair as default
};
