function setup(){
    createCanvas(windowWidth, windowHeight)
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

function draw(){
    stroke(100)
    displayfret(height/7)
}

function displayfret(y){
    for(i=0;i<6;i++){
        line(width/10,y+i*lineinterval, 9*width/10, y+ i*lineinterval)
    }
}
