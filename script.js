var option =[
    "No",
    "Are you Sure?",
    "Really Sure",
    "Please??",
    "Just think about it",
    "If you say no. I'll be sad!",
    "I'll be very sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "OKay fine! I'll stop asking",
    "Just Kidding, Please say YES",
    "You are Breaking my Heart",
]

let count = 1

function getOption(){
    enlargeAccept();
    newOption = option[count];
    document.getElementById("button-id").textContent = newOption;
    console.log(newOption);
    count++;

    if(count>=option.length){
        count = 0;
    }
}
let _width = 100;
let _height = 50;
let _fontsize = 30;
function enlargeAccept(){
    var enlargeAccept = document.getElementById("enlarge");
    enlargeAccept.style.width = `${_width}px`;
    enlargeAccept.style.height = `${_height}px`;
    document.querySelector(".btn-accept-text").style.fontSize = `${_fontsize}px`;
    if(count>6){
        console.log("");
        _fontsize = 700;
        _width = _width * 1.1;
        _height = _height * 1.6;
        enlargeAccept.style.alignItems = "flex-start";
    }
    else if(count>5){
        console.log("5");
        _fontsize =_fontsize*2.2;
        _width = _width * 1.1;
        _height = _height * 1.6;
        enlargeAccept.style.alignItems = "flex-start";
    }
    else if( count > 3){
        console.log("3");
        _width = _width * 1.6;
        _height = _height * 2;
        _fontsize =_fontsize*2;
    }
    else{
        console.log("else");
        _width = _width * 1.6;
        _height = _height * 2;
        _fontsize = _fontsize*1.4;
    }
}
    


