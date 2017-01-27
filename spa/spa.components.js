/** SPA components **/

SPA.components = {
  
  // Components collection
  collection: {},


  /*
  * Load a component
  * @param path: a string like "app", "subfolfer/componentName" (cf. folder structure)
  * @param folder: a string like "pages" or "components" (cf. folder structure). Default: "components"
  *
  * If the component is not already loaded:
  * - Include its CSS file in the HEAD
  * - Include its JS code at the end of the BODY (the component is stored in SPA.components)
  * - Request its template in AJAX (the template is stored in the component and in SPA.templates)
  *
  * Then:
  * - Instantiate the component, init it
  * - Send it through a custom event.
  */

  load: function(path, folder){
    
    folder = folder || "src";
    
    //console.group("Load component " + path);
    
    // Component already loaded
    if(SPA.components[path] && SPA.templates[path]){
      
      //console.info("Component is already loaded");
      
      // Instanciate component
      //console.info("Instanciate component");
      var component = new SPA.components[path]();
      
      // Set component path
      //console.info("Set component path");
      component.path = path;
      
      // Init component
      if(component.init){
        //console.info("Init component");
        component.init();
      }
      
      //console.info("Send componentLoaded event");
      SPA.sendCustomEvent("componentLoaded", component);
    }
    
    // Not loaded yet
    else {
      
      //console.info("Component is not loaded yet");
      var now = Date.now();
      
      // Load JS
      //console.info("Load JS");
      var script = document.createElement("script");
      script.src = folder + "/" + path + "/component.js?" + now;
      
      // When the JS is loaded
      script.onload = function(){

        // Instanciate component
        //console.info("Instanciate component");
        var component = new SPA.components[path];
        
        // Set component path
        //console.info("Set component path");
        component.path = path;
        
        // If the component has custom CSS
        if(component.hasCSS){
          //console.info("Load component's CSS");
          var link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = folder + "/" + path + "/style.css?" + now;
          document.head.appendChild(link);
        }
        
        // If the component has custom HTML template
        if(component.hasHTML){
          //console.info("Load component's HTML");
          var xhr = new XMLHttpRequest;
          xhr.open("GET", folder + "/" + path + "/template.html?" + now, true);
          xhr.send(null);
      
          // When the template is loaded
          xhr.onload = function(){
            SPA.templates[path] = SPA.templating.compile(xhr.responseText);
        
              // Set component template
              //console.info("Set component template");
              SPA.templates[path];
              
              
              if(component.init){
                component.init();
              }
              //console.info("Send componentLoaded event");
              SPA.sendCustomEvent("componentLoaded", component);
              //console.groupEnd();
          }
        }
        
        // No HTML
        else {
          //console.info("Send componentLoaded event");
          SPA.sendCustomEvent("componentLoaded", component);
          setTimeout('SPA.sendCustomEvent("componentLoaded", component);',1000);
          //console.groupEnd();
        }    
      }
      document.body.appendChild(script);
    }
    
  },

  /*
  * Draw a component
  * @param path: string
  * @param container: DOM container where we want to write the component's template
  * The container is entirely rewritten
  */
  draw: function(path, container){
    
    console.group("Draw the component " + path + " in " + container);
    
    // Load the component
    SPA.component.load(path);
    
    // When the component is loaded, draw its template
    var draw = function(e){
      //console.info("Catch componentLoaded event");
      if(e.detail.path == path){
        container.innerHTML = SPA.templates[path]({data:{answer:42}});
        SPA.sendCustomEvent("componentDrawn", e.detail);
      }
      window.removeEventListener("componentLoaded", draw);
    }
    window.addEventListener("componentLoaded", draw);
  }
}