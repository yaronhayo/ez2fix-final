const fairLawn = new Proxy({ "src": "/assets/img/fair-lawn-DBJahwxt.jpg", "width": 1200, "height": 669, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/fair-lawn.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/assets/images/cities/fair-lawn.jpg");
    return target[name];
  }
});
export {
  fairLawn as default
};
