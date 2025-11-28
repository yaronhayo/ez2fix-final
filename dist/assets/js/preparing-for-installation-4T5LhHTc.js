import { n as createVNode, J as Fragment, _ as __astro_tag_component__ } from "./astro/server-BU2CT6Eb.js";
import "clsx";
const frontmatter = {
  "title": "How to Prepare for Your Garage Door Installation",
  "description": "Installation day is coming! Here is a checklist to prepare your garage for our technicians to ensure a smooth process.",
  "publishDate": "2024-03-05T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/installation-prep.jpg",
  "category": "installation-guides",
  "tags": ["installation", "checklist", "preparation"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-clear-the-area",
    "text": "1. Clear the Area"
  }, {
    "depth": 2,
    "slug": "2-move-your-cars",
    "text": "2. Move Your Cars"
  }, {
    "depth": 2,
    "slug": "3-keep-pets-and-kids-away",
    "text": "3. Keep Pets and Kids Away"
  }, {
    "depth": 2,
    "slug": "4-locate-power-outlets",
    "text": "4. Locate Power Outlets"
  }, {
    "depth": 2,
    "slug": "5-remove-wall-hangings",
    "text": "5. Remove Wall Hangings"
  }, {
    "depth": 2,
    "slug": "what-to-expect",
    "text": "What to Expect"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "You’ve picked out your new door, and installation day is scheduled. Here is what you need to do before the Ez2Fix team arrives to ensure the job goes quickly and safely."
    }), "\n", createVNode(_components.h2, {
      id: "1-clear-the-area",
      children: "1. Clear the Area"
    }), "\n", createVNode(_components.p, {
      children: ["We need room to work! Please clear a workspace about ", createVNode(_components.strong, {
        children: "10 feet back"
      }), " from the door opening. Move bikes, lawnmowers, and boxes to the back of the garage or outside."]
    }), "\n", createVNode(_components.h2, {
      id: "2-move-your-cars",
      children: "2. Move Your Cars"
    }), "\n", createVNode(_components.p, {
      children: "Park your cars in the street or down the block. We will need the driveway clear to park our truck and unload the new door panels."
    }), "\n", createVNode(_components.h2, {
      id: "3-keep-pets-and-kids-away",
      children: "3. Keep Pets and Kids Away"
    }), "\n", createVNode(_components.p, {
      children: "Garage door installation involves heavy lifting, power tools, and tensioned springs. For everyone’s safety, please keep children and pets inside the house."
    }), "\n", createVNode(_components.h2, {
      id: "4-locate-power-outlets",
      children: "4. Locate Power Outlets"
    }), "\n", createVNode(_components.p, {
      children: "We will need access to a power outlet for our tools and to plug in the new opener."
    }), "\n", createVNode(_components.h2, {
      id: "5-remove-wall-hangings",
      children: "5. Remove Wall Hangings"
    }), "\n", createVNode(_components.p, {
      children: "If you have shelves or decorations mounted near the door tracks or opener motor, please take them down so they don’t get knocked over or obstruct the installation."
    }), "\n", createVNode(_components.h2, {
      id: "what-to-expect",
      children: "What to Expect"
    }), "\n", createVNode(_components.p, {
      children: ["Most installations take ", createVNode(_components.strong, {
        children: "3-5 hours"
      }), ". We will remove and haul away your old door, install the new track and panels, hook up the opener, and clean up all debris before we leave."]
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
const url = "src/content/blog/preparing-for-installation.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/preparing-for-installation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/preparing-for-installation.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
