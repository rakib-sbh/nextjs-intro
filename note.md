## error.js file

- Automatically wrap a route segment and its nested children in a React Error Boundary
- Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity

- Isolate errors to affected segments while keeping the rest of the application functional
- Add functionality to attempt to recover from an error without a full page reload

- error.js file will not catch errors from thrown from layout.js file in the same label.

## Parallel Routes

- Parallel routes in Next.js are defined using a feature known as slots
- Slots help structure our content in a modular fashion
- To define a slot, we use @folder naming convention
- Each slot is then passed as a prop to it's corresponding layout.js file
- A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable
- Independent route handling
- Sub Navigation
- Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states.
- This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors

## Sub-navigation in routes

- Each slot of your dashboard can essentially as a mini-application, complete with its own navigation and state management
- This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.

## Unmatched Routes

### Navigation from the UI:

- In the case of navigation within the UI, Next.js retains the previously active state of a slot regardless of changes in the URL.

### Page Reload:

- Next.js immediately searches for a default.js file within each unmatched slot.
- The presence of this file is critical, as it provides the default content that Next.js will render in the interface.
- If this default.js file is missing in any of the unmatched slot for the current route, Next.js will render 404

## default.js file

- the `default.js` file in Next.js serves as a fallback to render content when the framework cannot retrive a slot's active state from the current URL.
- You have complete freedom to define the UI for unmatched routes. You can either mirror the content found in `page.js` or craft an entirely custom view
