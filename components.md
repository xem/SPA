Components are placed in /components/(path/)componentName folder.

They contain:

- a file called component.js. Ex:

````js
Hammam.addComponent("componentName",
  {
    
  }
)
````

- a template file called template.html. Ex:

````html
<div class="componentName">
  <h1>Title</h1>
  <p>...</p>
</div>
````

- a stylesheet called style.css. Ex:

````css
.componentName {
  background: black;
}

.componentName h1 {
  color: white;
}
````
