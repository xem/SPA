# HAMMAM

HAMMAM is a tiny SPA (Single Page Application) framework,<br>
Lightweight, standalone, full-featured, and compatible with all modern browsers and devices (plus IE9).

## Features


### Component-based

- The SPA is built with "components" having their own HTML, CSS and JS.
- Each component can represent a page or a reusable element.
- Components can be easily configured and have their own state, data and methods.
- They can instanciate and contain any other component.
- They can add, remove or replace themselves or their children.
- Code can be executed when templates are created or removed


(see more)


### Templating

- Components are displayed using templates.
- Templates are regular HTML files, except they can use "mustaches" to perform tests, loops, translations, access the component's data, execute JS code, etc.
- Templates can be redrawn after changing their component's state or data

(see more)

### URL & routing

- The built-in URL engine allows to get and set URL's content, parameters and hash easily.
- The built-in router allows to display a given "page" depending on the current URL, and handle 404's.
- Using the History API, HAMMAM avoid page reloads and keeps a clean browser history.

(see more)


### Events & Forms

- HAMMAM eases the listening of events in each component, directly from the HTML or from the JS code.
- Form submits are catched and sent via AJAX requests.

(see more)


### Internationalization

- Translations are read directly from your PO files
- Fallback language(s) can be chosen for each language, to handle missing translations

(see more)

### Versioning, caching and data persistence

- App's assets are reloaded after a version bump
- Data persistence uses localStorage
- Update scripts can be used to seamlessly update the localStorage model if it changed between two versions
