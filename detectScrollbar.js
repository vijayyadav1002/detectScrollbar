/*
  Include this script to detect the elements which are causing horizontal scrollbar of the browser window
  Culprit elements will be highlighted and made visible with zindex and box shadow in red borders
  You can also find the culprit elements in the console of developer tool of the browser
*/
(function(){
    'use strict';
    var html=document.getElementsByTagName("html")[0],
        counter=0,culpritElements=[]
    ;
    (function getAllElements(el){
        counter++; 
        var sum=el.offsetLeft + el.offsetWidth;    
        if(sum>=window.innerWidth){
            culpritElements.push(el);        
            el.style.boxShadow = "0px 0px 6px red";
            el.style.zIndex = 999999;
            el.style.visibility = "visible";
            el.style.opacity = 1;
        }
        if(el.children.length && el.tagName!=='SELECT'){
            for(var i=0;i<el.children.length;i++){
                getAllElements(el.children[i]);
            }
        }
        else if(el.nextElementSibling){
            getAllElements(el.nextElementSibling);
        }
    }(html));    
    console.log(culpritElements);
}());
