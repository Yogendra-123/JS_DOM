// Q.1 
let myText = document.getElementById('my_text')
console.log(myText);

// Q.2
let myHeading = document.getElementsByTagName('h1')
console.log(myHeading);
// Q.3
let myBox = document.getElementsByClassName('box')
console.log(myBox);

// Q.4
let changeContent1 = document.querySelector('#hello_text').textContent = 'Hello World'
console.log(changeContent1);


// Q.5
// document.querySelector('button').addEventListener('click', (e) =>{
//     e.preventDefault()
// })
function myButtonClick(){
    
    var myFlex = document.querySelector('#flex-container')
    if(myFlex.style.flexDirection == 'row'){
        myFlex.style.flexDirection = 'column'
    }else{
        myFlex.style.flexDirection = 'row'
    }
}

// Q . 7


document.querySelector('h1').style.color = 'red';
document.querySelector('h1').setAttribute('id','heading') ;

// Q. 8

function changeContent(){
    document.getElementById('changeText').innerText='WELCOME TO ELEVATION ACADEMY'
}


// Q. 9

function time(){
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if( hours > 12 ){
        hours = hours - 12 ;
    }

    document.getElementById('hr').innerText = hours + " hr";
    document.getElementById('min').innerText = mins + " min";
    document.getElementById('sec').innerText = secs + " sec" ;

}

setInterval(time, 1000);


// Q. 10
function getOption() {
    let selectElement = document.querySelector('#select1');
    let output = selectElement.value;
    console.log(output);
}
