var options=["JA", "NEIN"];

function showPrompt() {
    navigator.notification.prompt(
        //message
        "Enter your name",
        //callback
        promptCallback(),
        //title
        "Prompt Notification",
        //button labels
        options,
        //default text
        "Sebastian"
    )
}

function showAlert(){
    navigator.notification.alert(
        'You are the winner!',  // message
        alterCallback(),         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
}

function showConfirm(){
    navigator.notification.confirm(
        'You are the winner!', // message
        confirmCallback,            // callback to invoke with index of button pressed
        'Game Over',           // title
        ['Restart','Exit']     // buttonLabels
    );
}

function Combobreaker() {
    navigator.notification.prompt(
        "How often should i beep?",
        beepCallback,
        "Final",
        ["BEEP", "I dont wanna beep... :("],
        "10"
    )    
}

function beepCallback(results) {
    var buttonIndex = results.buttonIndex;
    var input1 = results.input1;
    if(buttonIndex==1){
        navigator.notification.beep(Number(input1));
    }else{
        alert("Loser :P")
    }
}

function doBeep() {
    navigator.notification.beep(1);
}

function promptCallback() {
    console.log("Prompt worked")
}

function alterCallback() {
    console.log("alter worked")
}

function confirmCallback(){
    console.log("confirm worked")
}