//counter code
var counter=0;
var button= document.getElementById("counter");
button.onclick= function() {
    
    
    
    //render the variable
    counter=counter+1;
    var span=document.getElementById("counter");
    span.InnerHTML=counter.toString();
    
}