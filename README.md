# Cordova Notifications 
## Plugin Installation
Um mit Cordova Notifications zu verwenden, muss das `dialog` Plugin installiert werden:

`$cordova plugin add cordova-plugin-dialogs`

## Arten von Notifications
Es gibt 4 Arten von Notifications in Cordova:
* Prompts
* Alterts
* Confirms
* Beeps

### Prompts
Prompts sind Fenster die vom Nutzer eine Eingabe erfordern. Die Eingabe kann im Callback weiter verarbeitet werden.
Beispiel:
```javascript
function showPrompt() {
    navigator.notification.prompt(
        //message
        "Enter your name",
        //callback
        promptCallback(),
        //title
        "Prompt Notification",
        //button labels
        ["JA", "NEIN"],
        //default text
        "Default"
    )
}
```

### Alters
Alerts dienen dazu den Nutzer über etwas zu informieren. Sie haben nur einen Button.
Beispiel:
```javascript
function showAlert(){
    navigator.notification.alert(
        // message
        'You are the winner!',
        // callback
        alterCallback(),
        // title
        'Game Over',
        // buttonName
        'Done'
    );
}
```
### Confirms
Confirms sind wie Alerts, nur das sie 2 Buttons haben.
Beispiel:
```javascript
function showConfirm(){
    navigator.notification.confirm(
        // message
        'You are the winner!',
        // callback
        confirmCallback,
        // title
        'Game Over',
        // buttonLabels
        ['Restart','Exit']     
    );
}
```
### Beeps
Beeps erzeugen einen Signalton.
Beispiel
```javascript
function doBeep() {
    navigator.notification.beep(1);
}
```
