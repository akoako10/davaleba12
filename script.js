var a = +prompt("შეიყვანეთ რიცხვი")


if (isNaN(a) == true || a == null || a == "") {
    alert("გთხოვთ შეიყვანოთ რიცხვი")
} else {
    if (a % 2 == 0) {
        alert("ეს რიცხვი ლუწია")
    }
    else {
        alert("ეს რიცხვი კენტია")
    }
}





function isValidNumber(x) {
    if (isNaN(x)==true){
        console.log(x + "is not number")
    }else {
        console.log(x + "is valid number")
    }
}
isValidNumber("1jscanck")
isValidNumber(13)

function  getType(variable) {
    console.log(typeof(variable))
}
getType(6)
getType("mkcsmls")
getType(true)


function largest(x,y){
    if(x>y){
        console.log(x + "is the largest number")

    }else{
        if(x==y){
            console.log("they are equal")
        }else{
            console.log(y + "is the largest number")
        }
        
    }
}
largest(1,2)
largest(7,1)
largest(117,117)