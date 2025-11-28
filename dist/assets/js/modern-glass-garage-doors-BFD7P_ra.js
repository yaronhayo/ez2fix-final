import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "Modern Glass Garage Doors: Are They Right for You?",
  "description": "Sleek, stylish, and bright. Explore the pros and cons of installing a modern aluminum and glass garage door.",
  "publishDate": "2024-03-01T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/glass-doors.jpg",
  "category": "installation-guides",
  "tags": ["design", "modern", "trends"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-look",
    "text": "The Look"
  }, {
    "depth": 2,
    "slug": "pros",
    "text": "Pros"
  }, {
    "depth": 2,
    "slug": "cons",
    "text": "Cons"
  }, {
    "depth": 2,
    "slug": "beyond-the-garage",
    "text": "Beyond the Garage"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "For contemporary homes, nothing beats the look of a full-view aluminum and glass garage door. They turn a functional entry point into a stunning architectural feature."
    }), "\n", createVNode(_components.h2, {
      id: "the-look",
      children: "The Look"
    }), "\n", createVNode(_components.p, {
      children: "These doors feature a grid of aluminum frames (available in black, bronze, anodized silver, etc.) holding glass panels. They allow maximum natural light into the garage during the day and glow warmly at night."
    }), "\n", createVNode(_components.h2, {
      id: "pros",
      children: "Pros"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Curb Appeal:"
        }), " Unmatched modern aesthetic."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Light:"
        }), " Transforms a dark garage into a bright, usable space."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Durability:"
        }), " Aluminum frames are rust-proof and lightweight."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "cons",
      children: "Cons"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Privacy:"
        }), " Clear glass lets everyone see your messy garage. (Solution: Use frosted, tinted, or mirrored glass)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Insulation:"
        }), " Glass doesn’t insulate as well as foam-filled steel, though insulated glass options are available."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cost:"
        }), " These are premium doors and cost significantly more than standard steel doors."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "beyond-the-garage",
      children: "Beyond the Garage"
    }), "\n", createVNode(_components.p, {
      children: "We’re seeing a trend of using glass garage doors as “moving walls” for indoor/outdoor living spaces, opening up living rooms or kitchens to the patio."
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
const url = "src/content/blog/modern-glass-garage-doors.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/modern-glass-garage-doors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/modern-glass-garage-doors.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
