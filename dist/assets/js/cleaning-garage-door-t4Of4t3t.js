import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server-Bk6MH9UW.js";
import "clsx";
const frontmatter = {
  "title": "Curb Appeal: How to Clean and Wax Your Garage Door",
  "description": "Your garage door takes up 30% of your home's facade. Keep it looking new with these cleaning and waxing tips.",
  "publishDate": "2023-12-20T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/cleaning-door.jpg",
  "category": "maintenance-tips",
  "tags": ["curb appeal", "cleaning", "maintenance"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "cleaning-steel-doors",
    "text": "Cleaning Steel Doors"
  }, {
    "depth": 2,
    "slug": "waxing-for-protection",
    "text": "Waxing for Protection"
  }, {
    "depth": 2,
    "slug": "cleaning-wood-doors",
    "text": "Cleaning Wood Doors"
  }, {
    "depth": 2,
    "slug": "dont-forget-the-windows",
    "text": "Don’t Forget the Windows"
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
      children: "We wash our cars, but we often neglect the giant metal wall right next to them. Dirt, salt, and acid rain can eat away at your garage door’s finish, leading to rust and fading. A little TLC keeps it looking great and protects your investment."
    }), "\n", createVNode(_components.h2, {
      id: "cleaning-steel-doors",
      children: "Cleaning Steel Doors"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mix a Solution:"
        }), " Use a mild dish soap (like Dawn) and warm water. ", createVNode(_components.strong, {
          children: "Avoid"
        }), " abrasive cleaners or strong solvents."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wash:"
        }), " Use a soft sponge or car wash mitt to gently scrub the door panels."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rinse:"
        }), " Hose it down gently. Don’t use a pressure washer, as high pressure can peel paint or damage seals."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dry:"
        }), " Wipe it down with a chamois or microfiber cloth to prevent water spots."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "waxing-for-protection",
      children: "Waxing for Protection"
    }), "\n", createVNode(_components.p, {
      children: "Just like your car, a steel garage door benefits from wax. It creates a barrier against moisture and salt (especially important in NJ winters)."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Apply:"
        }), " Use a high-quality liquid car wax."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Buff:"
        }), " Apply a thin layer, let it haze, and buff it off with a clean cloth."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Frequency:"
        }), " Waxing once a year helps prevent rust and keeps the paint looking fresh."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "cleaning-wood-doors",
      children: "Cleaning Wood Doors"
    }), "\n", createVNode(_components.p, {
      children: "Wood doors need special care."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dust:"
        }), " Wipe down with a dry cloth."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clean:"
        }), " Use a diluted wood cleaner if needed."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inspect Finish:"
        }), " Check for peeling varnish or paint. Wood doors typically need refinishing every 2-3 years to prevent rot."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "dont-forget-the-windows",
      children: "Don’t Forget the Windows"
    }), "\n", createVNode(_components.p, {
      children: "Clean garage door windows with a standard glass cleaner to keep them sparkling and let more light into your garage."
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
const url = "src/content/blog/cleaning-garage-door.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/cleaning-garage-door.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/cleaning-garage-door.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
