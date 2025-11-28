import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "Keep the Cold Out: Replacing Garage Door Weatherstripping",
  "description": "Drafty garage? Water seeping in? It might be time to replace your garage door weatherstripping. Here's how.",
  "publishDate": "2023-12-10T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/weatherstripping.jpg",
  "category": "maintenance-tips",
  "tags": ["insulation", "weatherproofing", "diy"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "signs-you-need-new-weatherstripping",
    "text": "Signs You Need New Weatherstripping"
  }, {
    "depth": 2,
    "slug": "types-of-seals",
    "text": "Types of Seals"
  }, {
    "depth": 2,
    "slug": "how-to-replace-t-style",
    "text": "How to Replace (T-Style)"
  }, {
    "depth": 2,
    "slug": "dont-forget-the-sides",
    "text": "Don’t Forget the Sides!"
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
      children: "The rubber seal at the bottom of your garage door (the astragal) takes a beating. It gets crushed against the concrete, frozen in winter, and baked in summer. Over time, it cracks and flattens, letting in cold air, rain, leaves, and even mice."
    }), "\n", createVNode(_components.h2, {
      id: "signs-you-need-new-weatherstripping",
      children: "Signs You Need New Weatherstripping"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Daylight:"
        }), " Close the door and turn off the lights. If you see light shining through the bottom, you have a gap."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Drafts:"
        }), " You feel cold air rushing in near the floor."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Water:"
        }), " Rainwater pools inside the garage after a storm."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pests:"
        }), " You’re finding bugs or rodents in the garage."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "types-of-seals",
      children: "Types of Seals"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "T-Style or Bulb:"
        }), " Slides into a channel on the bottom of the door. Most common on metal doors."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Nail-On:"
        }), " Nailed directly to the bottom of wooden doors."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-replace-t-style",
      children: "How to Replace (T-Style)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Remove the Old Seal:"
        }), " Open the door halfway. Slide the old rubber out of the tracks. You might need pliers if it’s stuck."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clean the Track:"
        }), " Use a screwdriver and rag to clean dirt out of the aluminum channel."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Install the New Seal:"
        }), " Fold the new rubber into a “U” shape and slide the T-ends into the tracks. It helps to have a helper feed it while you pull."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Trim:"
        }), " Cut off any excess rubber, leaving about an inch on each side to tuck back in."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "dont-forget-the-sides",
      children: "Don’t Forget the Sides!"
    }), "\n", createVNode(_components.p, {
      children: "The vinyl weatherstripping around the door frame (stop molding) also seals out drafts. If it’s cracked, pry it off and nail up new strips, pressing them gently against the door face for a tight seal."
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
const url = "src/content/blog/weatherstripping-replacement.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/weatherstripping-replacement.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/weatherstripping-replacement.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
