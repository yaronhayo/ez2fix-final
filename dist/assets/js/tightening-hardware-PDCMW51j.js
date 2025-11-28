import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "The Rattle Fix: Tightening Your Garage Door Hardware",
  "description": "A rattling garage door is often caused by loose nuts and bolts. Learn what to tighten (and what NOT to touch) to quiet your door.",
  "publishDate": "2024-01-05T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/tightening-hardware.jpg",
  "category": "maintenance-tips",
  "tags": ["maintenance", "diy", "noise reduction"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "tools-you-need",
    "text": "Tools You Need"
  }, {
    "depth": 2,
    "slug": "what-to-tighten",
    "text": "What to Tighten"
  }, {
    "depth": 2,
    "slug": "what-not-to-tighten-danger-zone",
    "text": "What NOT to Tighten (DANGER ZONE)"
  }, {
    "depth": 2,
    "slug": "pro-tip",
    "text": "Pro Tip"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The average garage door opens and closes 1,500 times a year. That’s a lot of vibration. Over time, this vibration loosens the nuts and bolts that hold the track and hardware together."
    }), "\n", createVNode(_components.h2, {
      id: "tools-you-need",
      children: "Tools You Need"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Socket wrench set (usually 7/16” or 1/2”)"
      }), "\n", createVNode(_components.li, {
        children: "Stepladder"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "what-to-tighten",
      children: "What to Tighten"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Roller Brackets:"
        }), " These hold the rollers to the door. Tighten the bolts that secure them to the door panel."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hinges:"
        }), " Tighten the screws holding the hinges to the door sections."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Track Bolts:"
        }), " Check the bolts that secure the track brackets to the wall framing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Opener Hardware:"
        }), " Check the bolts holding the opener motor to the ceiling and the arm that connects the door to the trolley."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "what-not-to-tighten-danger-zone",
      children: "What NOT to Tighten (DANGER ZONE)"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Red-Headed Bolts:"
      }), " Some bolts, especially on the bottom brackets (where the cable attaches), are often painted red. ", createVNode(_components.strong, {
        children: "NEVER touch these."
      }), " They are under extreme tension from the springs. Loosening them can cause the cable to snap or the bracket to fly off, causing serious injury."]
    }), "\n", createVNode(_components.h2, {
      id: "pro-tip",
      children: "Pro Tip"
    }), "\n", createVNode(_components.p, {
      children: "Don’t overtighten! You can strip the screw holes in the thin metal door panels. Just snug them up until they are firm."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/blog/tightening-hardware.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/tightening-hardware.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/tightening-hardware.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
