import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderTemplate } from "./astro/server-Bk6MH9UW.js";
import "clsx";
const $$Astro = createAstro("https://ez2fixllc.com");
const $$ResponsiveImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResponsiveImage;
  const {
    src,
    alt,
    width,
    height,
    sizes = "100vw",
    loading = "lazy",
    fetchpriority = "auto",
    class: className,
    ...rest
  } = Astro2.props;
  const getWebPPath = (path) => {
    return path.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  };
  const webpSrc = getWebPPath(src);
  return renderTemplate`${maybeRenderHead()}<picture> <!-- 
      The WebP source is enabled to serve next-gen image formats.
      For this to work correctly, ensure that for every .jpg or .png image
      referenced by this component, a corresponding .webp version exists in the same directory.
      If the .webp image is missing, the browser will fall back to the original \`src\` below,
      but it will result in a 404 request for the .webp file.
    --> <source${addAttribute(webpSrc, "srcset")} type="image/webp"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(sizes, "sizes")}${addAttribute(loading, "loading")}${addAttribute(fetchpriority, "fetchpriority")}${addAttribute(className, "class")} decoding="async"${spreadAttributes(rest)}> </picture>`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/ui/ResponsiveImage.astro", void 0);
export {
  $$ResponsiveImage as $
};
