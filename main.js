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
    document.querySelector('#heartGoHere').classList.add('hidden')
    document.querySelector('body').style.color="black"


}else if (day==="saturday" || day==="sunday"){
    document.querySelector('#alertGoHere').innerText = 'WEEKEND BABY!!'
    document.querySelector('body').style.backgroundColor = "rgba(255, 255, 0, .60)"
    document.querySelector('body').style.color="black"
    document.querySelector('#weeknd').classList.add('hidden')
    //document.querySelector('#heartGoHere').classList.add('hidden')

}else if(day==="wednesday"){
    document.querySelector('#alertGoHere').innerText ="hump day."
    document.querySelector('body').style.backgroundColor="pink"
    document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('#heartGoHere').classList.add('hidden')
    document.querySelector('body').style.color="black"


}else if (day==="friday" && hh>17 /*&& today.getDay()===5*/){
    document.querySelector('#alertGoHere').innerText = "XO"
    document.querySelector('#heartGoHere').classList.remove('hidden')
    document.querySelector('#weeknd').classList.remove('hidden')
    document.querySelector('#weeknd').src = "https://www.youtube.com/embed/V_cnK8Cd6Ag?autoplay=1"
    document.querySelector('body').style.backgroundColor="black"
    document.querySelector('body').style.color="white"

}else if (day==="monday" || day==="friday"){
    document.querySelector('#alertGoHere').innerText = 'booooooooorriiinngggggggg!'
    document.querySelector('body').style.backgroundColor = "lightgray";
    document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('#heartGoHere').classList.add('hidden')
    document.querySelector('body').style.color="black"

}else {
    alert('Try again');
}
}


