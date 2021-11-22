var button = document.getElementById('btn');
var code = document.getElementById('hex_code');


var hexColorGenerator = function(){
    newColor = '#' + 
    (Math.random()*0xFFFFFF<<0).toString(16);
    

    if(newColor.length < 7){
        hexColorGenerator();
    }
}

var change = function(){
    hexColorGenerator();
    document.body.style.background = newColor;
    button.style.color = newColor;
    code.innerText ='HEX COLOR :' + ' ' + newColor;

}


