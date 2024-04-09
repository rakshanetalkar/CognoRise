var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');

function openTab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add('active-tab')
}

/*               *****   Toggle navbar icon *****            */
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*               *****   Scroll section active link *****            */
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset = sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*               *****   sticky navbar *****            */
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*               *****   toggle icon navbar *****            */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
 /*               *****   scroll reveal *****            */
 var reaveals=document.querySelectorAll('.reavealright')
 var reavealsLeft=document.querySelectorAll('.reavealleft')
 var reavealsImg=document.querySelectorAll('.reavealimg')
 var reavealsTop=document.querySelectorAll('.reavealTop')
 var reavealsBottom=document.querySelectorAll('.reavealBottom')

 window.addEventListener('scroll',function(){

    for(let i=0;i<reaveals.length;i++){
        let windowHeight=this.window.innerHeight
        let reavealRight=reaveals[i].getBoundingClientRect().top
        let reavealPoint=150
        if(reavealRight<windowHeight-reavealPoint){
            reaveals[i].classList.remove('reavealright')
            reaveals[i].classList.add('active')
        }else{
            reaveals[i].classList.add('reavealright')
            reaveals[i].classList.remove('active')
        }
    }
    for(let i=0;i<reavealsImg.length;i++){
        let windowHeight=this.window.innerHeight
        let reavealimg=reavealsImg[i].getBoundingClientRect().top
        let reavealPoint=150
        if(reavealimg<windowHeight-reavealPoint){
            reavealsImg[i].classList.remove('reavealimg')
            reavealsImg[i].classList.add('active')
        }else{
            reavealsImg[i].classList.add('reavealimg')
            reavealsImg[i].classList.remove('active')
        }
    }
    for(let i=0;i<reavealsTop.length;i++){
        let windowHeight=this.window.innerHeight
        let reavealTop=reavealsTop[i].getBoundingClientRect().top
        let reavealPoint=150
        if(reavealTop<windowHeight-reavealPoint){
            reavealsTop[i].classList.remove('reavealTop')
            reavealsTop[i].classList.add('active')
        }else{
            reavealsTop[i].classList.add('reavealTop')
            reavealsTop[i].classList.remove('active')
        }
    }
    for(let i=0;i<reavealsLeft.length;i++){
        let windowHeight=this.window.innerHeight
        let reavealRight=reavealsLeft[i].getBoundingClientRect().top
        let reavealPoint=150
        if(reavealRight<windowHeight-reavealPoint){
            reavealsLeft[i].classList.remove('reavealleft')
            reavealsLeft[i].classList.add('active')
        }else{
            reavealsLeft[i].classList.add('reavealleft')
            reavealsLeft[i].classList.remove('active')
        }
    }
    for(let i=0;i<reavealsBottom.length;i++){
        let windowHeight=this.window.innerHeight
        let reavealRight=reavealsBottom[i].getBoundingClientRect().top
        let reavealPoint=150
        if(reavealRight<windowHeight-reavealPoint){
            reavealsBottom[i].classList.remove('reavealBottom')
            reavealsBottom[i].classList.add('active')
        }else{
            reavealsBottom[i].classList.add('reavealBottom')
            reavealsBottom[i].classList.remove('active')
        }
    }
})
var text=document.querySelector('.names');
var nameArray=['Fresher','Frontend Developer','Web Developer']
function textChange(ind){
    text.textContent=nameArray[ind];
}
index=0;
setInterval(function(){
    if(index>2){
        index=0;
    }
    textChange(index)
    index+=1
},1500)