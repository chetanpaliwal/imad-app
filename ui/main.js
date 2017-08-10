console.log('Loaded!');

//To change the text

var element = document.getElementById(main.text);

element.innerHTML='new vlaue by the local code console.';

//To move the image

var img=gerdocumentById('madi');

img.onclick = function()
{
  img.style.marginLeft = '100px';  
};