document.querySelector('#check').addEventListener('click', check)
document.querySelector('#day').addEventListener('keypress', function(e){
    if(e.key ==='Enter'){
        check()
        e.preventDefault()    
    }
});

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
    document.querySelector('#oGoHere').classList.add('hidden')
    document.querySelector('body').style.color="black"
    document.querySelector('span').style.fontStyle="normal"
    document.querySelector('span').style.fontFamily="monospace"


}else if (day==="saturday" || day==="sunday"){
    document.querySelector('#alertGoHere').innerText = 'WEEKEND BABY!!'
    document.querySelector('body').style.backgroundColor = "rgba(255, 255, 0, .60)"
    document.querySelector('body').style.color="black"
    //document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('#oGoHere').classList.add('hidden')
    document.querySelector('#heartGoHere').classList.add('hidden')
    document.querySelector('span').style.fontStyle="normal"
    document.querySelector('span').style.fontFamily="monospace"

}else if(day==="wednesday"){
    document.querySelector('#alertGoHere').innerText ="hump day."
    document.querySelector('body').style.backgroundColor="pink"
    document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('#heartGoHere').classList.add('hidden')
    document.querySelector('#oGoHere').classList.add('hidden')
    document.querySelector('body').style.color="black"
    document.querySelector('span').style.fontStyle="normal"
    document.querySelector('span').style.fontFamily="monospace"


}else if (day==="friday" && hh>=17 /*&& today.getDay()===5*/){
    document.querySelector('#alertGoHere').innerText = "X"
    document.querySelector('#oGoHere').innerText = "O"
    document.querySelector('#heartGoHere').classList.remove('hidden')
    document.querySelector('#oGoHere').classList.remove('hidden')
    document.querySelector('#weeknd').classList.remove('hidden')
    document.querySelector('#weeknd').src = "https://www.youtube.com/embed/V_cnK8Cd6Ag?autoplay=1"
    document.querySelector('body').style.backgroundColor="black"
    document.querySelector('body').style.color="white"
    document.querySelector('span').style.fontStyle="italic"
    document.querySelector('span').style.fontFamily="Comforter Brush"

}else if (day==="monday" || day==="friday" && hh<17){
    document.querySelector('#alertGoHere').innerText = 'booooooooorriiinngggggggg!'
    document.querySelector('body').style.backgroundColor = "lightgray";
    document.querySelector('#weeknd').classList.add('hidden')
    document.querySelector('#heartGoHere').classList.add('hidden')
    document.querySelector('#oGoHere').classList.add('hidden')
    document.querySelector('body').style.color="black"
    document.querySelector('span').style.fontStyle="normal"
    document.querySelector('span').style.fontFamily="monospace"

}else{
    alert('Try again');
}
}


