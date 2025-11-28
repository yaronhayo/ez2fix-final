import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "Garage Security: How to Prevent Break-Ins",
  "description": "Thieves love garages. Secure your home's biggest entry point with these essential garage door security tips.",
  "publishDate": "2024-01-15T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/garage-security.jpg",
  "category": "maintenance-tips",
  "tags": ["security", "safety", "smart home"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-keep-the-remote-inside",
    "text": "1. Keep the Remote Inside"
  }, {
    "depth": 2,
    "slug": "2-the-zip-tie-trick",
    "text": "2. The “Zip Tie” Trick"
  }, {
    "depth": 2,
    "slug": "3-smart-garage-openers",
    "text": "3. Smart Garage Openers"
  }, {
    "depth": 2,
    "slug": "4-frost-the-windows",
    "text": "4. Frost the Windows"
  }, {
    "depth": 2,
    "slug": "5-lock-the-door-to-the-house",
    "text": "5. Lock the Door to the House"
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
      children: "The garage door is a favorite target for burglars. It’s often easier to breach than a front door and offers privacy once they’re inside. Here’s how to lock them out."
    }), "\n", createVNode(_components.h2, {
      id: "1-keep-the-remote-inside",
      children: "1. Keep the Remote Inside"
    }), "\n", createVNode(_components.p, {
      children: "Don’t leave your garage door remote clipped to your car visor. If a thief breaks into your car (even in the driveway), they have a key to your house. Get a keychain remote or use a smart phone app instead."
    }), "\n", createVNode(_components.h2, {
      id: "2-the-zip-tie-trick",
      children: "2. The “Zip Tie” Trick"
    }), "\n", createVNode(_components.p, {
      children: "Thieves can use a coat hanger to fish for the emergency release cord and pull it, disengaging the door so they can lift it manually."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Fix:"
        }), " Remove the release cord handle (you can still reach the knot if needed) or use a zip tie to secure the release latch to the carriage. This prevents it from being pulled from the outside but can still be broken with a strong tug from the inside in an emergency."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-smart-garage-openers",
      children: "3. Smart Garage Openers"
    }), "\n", createVNode(_components.p, {
      children: "Upgrade to a Wi-Fi opener (like LiftMaster MyQ). These allow you to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Get alerts if the door opens."
      }), "\n", createVNode(_components.li, {
        children: "Close the door remotely from your phone."
      }), "\n", createVNode(_components.li, {
        children: "Set schedules to ensure the door closes automatically at night."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "4-frost-the-windows",
      children: "4. Frost the Windows"
    }), "\n", createVNode(_components.p, {
      children: "If you have windows, thieves can peek in to see if your car is there or spot valuable tools. Apply a frosted film to let light in while blocking the view."
    }), "\n", createVNode(_components.h2, {
      id: "5-lock-the-door-to-the-house",
      children: "5. Lock the Door to the House"
    }), "\n", createVNode(_components.p, {
      children: "Treat the door between your garage and your house like an exterior door. Install a deadbolt and keep it locked."
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
const url = "src/content/blog/garage-security-tips.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-security-tips.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/garage-security-tips.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
