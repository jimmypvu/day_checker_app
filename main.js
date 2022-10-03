document.querySelector('#check').addEventListener('click', check)

/* function check(){
    const day = document.querySelector('#day').value
    const dayLC = day.toLowerCase();

}
    CAN WRITE AS *seebelow*, no need to created new dayLC variable   */

    let today = new Date();
    let time = today.getHours();
    let hh = parseInt(time);
    today.getDay();

function check(){
    const day = document.querySelector('#day').value.toLowerCase();

if(day==="tuesday" || day==="thursday"){
    document.querySelector('#alertGoHere').innerText ='CLASS TODAY'
    document.querySelector('body').style.backgroundColor = 'lightgreen'
    document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('body').style.color="black"


}else if (day==="saturday" || day==="sunday"){
    document.querySelector('#alertGoHere').innerText = 'WEEKEND BABY!!'
    document.querySelector('body').style.backgroundColor = "yellow"
    document.querySelector('body').style.color="black"

}else if(day==="wednesday"){
    document.querySelector('#alertGoHere').innerText ="hump day."
    document.querySelector('body').style.backgroundColor="pink"
    document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('body').style.color="black"


}else if (day==="friday" && hh>17 && today.getDay()===5){
    document.querySelector('#alertGoHere').innerText =""
//    document.querySelector('#player').innerText ='<iframe id="weeknd" width="1263" height="480" src="https://www.youtube.com/embed/V_cnK8Cd6Ag?autoplay=1" class="hidden" title="ladies and gentlemen, the weeknd (HD Original)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"></iframe>'
    document.querySelector('#weeknd').classList.toggle('hidden')
    document.querySelector('body').style.backgroundColor="black"
    document.querySelector('body').style.color="white"

}else {
    document.querySelector('#alertGoHere').innerText = 'booooooooorriiinngggggggg!'
    document.querySelector('body').style.backgroundColor = "lightgray";
    document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('body').style.color="black"

}
}


