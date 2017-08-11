// Counter Value

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
  
  //Make a request to counter end point.
  
  //Capture the response and store in a variable.
  
  //Render the varaible in the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};