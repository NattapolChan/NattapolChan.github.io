function setup(){
    createCanvas(windowWidth * 0.85, windowHeight)
    winheight = height
    winwidth = width
    lineinterval = winheight/60
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
    for(j=1;j<numberofline+1;j++){
        displayfret(j*winheight/7)
        displaytime(j*winheight/7)
    }
    drawnote(winheight/7)
}

function displayfret(y){
    for(i=0;i<6;i++){
        stroke(100)
        line(winwidth/10,y+i*lineinterval, 9*winwidth/10, y+ i*lineinterval)
    }
}

function displaytime(y){
    for(i=1;i<6;i++){
        stroke(200)
        line(i*winwidth/6, y-lineinterval, i*winwidth/6, 6*lineinterval + y)
    }
}

function drawnote(y){
    for(i=0;i<40;i++){
        sec = i/10
        sec = str(sec.toFixed(1))
        numberofnote = tabs[sec].length
        for(j=0;j<numberofnote;j++){
            displaynote( tabs[sec][j], i/10, y)
        }
    }
}

function displaynote(note, xposition, y){
    guistring = ['E','A','D','G','B','e']
    xpos = map(xposition, 0, 4, winwidth/6, 5*winwidth/6)
    for(m=0;m<6;m++){
        if(note[0] == guistring[m]){
            fill(100, 100, 100)
            text(note[1] , xpos, (5.5-m)*lineinterval + y)
        }
    }
}
