var N= window.prompt("Enter Your FullName");

function Name(name){
    if(name){
        console.log('Welcome ' + name);   
    }
    else{
        alert(prompt("Plese ender your name."));
}
}

var A= window.prompt("Enter Your Age: ");
var E= window.prompt("Enter Your Email: ");
var F= window.prompt("Enter Your City: ");

function Age(age){
if(A){
    console.log("Age: " + age);
}else{
    console.log('Age: Not Provided');
}
}

function checkEmail(email){
    if (email){
        console.log("Email: " + email);
    }
    else { 
        console.log("Email: Not Provided");
    }
}

function checkcity(city){
    if (city){
        console.log("City: "+ city);
    }
    else{
        console.log("City: Not Provided");
    }
}
Name(N);
console.log(A);
checkEmail(E);
checkcity(F);

let name1= "Amira"
let age1= 25 

function Age(age){
if(age){
    console.log("Age: " + age);
}else{
    console.log('Age: Not Provided');
}
}
Age(age1);
function user(name, age, email, city){
    console.log("===== User Profile =====");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Email: " + email);
    console.log("City: " + city);
    console.log("=========================");
}
user("Amira Mohamed", 25, "amira@gmail.com", "Cairo");

let WelcomeCall = (name) => {
    console.log("Hello " + name + ", Your profile is ready!");
}

function greet(name, fn){
    fn(name)
}
greet(name1, WelcomeCall);

(function(){
    window.alert("Welcome to the User Profile System")
})()


function checkAge(age){
    if(age){
        console.log('Age: ' + age);
    }
    else{
        console.log("Age is empty.");
    }
}
checkAge(A);