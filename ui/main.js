//counter code
var counter=0;
var button= document.getElementById("count");
button.onclick= function() {
    
     counter= counter + 1;
    var span= document.getElementById("count");
    span.InnerHTML=counter.toString();
    
};