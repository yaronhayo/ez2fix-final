import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server-Bk6MH9UW.js";
import "clsx";
const frontmatter = {
  "title": "Insulated vs. Uninsulated Garage Doors: Which Do You Need?",
  "description": "Is insulation worth the extra cost? Compare the pros and cons of insulated vs. uninsulated garage doors.",
  "publishDate": "2024-02-05T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/insulated-vs-uninsulated.jpg",
  "category": "installation-guides",
  "tags": ["insulation", "comparison", "buying guide"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "uninsulated-doors-single-layer",
    "text": "Uninsulated Doors (Single Layer)"
  }, {
    "depth": 2,
    "slug": "insulated-doors-double-or-triple-layer",
    "text": "Insulated Doors (Double or Triple Layer)"
  }, {
    "depth": 2,
    "slug": "the-verdict",
    "text": "The Verdict"
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
      children: "When shopping for a new garage door, the first question you’ll be asked is: “Insulated or non-insulated?” Here is a breakdown to help you decide."
    }), "\n", createVNode(_components.h2, {
      id: "uninsulated-doors-single-layer",
      children: "Uninsulated Doors (Single Layer)"
    }), "\n", createVNode(_components.p, {
      children: "These are made of a single sheet of steel."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pros:"
        }), " Lowest cost. Lightweight."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cons:"
        }), " Flimsy (dents easily). Noisy (rattles in the wind). Zero thermal protection."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Best For:"
        }), " Detached garages where temperature doesn’t matter."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "insulated-doors-double-or-triple-layer",
      children: "Insulated Doors (Double or Triple Layer)"
    }), "\n", createVNode(_components.p, {
      children: "These have a layer of polystyrene or polyurethane foam, often sandwiched between two layers of steel."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pros:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Energy Efficient:"
            }), " Keeps the garage warmer in winter and cooler in summer."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Durable:"
            }), " The foam core makes the door rigid and resistant to dents."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Quiet:"
            }), " Absorbs vibration and sound."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cons:"
        }), " Higher upfront cost. Heavier (requires stronger springs)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Best For:"
        }), " Attached garages, especially if you have a bedroom above the garage."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-verdict",
      children: "The Verdict"
    }), "\n", createVNode(_components.p, {
      children: ["For most homeowners in New Jersey, an ", createVNode(_components.strong, {
        children: "insulated door is the better investment"
      }), ". The energy savings and increased durability pay for the difference over time."]
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
const url = "src/content/blog/insulated-vs-uninsulated.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/insulated-vs-uninsulated.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/insulated-vs-uninsulated.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
