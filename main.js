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
let changeContent = document.querySelector('#hello_text').textContent = 'Hello World'
console.log(changeContent);


// Q.5
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault()
})
function myButtonClick(){
    
    var myFlex = document.querySelector('#flex-container')
    if(myFlex.style.flexDirection == 'row'){
        myFlex.style.flexDirection = 'column'
    }else{
        myFlex.style.flexDirection = 'row'
    }
}

// Q . 7

function myHeading(){
    document.querySelector('h2').style.color = 'red';
    document.querySelector('h2').setAttribute('id','heading') ;
}