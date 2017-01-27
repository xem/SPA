/** SPA engine **/

SPA.engine = {
  
  // When the app loads, or when the URL's hash changes, update the page
  update: function(){
    
    l(SPA.URL);
    
    // Parse the URL
    SPA.URL.parse();
    
    // Compare pages
    if(SPA.URL.page !== SPA.URL.previousPage){
      SPA.components.draw(SPA.URL.page, $i("page"));
      //SPA.sendCustomEvent("pageUpdate", SPA.URL.page);
    }
    
    // Compare GET params
    //TODO
    
    // Compare Hash
    if(SPA.URL.hash !== SPA.URL.previousHash){
      SPA.sendCustomEvent("hashUpdate", SPA.URL.hash);
    }
    
    // Backup everything
    SPA.URL.previousPage = SPA.URL.page;
    SPA.URL.previousGET = SPA.URL.GET;
    SPA.URL.previousHash = SPA.URL.hash;
  }
}

window.addEventListener("load", function(){
  console.info("Start SPA");
  SPA.engine.update();
});

window.addEventListener("hashchange", function(){
  console.info("URL changed");
  SPA.engine.update();
});