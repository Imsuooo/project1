const slideWrap = document.querySelector('.main_slider');
const slideArea = document.querySelector('.list');
const slideList = document.querySelectorAll('.slide');
const pager = document.querySelector('.pager')
const pagerBtn = document.querySelectorAll('.btn')
let heights = slideList[0].offsetHeight;
let slideCount = slideList.length;
let slideHeight = 0;
let pause = document.querySelector('.slide_pause')
let play =document.querySelector('.slide_play')

//이미지 영역 크기 조절
let imgH = $('.slide>a>img').height();

setInterval(resizeImge,10);

$('.main_slider').resize(function(){
    resizeImge();
})
resizeImge();

function resizeImge(){
    let imgH = $('.slide').height();
    let maxH = 1066
    if(imgH<maxH){
        $('.main_slider').css({height : imgH})
    }else{
        $('.main_slider').css({height : maxH})
    }
};

//이미지 자동 슬라이드

for(let j=0; j<slideCount; j++){
    slideList[j].style.left= j*100+'%'
};
function goslide(e){
slideArea.classList.add('animated'); 
slideArea.style.left=-100*e+'%'
currentIndex = e;

for(let h=0; h<pagerBtn.length; h++){
    pagerBtn[h].classList.remove('active');
}
pagerBtn[e].classList.add('active');
}

goslide(0);

let setIntervalId =0;

function autoslide(){
    setIntervalId=setInterval(function(){
        let nextvalue = (currentIndex+1) % slideCount;  
        goslide(nextvalue); 
    },4500) 
};
autoslide();


for(let k=0; k<pagerBtn.length; k++){         
    pagerBtn[k].addEventListener('click',function(){    
        let pageNum = k
        console.log(pageNum)
        goslide(pageNum);          
    });
};

function stop(){
    clearInterval(setIntervalId);
};

pause.onclick = function(){
    pause.classList.remove('on')
    play.classList.add('on')
    stop();
}
play.onclick = function(){
    play.classList.remove('on')
    pause.classList.add('on')
    autoslide();
};

//box_left 부분
const targetLink = document.querySelectorAll('.box_left ul li h3 a');
const list = document.querySelectorAll('.box_left ul li ul');

for(let i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
        e.preventDefault();
        let orgtarget = e.target.getAttribute('href');
        // console.log(orgtarget)
        let listtarget = orgtarget.replace('#','');
        //console.log(listtarget)
        for(let j=0; j<targetLink.length; j++){
            targetLink[j].classList.remove('view');
            e.target.classList.add('view');
        }
        for(let h=0;h<list.length; h++){
            list[h].style.display='none';
        }
        document.getElementById(listtarget).style.display='block';
    });
};
