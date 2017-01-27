SPA.components["app"] = function(){
  
  this.hasCSS = true;
  this.hasHTML = true;
  
  l(1);
  
  this.data = {
    answer: 42,
    test: _("lol")
  };
  
  this.init = function(){
    document.title = "app";
  };
  
  // Draw first page
  window.addEventListener("componentLoaded", function(event){
    if(event.detail.path == "app"){
      SPA.URL.parse();
      SPA.drawComponent("pages/" + (SPA.URL.page || "index"), $i("app"));
    }
    //
  });
  
  // Draw current page
  window.addEventListener("pageUpdate", function(event){
    l("a");
    SPA.drawComponent(event.details, document.body);
  });
  
}