var inpt1 =document.getElementById("int1")
var inpt2 =document.getElementById("int2")
var inpt3 =document.getElementById("int3")
var inpt4 =document.getElementById("int4")
var inpt5 =document.getElementById("int5")
var inpt6 =document.getElementById("int6")
var inpt7 =document.getElementById("int7")
var inpt8 =document.getElementById("int8")
var inpt9 =document.getElementById("int9")
var inpt10 =document.getElementById("int10")
var inpt11 =document.getElementById("int11")
var inpt12 =document.getElementById("int12")
var inpt13 =document.getElementById("int13")

var arr =[inpt1, inpt2, inpt3,inpt4 ,inpt5 ,inpt6 , inpt7 , inpt8 ,inpt9 ,inpt10 , inpt11 ,inpt12 ,inpt13]

function getinput(){

    for (var i=0; i<arr.length; i++){
        if (arr[i].type === "radio" && arr[i].checked)
        console.log(arr[i].value)
    }
}
if (arr[i] === inpt8) {
    alert("CNIC/B-Form,  13 digits.");
    return; 
    
}