
var imgBirds = document.querySelectorAll('.birds img');
var audioB = ['Soika','Solovei','Voron','CHizh','Rechnoi_sverchok','Bormotushka'];
var audio = new Audio();

function audioBirds(event) {
    // if (audio.autoplay == 'true') {
    //     // pause(audio);
    //     audio.pause();
    // } else {
        console.log(event);
    var i = this.id;
    audio.src = 'sounds/' + audioB[i] + '.mp3';
    audio.autoplay = true;
    
}
for (var i=0; i<imgBirds.length; i++) {
    imgBirds[i].addEventListener('click', audioBirds);
}


var leftX=500,topY=780;
var d;
var pole = document.querySelector('#pole');
var bug = document.querySelector('#bug');
var timer;
var direction=0;//0-направление ПравоВверх, 1 - направление ЛевоВверх

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};


function rightTop() {
    direction=0;
    if (leftX<=970 && topY>=10) {
        leftX += 10;
        topY -= 10;
    }
    else if (topY==0) {
        bug.style.opacity=0;
    }
    bug.style.left = leftX + 'px';
    bug.style.top = topY + 'px';
}

function leftTop() {
    direction=1;
    if (leftX>=10 && topY>=10) {
        leftX -= 10;
        topY -= 10;
    }
    else if (topY==0) {
        bug.style.opacity=0;
    }
    bug.style.left = leftX + 'px';
    bug.style.top = topY + 'px';
}


function move2() {
    bug.style.opacity=1;
    if (topY==0) {
        bug.style.opacity=0;
        topY=880;
        clearTimeout(timer,30);
    } else {
        var n = randomInteger(0,13);//колво шагов
        var counter=0;
    if (direction==1) {
        for (counter;counter <= n;counter++) {
           rightTop();
        }
        clearTimeout(timer,30);
    }
    else if (direction==0) {
        for (counter;counter <= n;counter++) {
            leftTop();
          }
        }
        clearTimeout(timer,30);
    }
    timer = setTimeout(move2, 200);
}
function shoot(event) {
  console.log(event);
  console.log(leftX,topY);
  if (event.x>=leftX+10 && event.x<=leftX+50 && event.y>=topY+10 && event.y<=topY+50){
        audio.src = 'Duck/mix3.mp3';
        audio.autoplay = true;
    } else {
              audio.src = 'Duck/miss1_2.wav';
              audio.autoplay = true;
            }
  }

function stopGame() {
  clearTimeout(timer,30);
}
document.querySelector('#start-game').addEventListener('click',move2);
document.querySelector('#stop-game').addEventListener('click',stopGame);
document.querySelector('#pole').addEventListener('click',shoot);
