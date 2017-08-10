console.log('Loaded!');

//To change the text

var element = document.getElementById('main.text');

element.innerHTML='new vlaue by the local code console.';

//To move the image

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10; 
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight,50);
};