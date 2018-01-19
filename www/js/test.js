document.addEventListener('DomContentReady', function (){
    document.getElementById('notifyButton').addEventListener('click', myFunction())
})


function alterDismissed(){
    //do something
}

function myFunction()
{
    navigator.notification.alert('Test', alterDismissed, 'Test', 'Done')
    console.log('Button läuft!')
}