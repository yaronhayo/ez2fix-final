import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server-Bk6MH9UW.js";
import "clsx";
const frontmatter = {
  "title": "How to Make Your Garage Door Springs Last Longer",
  "description": "Springs are expensive to replace. Learn simple habits and maintenance tips to extend the lifespan of your garage door springs.",
  "publishDate": "2024-01-20T00:00:00.000Z",
  "author": "Ez2Fix Team",
  "image": "/images/blog/spring-life.jpg",
  "category": "maintenance-tips",
  "tags": ["springs", "maintenance", "cost saving"],
  "featured": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-lubricate-regularly",
    "text": "1. Lubricate Regularly"
  }, {
    "depth": 2,
    "slug": "2-check-door-balance",
    "text": "2. Check Door Balance"
  }, {
    "depth": 2,
    "slug": "3-minimize-cycles",
    "text": "3. Minimize Cycles"
  }, {
    "depth": 2,
    "slug": "4-keep-the-tracks-clean",
    "text": "4. Keep the Tracks Clean"
  }, {
    "depth": 2,
    "slug": "high-cycle-springs",
    "text": "High-Cycle Springs"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Garage door springs have a finite life, usually rated in cycles (e.g., 10,000 cycles). While you can’t stop them from eventually breaking, you can delay the inevitable."
    }), "\n", createVNode(_components.h2, {
      id: "1-lubricate-regularly",
      children: "1. Lubricate Regularly"
    }), "\n", createVNode(_components.p, {
      children: "We can’t say this enough. Rust is the enemy of springs. It increases friction and weakens the steel coils. Spray your springs with garage door lubricant every 3-6 months to keep them moving smoothly."
    }), "\n", createVNode(_components.h2, {
      id: "2-check-door-balance",
      children: "2. Check Door Balance"
    }), "\n", createVNode(_components.p, {
      children: "If your springs are losing tension, they have to work harder to lift the door. An unbalanced door puts uneven stress on the coils. Perform a balance test (lift manually to waist height) twice a year. If it’s not balanced, call a pro to adjust the tension."
    }), "\n", createVNode(_components.h2, {
      id: "3-minimize-cycles",
      children: "3. Minimize Cycles"
    }), "\n", createVNode(_components.p, {
      children: "Every time you open and close the door, you use one “cycle.”"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Don’t use the garage door as a front door."
      }), "\n", createVNode(_components.li, {
        children: "If you’re just grabbing a bike or a rake, use the side door if you have one."
      }), "\n", createVNode(_components.li, {
        children: "Avoid “partial” openings. Opening it halfway and closing it still counts as stress on the spring."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "4-keep-the-tracks-clean",
      children: "4. Keep the Tracks Clean"
    }), "\n", createVNode(_components.p, {
      children: "Dirty tracks cause the door to bind, which forces the springs (and opener) to pull harder. Wipe them down regularly."
    }), "\n", createVNode(_components.h2, {
      id: "high-cycle-springs",
      children: "High-Cycle Springs"
    }), "\n", createVNode(_components.p, {
      children: "When it is finally time to replace them, ask Ez2Fix about “high-cycle” springs. For a little extra cost, we can install springs rated for 20,000 or 30,000 cycles, effectively doubling or tripling their lifespan."
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
const url = "src/content/blog/extending-spring-life.mdx";
const file = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/extending-spring-life.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/content/blog/extending-spring-life.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
