  
  // Build and set a new URL
  /*goTo: function(){
    var GETString = "";
    var iterations = 0;
    if(this.GET.length > 0){
      GETString = "?";
      for(var i in this.GET){
        if(iterations > 0){
          GETString += "&";
        }
        GETString += i + "=" + this.GET[i];
        iterations++;
      }
    }
    location.hash = "/" + this.page + GETString + (this.hash ? "#" + this.hash : "");
  },*/
  
  
    
  /*// Set page name
  setpage: function(page){
    this.parse();
    this.page = page;
    this.setURL();
  },
  
  // Set the value of a GET param
  setGETParam: function(param, value){
    this.parse();
    this.page = page;
    this.setURL();
  },
  
  // Set hash value
  setHash: function(hash){
    this.parse();
    this.hash = hash;
    this.setURL();
  }*/
  
  /*
// When the hash changes, draw the page
SPA.URL.drawPage = function(e){
  var page = SPA.URL.getPage();
  if(SPA.routes[page]){
    SPA.drawComponent(SPA.routes[page], document.body);
  }
  else if(SPA.routes["*"]){
    SPA.drawComponent(SPA.routes["*"], document.body);
  }
  else {
    document.body.innerHTML = "";
  }
}
window.addEventListener("hashchange", SPA.URL.drawPage);
window.addEventListener("load", SPA.URL.drawPage);
*/





/*
* Draw a "page"
* @param path: string
* @param container: DOM container where we want to write the page's template
* The container is entirely rewritten
*/
SPA.drawPage = function(path, container){
  
  //console.group("Draw the page " + path + " in " + container);
  
  // Load the component
  SPA.loadComponent(path, "src/pages");
  
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





/*
* Append a component
* @param path: string
* @param container: DOM container where we want to write the component's template
* The component is drawn at the end of the container
*/
/*SPA.appendComponent = function(path, container){
  SPA.loadComponent(path);
  addEventListener("componentLoaded", function(e){
    if(e.detail.path == path && e.detail.template){
      container.insertAdjacentHTML("beforeEnd", e.detail.template);
      SPA.sendCustomEvent("componentDrawn", e.detail);
    }
  });
}*/
