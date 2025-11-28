import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "Garage Door Sizes: A Complete Guide for Homeowners",
  "description": "Building a new garage or replacing a door? Learn the standard garage door sizes for single, double, and RV garages.",
  "publishDate": "2024-02-20T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/door-sizes.jpg",
  "category": "installation-guides",
  "tags": ["installation", "planning", "sizes"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "single-car-garage-doors",
    "text": "Single Car Garage Doors"
  }, {
    "depth": 2,
    "slug": "double-car-garage-doors",
    "text": "Double Car Garage Doors"
  }, {
    "depth": 2,
    "slug": "rv-and-oversized-doors",
    "text": "RV and Oversized Doors"
  }, {
    "depth": 2,
    "slug": "how-to-measure",
    "text": "How to Measure"
  }, {
    "depth": 2,
    "slug": "custom-sizes",
    "text": "Custom Sizes"
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
      children: "Knowing the standard sizes of garage doors can save you money. Custom sizes are available but come with a custom price tag. Here are the industry standards."
    }), "\n", createVNode(_components.h2, {
      id: "single-car-garage-doors",
      children: "Single Car Garage Doors"
    }), "\n", createVNode(_components.p, {
      children: "These are designed for one vehicle."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Width:"
        }), " 8 feet, 9 feet (most common), or 10 feet."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Height:"
        }), " 7 feet (standard) or 8 feet (for taller SUVs/trucks)."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "double-car-garage-doors",
      children: "Double Car Garage Doors"
    }), "\n", createVNode(_components.p, {
      children: "These fit two vehicles side-by-side."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Width:"
        }), " 16 feet (most common) or 18 feet."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Height:"
        }), " 7 feet or 8 feet."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "rv-and-oversized-doors",
      children: "RV and Oversized Doors"
    }), "\n", createVNode(_components.p, {
      children: "For RVs, boats, or workshops."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Width:"
        }), " 10, 12, or 14 feet."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Height:"
        }), " 10 to 14 feet."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-measure",
      children: "How to Measure"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Width:"
        }), " Measure the width of the finished opening (inside the jambs)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Height:"
        }), " Measure from the floor to the bottom of the header."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Headroom:"
        }), " Measure from the top of the door opening to the ceiling (you need 10-12 inches for standard tracks)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Backroom:"
        }), " Measure the depth of the garage (door height + 18 inches)."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "custom-sizes",
      children: "Custom Sizes"
    }), "\n", createVNode(_components.p, {
      children: "If your opening is non-standard (e.g., an old carriage house with a 7’3” opening), Ez2Fix can order custom-sized doors to fit perfectly."
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
const url = "src/content/blog/standard-garage-door-sizes.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/standard-garage-door-sizes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/standard-garage-door-sizes.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
