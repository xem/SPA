/** SPA URL system **/

// SPA's URL format: www.domain.com/[#/[page][?get1=value1[&get2=value2]][#hash]]

SPA.URL = {
  
  page: "",
  GET: {},
  hash: "",

  previousPage: null,
  previousGET: null,
  previousHash: null,
  
  // Parse the current URL and update "page", "GET" and "hash"
  // Fix the hash if it's malformed
  parse: function(){
    
    // Reset
    this.page = "";
    this.GET = {};
    this.hash = "";
    
    // Valid hash: retrieve page, GET, hash
    if(location.hash){
      if(location.hash.indexOf("#/") == 0){
        var URLData = location.hash.slice(2);
        if(URLData){
          URLData = URLData.split("#");
        }
        else{
          return;
        }
        if(URLData[1]){
          this.hash = URLData[1];
        }
        URLData = URLData[0].split("?");
        this.page = URLData[0] || "index";
        if(URLData[1]){
          URLData = URLData[1].split("&");
          for(var i = 0; i < URLData.length; i++){
            var param = URLData[i].split("=");
            this.GET[param[0]] = param[1] || "";
          }
        }
      }
      
      // Invalid hash: fix it
      else{
        this.hash = location.hash.slice(1);
        location.hash = "#/#" + this.hash;
      }
    }
  },
  
  // Get current page name
  getPage: function(){
    this.parse();
    return this.page;
  },
  
  // Get the value of a GET param
  getGET: function(param){
    this.parse();
    return this.GET[param] || "";
  },
  
  // Get hash value
  getHash: function(){
    this.parse();
    return this.hash;
  }
}