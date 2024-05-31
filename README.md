## Metadata Rules

- Both layout.js and page.js files can export metadata. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page. Metadate is read in order, from the root level down to the final page level

## Templates

- Templates are similar to layouts in that they wrap each child layout or page
- But, with templates, when a user navigates between routes that share a template, a new instance of the component is mounted. DOM elements are recreated, state is not preserved, and effects are re-synchronized.
- A template can be defined by exporting a default React Component from a template.js or template.tsx file
- Similar to layout, templated also should accept a children prop which will render the nested segments in the route

## Page rendering flow

- page.js -> template.js -> layout.js

## Special Files

- page.js
- layout.js
- template.js
- error.js
- not-found.js
- loading.js
