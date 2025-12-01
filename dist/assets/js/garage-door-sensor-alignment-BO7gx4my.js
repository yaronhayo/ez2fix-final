import { z as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BJ6_oM5W.js";
import "clsx";
const frontmatter = {
  "title": "How to Align Garage Door Safety Sensors",
  "description": "Garage door won't close? Misaligned safety sensors are the likely culprit. Learn how to align them yourself in minutes.",
  "publishDate": "2023-11-10T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/sensor-alignment.jpg",
  "category": "repair-guides",
  "tags": ["diy tips", "safety", "troubleshooting"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-they-work",
    "text": "How They Work"
  }, {
    "depth": 2,
    "slug": "steps-to-align-sensors",
    "text": "Steps to Align Sensors"
  }, {
    "depth": 2,
    "slug": "wiring-issues",
    "text": "Wiring Issues"
  }, {
    "depth": 2,
    "slug": "need-help",
    "text": "Need Help?"
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
      children: "If your garage door starts to close, stops, and reverses back up (often with the opener lights flashing), your safety sensors are doing their job—or they think they are. These sensors prevent the door from closing on people or objects. If they get bumped out of alignment, they “think” there’s an obstruction."
    }), "\n", createVNode(_components.h2, {
      id: "how-they-work",
      children: "How They Work"
    }), "\n", createVNode(_components.p, {
      children: ["There are two sensors: a ", createVNode(_components.strong, {
        children: "sender"
      }), " (amber light) and a ", createVNode(_components.strong, {
        children: "receiver"
      }), " (green light). They shoot an invisible beam across the door opening. If the beam is broken, the door won’t close."]
    }), "\n", createVNode(_components.h2, {
      id: "steps-to-align-sensors",
      children: "Steps to Align Sensors"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clean the Lenses:"
        }), " Use a soft cloth to wipe away spiderwebs, dust, and dirt from both lenses."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the Lights:"
        }), " Look at the LEDs on both sensors.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Amber Light (Sender):"
            }), " Should always be solid. If it’s off, check the wiring."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Green Light (Receiver):"
            }), " Should be solid. If it’s off or flickering, it’s not seeing the beam."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Adjust the Receiver:"
        }), " Loosen the wing nut on the receiving sensor bracket. Gently rotate the sensor up, down, or side-to-side until the green light glows solid and bright."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tighten the Bracket:"
        }), " Once aligned, hold the sensor in place and tighten the wing nut."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test the Door:"
        }), " Try closing the door with the remote. It should close smoothly."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "wiring-issues",
      children: "Wiring Issues"
    }), "\n", createVNode(_components.p, {
      children: "If the lights won’t come on at all, check the wires running from the sensors to the motor unit. Look for staples that might have cut the insulation or loose connections at the terminals."
    }), "\n", createVNode(_components.h2, {
      id: "need-help",
      children: "Need Help?"
    }), "\n", createVNode(_components.p, {
      children: "If you can’t get the sensors to align, the units themselves might be defective. Call Ez2Fix for a quick replacement."
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
const url = "src/content/blog/garage-door-sensor-alignment.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-door-sensor-alignment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-door-sensor-alignment.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
