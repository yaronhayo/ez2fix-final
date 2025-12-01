const hackensack = new Proxy({ "src": "/assets/img/hackensack-DLj5G9cY.jpg", "width": 1200, "height": 654, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/hackensack.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/hackensack.jpg");
    return target[name];
  }
});
export {
  hackensack as default
};
