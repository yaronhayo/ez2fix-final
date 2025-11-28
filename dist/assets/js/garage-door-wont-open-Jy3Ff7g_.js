import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "Garage Door Won't Open? 5 Common Reasons and Fixes",
  "description": "Is your garage door stuck? Learn the 5 most common reasons why your garage door won't open and how to fix them quickly and safely.",
  "publishDate": "2023-10-15T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/garage-door-wont-open.jpg",
  "category": "repair-guides",
  "tags": ["troubleshooting", "opener repair", "diy tips"],
  "featured": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-dead-transmitter-batteries",
    "text": "1. Dead Transmitter Batteries"
  }, {
    "depth": 2,
    "slug": "2-misaligned-photo-eye-sensors",
    "text": "2. Misaligned Photo-Eye Sensors"
  }, {
    "depth": 2,
    "slug": "3-broken-torsion-spring",
    "text": "3. Broken Torsion Spring"
  }, {
    "depth": 2,
    "slug": "4-disconnected-disconnect-switch",
    "text": "4. Disconnected Disconnect Switch"
  }, {
    "depth": 2,
    "slug": "5-locked-door",
    "text": "5. Locked Door"
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
      children: "It’s a frustrating scenario: you’re running late for work, you press the button on your garage door remote, and… nothing happens. Or maybe the motor hums, but the door refuses to budge. Before you panic, check these 5 common reasons why your garage door won’t open."
    }), "\n", createVNode(_components.h2, {
      id: "1-dead-transmitter-batteries",
      children: "1. Dead Transmitter Batteries"
    }), "\n", createVNode(_components.p, {
      children: "This is the most common (and easiest to fix) issue. If your wall switch works but your remote doesn’t, it’s likely just a dead battery."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Fix:"
        }), " Replace the battery in your remote. Most use a standard CR2032 coin battery or a small 12V alkaline battery."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "2-misaligned-photo-eye-sensors",
      children: "2. Misaligned Photo-Eye Sensors"
    }), "\n", createVNode(_components.p, {
      children: "Safety sensors are located near the floor on either side of the garage door tracks. If they are misaligned or blocked by debris, the door will not close (and sometimes won’t open properly if the logic board is confused)."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Fix:"
        }), " Check for dirt on the lenses or objects in the path. Gently adjust the sensors until the LED lights on both units are solid, not blinking."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-broken-torsion-spring",
      children: "3. Broken Torsion Spring"
    }), "\n", createVNode(_components.p, {
      children: "If you hear a loud “bang” from your garage, you likely have a broken torsion spring. The spring sits above the door and does the heavy lifting. If it breaks, the door becomes extremely heavy and the opener won’t be able to lift it."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Fix:"
        }), " ", createVNode(_components.strong, {
          children: "Do not attempt to fix this yourself."
        }), " Garage door springs are under high tension and can cause serious injury. Call a professional immediately."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "4-disconnected-disconnect-switch",
      children: "4. Disconnected Disconnect Switch"
    }), "\n", createVNode(_components.p, {
      children: "Every garage door opener has a manual disconnect cord (usually with a red handle). If this was pulled accidentally, the motor is disconnected from the door."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Fix:"
        }), " Pull the cord toward the door to re-engage the carriage with the trolley track. Run the opener to snap it back into place."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "5-locked-door",
      children: "5. Locked Door"
    }), "\n", createVNode(_components.p, {
      children: "It sounds silly, but if your door has a manual slide lock, check to ensure it hasn’t been engaged. This often happens if children have been playing in the garage."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Fix:"
        }), " Simply slide the lock handle to the open position."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "when-to-call-a-pro",
      children: "When to Call a Pro"
    }), "\n", createVNode(_components.p, {
      children: "If you’ve checked the batteries, sensors, and locks, and the door still won’t open, it’s time to call Ez2Fix. We offer same-day emergency service to get your door moving again."
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
const url = "src/content/blog/garage-door-wont-open.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-door-wont-open.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-door-wont-open.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
