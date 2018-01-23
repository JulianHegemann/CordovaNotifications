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
Beispiel
```javascript
function doBeep() {
    navigator.notification.beep(1);
}
```
