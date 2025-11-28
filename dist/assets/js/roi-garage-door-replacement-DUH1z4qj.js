import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "The ROI of a New Garage Door: Is It Worth It?",
  "description": "Replacing your garage door offers one of the highest returns on investment of any home improvement project. Here's why.",
  "publishDate": "2024-02-25T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/roi-replacement.jpg",
  "category": "installation-guides",
  "tags": ["roi", "home value", "real estate"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-numbers",
    "text": "The Numbers"
  }, {
    "depth": 2,
    "slug": "why-the-high-roi",
    "text": "Why the High ROI?"
  }, {
    "depth": 2,
    "slug": "selling-your-home",
    "text": "Selling Your Home?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["If you’re looking for a home improvement project that pays for itself, look no further than your garage door. According to the annual “Cost vs. Value” report by Remodeling Magazine, garage door replacement consistently ranks in the ", createVNode(_components.strong, {
        children: "top 3 projects for ROI"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "the-numbers",
      children: "The Numbers"
    }), "\n", createVNode(_components.p, {
      children: ["On average, homeowners recoup about ", createVNode(_components.strong, {
        children: "93-98%"
      }), " of the cost of a new garage door when they sell their home. In some markets, it’s over 100%."]
    }), "\n", createVNode(_components.h2, {
      id: "why-the-high-roi",
      children: "Why the High ROI?"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Curb Appeal:"
        }), " The garage door often takes up 30-40% of a home’s facade. A new, stylish door instantly modernizes the look of the entire house."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Energy Efficiency:"
        }), " Buyers love energy-efficient upgrades. An insulated door lowers heating/cooling bills, which is a major selling point."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security:"
        }), " New doors come with better locking mechanisms and safer openers."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Low Maintenance:"
        }), " Modern steel and composite doors require very little upkeep compared to old wood doors."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "selling-your-home",
      children: "Selling Your Home?"
    }), "\n", createVNode(_components.p, {
      children: "If you’re planning to sell soon, replacing an old, dented, or faded garage door is one of the smartest moves you can make to increase your asking price and attract buyers."
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
const url = "src/content/blog/roi-garage-door-replacement.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/roi-garage-door-replacement.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/roi-garage-door-replacement.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
