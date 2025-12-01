import { z as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BJ6_oM5W.js";
import "clsx";
const frontmatter = {
  "title": "The Ultimate Seasonal Garage Door Maintenance Checklist",
  "description": "Keep your garage door running smoothly year-round with this essential spring and fall maintenance checklist.",
  "publishDate": "2023-12-01T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/seasonal-maintenance.jpg",
  "category": "maintenance-tips",
  "tags": ["checklist", "seasonal", "diy"],
  "featured": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "visual-inspection",
    "text": "Visual Inspection"
  }, {
    "depth": 2,
    "slug": "operational-checks",
    "text": "Operational Checks"
  }, {
    "depth": 2,
    "slug": "lubrication",
    "text": "Lubrication"
  }, {
    "depth": 2,
    "slug": "weatherstripping",
    "text": "Weatherstripping"
  }, {
    "depth": 2,
    "slug": "when-to-call-a-pro",
    "text": "When to Call a Pro"
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
      children: "Your garage door is the largest moving part of your home. Just like your car, it needs regular tune-ups to perform safely and efficiently. We recommend performing a thorough inspection twice a year: once in the Spring and once in the Fall."
    }), "\n", createVNode(_components.h2, {
      id: "visual-inspection",
      children: "Visual Inspection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Look at the Springs:"
        }), " Are they rusty? Do they look stretched?"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the Cables:"
        }), " Look for fraying or loose strands."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inspect the Rollers:"
        }), " Are they chipped, cracked, or worn down?"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Examine the Hardware:"
        }), " Check for loose bolts on the tracks and hinges."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "operational-checks",
      children: "Operational Checks"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Listen:"
        }), " Open and close the door. Is it louder than usual? Does it grind or squeak?"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Balance Test:"
        }), " Disconnect the opener and lift the door manually. It should lift smoothly and stay open at waist height."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Safety Reverse Test:"
        }), " Place a 2x4 board flat on the ground in the center of the opening. Close the door. It should reverse automatically when it hits the wood."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Photo-Eye Test:"
        }), " Wave a broom handle in front of the sensors while the door is closing. It should reverse immediately."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "lubrication",
      children: "Lubrication"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Springs:"
        }), " Spray with garage door lubricant."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rollers:"
        }), " Lubricate the bearings (if metal)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hinges:"
        }), " Spray the pivot points."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tracks:"
        }), " ", createVNode(_components.strong, {
          children: "DO NOT"
        }), " lubricate the tracks! Wipe them clean with a rag."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "weatherstripping",
      children: "Weatherstripping"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bottom Seal:"
        }), " Check the rubber seal at the bottom of the door. Is it cracked or brittle? If you can see daylight under the door, it’s time to replace it."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "when-to-call-a-pro",
      children: "When to Call a Pro"
    }), "\n", createVNode(_components.p, {
      children: "If you find broken springs, frayed cables, or if the door fails the balance or safety tests, call Ez2Fix for a professional tune-up."
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
const url = "src/content/blog/seasonal-maintenance-checklist.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/seasonal-maintenance-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/seasonal-maintenance-checklist.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
