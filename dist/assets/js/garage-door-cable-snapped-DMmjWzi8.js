import { z as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BJ6_oM5W.js";
import "clsx";
const frontmatter = {
  "title": "Snapped Garage Door Cable? Why You Should Call a Pro",
  "description": "Garage door cables are under high tension. Learn why a snapped cable is dangerous and why DIY repair is not recommended.",
  "publishDate": "2023-11-20T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/snapped-cable.jpg",
  "category": "repair-guides",
  "tags": ["safety", "cable repair", "emergency"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "signs-of-a-snapped-cable",
    "text": "Signs of a Snapped Cable"
  }, {
    "depth": 2,
    "slug": "why-its-dangerous",
    "text": "Why It’s Dangerous"
  }, {
    "depth": 2,
    "slug": "why-diy-is-a-bad-idea",
    "text": "Why DIY is a Bad Idea"
  }, {
    "depth": 2,
    "slug": "the-safe-solution",
    "text": "The Safe Solution"
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
      children: "Garage door cables work in tandem with the springs to lift and lower the heavy door. Over time, moisture and friction can cause these steel cables to fray, rust, and eventually snap."
    }), "\n", createVNode(_components.h2, {
      id: "signs-of-a-snapped-cable",
      children: "Signs of a Snapped Cable"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Door is Crooked:"
        }), " One side of the door is higher than the other."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Door Won’t Move:"
        }), " It may be jammed in the tracks."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Loose Wire:"
        }), " You see a frayed or broken wire hanging loose near the side of the door."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "why-its-dangerous",
      children: "Why It’s Dangerous"
    }), "\n", createVNode(_components.p, {
      children: "When a cable snaps, the spring tension on that side is released instantly. This puts immense stress on the remaining cable and the rollers."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Door Can Fall:"
        }), " If the other cable snaps under the extra load, the door can crash down."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Whiplash:"
        }), " A snapping cable can whip around with enough force to cause serious lacerations or damage to your car."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Spring Tension:"
        }), " Replacing a cable requires winding the torsion springs, which is the most dangerous part of garage door repair."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "why-diy-is-a-bad-idea",
      children: "Why DIY is a Bad Idea"
    }), "\n", createVNode(_components.p, {
      children: "You might see “DIY cable replacement” videos, but they often skip the safety risks."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wrong Tools:"
        }), " You need winding bars and proper safety gear."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Incorrect Tension:"
        }), " If you don’t wind the springs correctly, the door will be unbalanced and dangerous."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wrong Cable Size:"
        }), " Using a cable that is too thin can lead to another break."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-safe-solution",
      children: "The Safe Solution"
    }), "\n", createVNode(_components.p, {
      children: "At Ez2Fix, we replace cables with high-strength, galvanized steel aircraft cable. We also inspect the pulleys and drums for wear to prevent future breaks. If you have a snapped cable, don’t use the door—call us for same-day repair."
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
const url = "src/content/blog/garage-door-cable-snapped.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-door-cable-snapped.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-door-cable-snapped.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
