document.querySelector('#check').addEventListener('click', check)

/* function check(){
    const day = document.querySelector('#day').value
    const dayLC = day.toLowerCase();

}
    CAN WRITE AS *seebelow*, no need to created new dayLC variable   */

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


}else if (day==="friday"){
    document.querySelector('#alertGoHere').innerText =""
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


