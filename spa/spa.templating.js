/** SPA Templating **/

// Templates collection
SPA.templates = {};

SPA.templating = {
  
  // Compile a template function from a HTML file
  compile : function(html){
    
    // Transform HTML
    
    // Transform consecutive line breaks, tabs and spaces in one space
    html = html.replace(/\s+/g, " ");
    
    // Escape quotes
    html = html.replace(/\'/g, "\\'");
    
    // Concatenate something (syntax: {{= thing }} )
    html = html.replace(/\{\{=\s*(.*?)\s*\}\}/g, "'+($1)+'");
    
    // Conditional output (syntax: {{? condition }} ... [ {?? [condition] }} ... ]* [ {{??}} ... ]? {{?}} )
    html = html.replace(/\{\{\s*\?\s*\}\}/g, "'};out+='");
    html = html.replace(/\{\{\s*\?\?\s*\}\}/g, "'}else{out+='");
    html = html.replace(/\{\{\s*\?\?\s*(.+?)\s*\}\}/g, "'} else if($1){out+='");
    html = html.replace(/\{\{\s*\?\s*(.*?)\s*\}\}/g, "';if($1){out+='");
    
    // Loop output (syntax: {{~ collection:value:index }} ... {{~}})
    var loop = 0;
    html = html.replace(/\{\{\s*~\s*}\}/g, "'}};out+='");
    html = html.replace(/\{\{\s*~\s*(.+?)\s*:\s*(.+?)\s*:\s*(.+?)\s*\}\}/g,
      function(string, collection, value, index){
        var ret = "';var " + value + ";for(var " + index + " in " + collection + "){if(" + collection + ".hasOwnProperty(" + index + ")){" + value + "=" + collection + "[" + index + "];out+='";
        loop++;
        return ret;
    });
    
    // Evaluate JS (syntax: {{ code; }} ... make sure the code doesn't contain "; }}" )
    html = html.replace(/\{\{\s*(.*?;\s+);?\s*\}\}/g, "';$1;out+='")
    
    // Also evaluate script tags (syntax: <script> ... </script>" )
    html = html.replace(/\<script>\s*(.*?);?\s*<\/script>/g, "';$1;out+='")
    
    // Teplate function content
    var template = "var out='" + html + "';return out";
    return Function("it", template);
  }
}
