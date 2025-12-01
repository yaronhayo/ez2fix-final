import { z as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BJ6_oM5W.js";
import "clsx";
const frontmatter = {
  "title": "A Buyer's Guide to Choosing a New Garage Door",
  "description": "Overwhelmed by options? Learn how to choose the perfect garage door style, material, and insulation for your home.",
  "publishDate": "2024-02-01T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/choosing-new-door.jpg",
  "category": "installation-guides",
  "tags": ["buying guide", "installation", "curb appeal"],
  "featured": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-choose-your-style",
    "text": "1. Choose Your Style"
  }, {
    "depth": 2,
    "slug": "2-pick-your-material",
    "text": "2. Pick Your Material"
  }, {
    "depth": 2,
    "slug": "3-insulation-level",
    "text": "3. Insulation Level"
  }, {
    "depth": 2,
    "slug": "4-windows-or-no-windows",
    "text": "4. Windows or No Windows?"
  }, {
    "depth": 2,
    "slug": "5-budget",
    "text": "5. Budget"
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
      children: "Buying a new garage door is a big investment that can transform the look of your home. But with so many styles and materials, where do you start? Here is a simple guide to help you decide."
    }), "\n", createVNode(_components.h2, {
      id: "1-choose-your-style",
      children: "1. Choose Your Style"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Traditional:"
        }), " Classic raised panels. Fits almost any home style (Colonials, Ranches, etc.)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Carriage House:"
        }), " Looks like old-fashioned swing-out doors but opens overhead. Adds rustic charm."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Modern/Contemporary:"
        }), " Flush panels or full-view glass. Perfect for mid-century modern or contemporary homes."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "2-pick-your-material",
      children: "2. Pick Your Material"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Steel:"
        }), " The most popular choice. Durable, low maintenance, and affordable."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wood:"
        }), " Beautiful and authentic, but requires regular painting or staining. Expensive."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Faux Wood (Composite):"
        }), " The look of wood with the durability of steel."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Aluminum & Glass:"
        }), " sleek and modern, lets in lots of light."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-insulation-level",
      children: "3. Insulation Level"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Non-Insulated:"
        }), " Cheapest option. Good for detached garages."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Polystyrene (Styrofoam):"
        }), " Good value, adds some rigidity and warmth."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Polyurethane:"
        }), " The best insulation. Foam is injected into the door, making it incredibly strong and energy-efficient."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "4-windows-or-no-windows",
      children: "4. Windows or No Windows?"
    }), "\n", createVNode(_components.p, {
      children: "Windows add style and natural light. You can choose from various glass types (clear, frosted, seeded) and insert designs to match your home’s windows."
    }), "\n", createVNode(_components.h2, {
      id: "5-budget",
      children: "5. Budget"
    }), "\n", createVNode(_components.p, {
      children: "Set a budget early. Steel doors are budget-friendly, while custom wood or glass doors are premium options. Don’t forget to factor in the cost of a new opener if yours is old!"
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
const url = "src/content/blog/choosing-new-garage-door.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/choosing-new-garage-door.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/choosing-new-garage-door.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
