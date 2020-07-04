function cal(x) {
    var op = document.getElementById("operator").value;
    if (op === null) {
        return document.getElementById("operand1").value += x;
    }
    else {
        return document.getElementById("operand2").value += x;
    }
}
function oper(x) {
    return document.getElementById("operator").value += x;
}
function cleartab() {
    console.log("Cleared");
    return document.getElementById("result").value = "";
}
function validate_name() {
    var valname = document.getElementById("name").value;
    console.log(valname);
    var chname = /^[a-zA-Z][a-zA-Z0-9]+$/;
    if (valname.match(chname)) {
        return true;
    }
    else {
        alert('Please input first charecter as alphabet only');
        return false;
    }
}
function validate_phone() {
    var valphone = document.getElementById("phone").value;
    console.log(valphone);
    var phone = /^\d{10}$/;
    if (valphone.match(phone)) {
        return true;
    }
    else {
        alert('Please input 10 digits only');
        return false;
    }
}
function validate_email() {
    var valemail = document.getElementById("email").value;
    console.log(valemail);
    var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (valemail.match(email)) {
        return true;
    }
    else {
        alert('Please input a valid e-mail ID');
        return false;
    }
}
function palindrome() {
    var inputStr = document.getElementById("palindromeInput").value;
    console.log(inputStr);
    var outStr =inputStr.split('').reverse().join('');
    if (outStr === inputStr) {
        alert('It is a palindrome');
        return true;
    }
    else {
        alert('it is not a palindrome');
        return false;
    }
}
function anagram() {
    var str1 = document.getElementById("anagramInput_1").value;
    var str2 = document.getElementById("anagramInput_2").value;
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if (str1 === str2) {
        alert('It is a anagram');
        return true;
    }
    else {
        alert('it is not a anagram');
        return false;
    }
}
function randomInitializor() {
    var num = Math.floor(Math.random() * 1000);
    if (num % 3 === 0) {
        return "HUMAN";
    }
    else if (num % 3 === 1) {
        return "COCKROACH";
    }
    else {
        return "NUCLEAR BOMB";
    }
}
function generatePlayer_1() {
    var player = randomInitializor();
    return document.getElementById("playerInput_1").value = player;
}
function generatePlayer_2() {
    var player = randomInitializor();
    return document.getElementById("playerInput_2").value = player;
}
function survivor() {
    var player1 = document.getElementById("playerInput_1").value;
    var player2 = document.getElementById("playerInput_2").value;
    console.log(player1);
    console.log(player2);
    if (player1 === "HUMAN" && player2 === "COCKROACH") {
        return document.getElementById("winner").value = "HUMAN";
    }
    else if (player1 === "COCKROACH" && player2 === "HUMAN") {
        return document.getElementById("winner").value = "HUMAN";
    }
    else if (player1 === "NUCLEAR BOMB" && player2 === "COCKROACH") {
        return document.getElementById("winner").value = "COCKROACH";
    }
    else if (player1 === "COCKROACH" && player2 === "NUCLEAR BOMB") {
        return document.getElementById("winner").value = "COCKROACH";
    }
    else if (player1 === "HUMAN" && player2 === "NUCLEAR BOMB") {
        return document.getElementById("winner").value = "NUCLEAR BOMB";
    }
    else if (player1 === "NUCLEAR BOMB" && player2 === "HUMAN") {
        return document.getElementById("winner").value = "NUCLEAR BOMB";
    }
    else {
        return document.getElementById("winner").value = "DRAW";
    }
}
