import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server-Bk6MH9UW.js";
import "clsx";
const frontmatter = {
  "title": "How to Use Your Garage Door Emergency Release Cord",
  "description": "Power outage? Learn how to safely use the red emergency release cord to open your garage door manually.",
  "publishDate": "2023-11-15T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/emergency-release.jpg",
  "category": "repair-guides",
  "tags": ["safety", "emergency", "power outage"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "when-to-use-it",
    "text": "When to Use It"
  }, {
    "depth": 2,
    "slug": "how-to-disconnect-go-into-manual-mode",
    "text": "How to Disconnect (Go into Manual Mode)"
  }, {
    "depth": 2,
    "slug": "how-to-reconnect-go-back-to-automatic",
    "text": "How to Reconnect (Go back to Automatic)"
  }, {
    "depth": 2,
    "slug": "cord-broken",
    "text": "Cord Broken?"
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
      children: "When the power goes out, your automatic garage door opener becomes a paperweight. But you don’t have to be trapped. Every opener has a manual release mechanism—that red rope hanging from the trolley."
    }), "\n", createVNode(_components.h2, {
      id: "when-to-use-it",
      children: "When to Use It"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Power Outage:"
        }), " To open the door manually."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Broken Opener:"
        }), " If the motor fails."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Maintenance:"
        }), " To disconnect the door for testing balance."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "WARNING:"
      }), " Only use the release cord when the garage door is ", createVNode(_components.strong, {
        children: "CLOSED"
      }), ". If you pull it when the door is open, and the springs are weak or broken, the door could crash down, causing severe injury or damage."]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-disconnect-go-into-manual-mode",
      children: "How to Disconnect (Go into Manual Mode)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Ensure the Door is Closed."
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pull the Red Cord Down and Back:"
        }), " Pull the handle down and towards the motor. You should hear a click as the trolley disconnects from the carriage."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Lift the Door:"
        }), " You should now be able to lift the door manually. If it’s too heavy to lift, you may have a broken spring (stop and call a pro)."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-reconnect-go-back-to-automatic",
      children: "How to Reconnect (Go back to Automatic)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Close the Door:"
        }), " Manually lower the door to the ground."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pull the Cord Toward the Door:"
        }), " Pull the red handle toward the door opening (away from the motor). This resets the spring lever on the trolley."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Run the Opener:"
        }), " Press your remote or wall button. The trolley will move along the track and automatically snap back into the carriage with a loud click."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test:"
        }), " The door should now operate automatically."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "cord-broken",
      children: "Cord Broken?"
    }), "\n", createVNode(_components.p, {
      children: "If your emergency release cord has snapped, don’t replace it with a regular rope. Call Ez2Fix for a proper replacement handle and cord to ensure safety."
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
const url = "src/content/blog/manual-release-cord.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/manual-release-cord.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/manual-release-cord.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
