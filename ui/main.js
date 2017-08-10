console.log('Loaded!');

//To change the text

var element = document.getElementById('main.text');

element.innerHTML='new vlaue by the local code console.';

//To move the image

var img=document.getElementById('madi');
var marginRight=0;
function moveRight()
{
    marginRight=marginRight+10; 
    img.style.marginRight=marginRight + 'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight,100);
};