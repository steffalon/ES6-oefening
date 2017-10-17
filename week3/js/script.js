window.addEventListener("load", function load(event){
    (() => {
      var style= document.createElement("style");
      style.innerHTML = "h1 {color: red}";
      var html = document.createElement("h1");
      var htmltxt = document.createTextNode('test (H1)');
      html.appendChild(htmltxt);
      document.head.appendChild(style);
      document.body.appendChild(html);
    })();
},false);
