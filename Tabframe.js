function setup(){
    createCanvas(windowWidth * 0.85, windowHeight)
    lineinterval = height/60
}
function preload(){
    url = "tabjson.json" //add request and reciever
    tabs = loadJSON(url)
}

var start = true
$(document).ready(function() {
	const bclick = document.getElementById('playandpause');
	bclick.addEventListener('click', function red () {
        start = !start
	});
});

var numberofline = 7
function draw(){
    stroke(100)
    displayfret(height/7)
    for(j=1;j<numberofline+1;j++){
        displayfret(j*height/7)
    }
}

function displayfret(y){
    for(i=0;i<6;i++){
        line(width/10,y+i*lineinterval, 9*width/10, y+ i*lineinterval)
    }
}
