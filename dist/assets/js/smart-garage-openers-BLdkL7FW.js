import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "Why You Should Upgrade to a Smart Garage Door Opener",
  "description": "Control your garage from anywhere. Learn the benefits of upgrading to a Wi-Fi enabled smart garage door opener.",
  "publishDate": "2024-02-15T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/smart-opener.jpg",
  "category": "installation-guides",
  "tags": ["smart home", "technology", "security"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "key-features",
    "text": "Key Features"
  }, {
    "depth": 2,
    "slug": "is-it-secure",
    "text": "Is It Secure?"
  }, {
    "depth": 2,
    "slug": "how-to-upgrade",
    "text": "How to Upgrade"
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
      children: "Gone are the days of wondering, “Did I close the garage door?” halfway to work. Smart garage door openers (like LiftMaster with myQ technology) connect to your home Wi-Fi, putting control in the palm of your hand."
    }), "\n", createVNode(_components.h2, {
      id: "key-features",
      children: "Key Features"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Remote Control:"
        }), " Open or close your door from anywhere in the world using your smartphone app."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-Time Alerts:"
        }), " Get a notification instantly if your door opens or is left open for too long."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Guest Access:"
        }), " Give temporary access to a dog walker or contractor without sharing your keypad code."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Amazon Key:"
        }), " Securely receive Amazon packages inside your garage to prevent porch piracy."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Schedules:"
        }), " Set your door to automatically close every night at 10 PM."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "is-it-secure",
      children: "Is It Secure?"
    }), "\n", createVNode(_components.p, {
      children: "Yes. Modern smart openers use encrypted signals that are much harder to hack than old remote frequencies. Plus, the ability to monitor the door gives you peace of mind."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-upgrade",
      children: "How to Upgrade"
    }), "\n", createVNode(_components.p, {
      children: "You can either replace your entire opener with a new smart model (recommended if yours is 15+ years old) or add a “smart hub” retrofit kit to your existing opener."
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
const url = "src/content/blog/smart-garage-openers.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/smart-garage-openers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/smart-garage-openers.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
