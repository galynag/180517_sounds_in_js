
var imgBirds = document.querySelectorAll('.birds img');
var audioB = ['Soika','Solovei','Voron','CHizh','Rechnoi_sverchok','Bormotushka'];
var audio = new Audio();
// audio.controls = true;

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'Duck/mix3.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
function audioBirds(event) {
    if (audio.autoplay == 'true') {
        // pause(audio);
        audio.pause();
    } else {
        console.log(event);
    var i = this.id;
    audio.src = 'sounds/' + audioB[i] + '.mp3';
    audio.autoplay = true;
    }
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

    if (topY==0) {
        bug.style.opacity=0;
        clearTimeout(timer,30);
    } else {
        var n = randomInteger(0,13);//колво шагов
        var counter=0;
    if (direction==1) {
        for (counter;counter <= n;counter++) {
           rightTop();
        }
        // clearTimeout(timer,30);
    }
    else if (direction==0) {
        for (counter;counter <= n;counter++) {

                leftTop();
            }
        }
        // clearTimeout(timer,30);
    }

    console.log(direction);
    timer = setTimeout(move2, 200);

}
pole.addEventListener('click',move2);