# SPA

SPA is a Single Page Application framework in JavaScript.<br>
Lightweight, standalone, full-featured, and compatible with all modern browsers and devices (plus IE9).

## Features

### Component-based

- The app is built with "components" having their own HTML, CSS and JS.
- Each component can represent a page or a reusable element.
- Components can be easily configured and have their own state, data and methods.
- They can instanciate and contain any other component.
- They can add, remove or replace themselves or their children.
- Code can be executed when templates are created or removed.


([see more](components.md))


### Templating

- Components are displayed using templates.
- Templates are regular HTML files, except they can use "mustaches" to perform tests, loops, translations, access the component's data, execute JS code, etc.
- Templates can be redrawn after changing their component's state or data.

([see more](templates.md))

### URL & routing

- The built-in URL engine allows to get and set URL's content, parameters and hash easily.
- The built-in router allows to display a given "page" depending on the current URL, and handle 404's.
- SPA avoids page reloads and keeps a clean browser history.

([see more](routing.md))


### Events & Forms

- SPA eases the listening of events in each component, directly from the HTML or from the JS code.
- Form submits are catched and sent via AJAX requests.

([see more](events.md))


### Internationalization

- Auto detection of the user's region and language.
- Easy declaration of available languages, and fallback language(s) to handle missing translations.
- Translations are read directly from your PO files.
- Components can have their own translation files

([see more](internationalization.md))


### Versioning, caching and data persistence

- App's assets are reloaded after a version bump.
- Data persistence uses localStorage.
- Update scripts can be used to seamlessly update the localStorage model if it changed between two versions.

([see more](cache-and-data.md))
