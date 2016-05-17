# UI cheatsheet
For development only.

## Button
Create a styled button, default to red color.
``` HTML
<input type="button" class="button">BUTTON TEXT</input>
```

##### class: `button-lg`:
Makes the button larger.

##### class: `button-blue`:
Makes the button blue.

##### class: `button-green`:
Makes the button green.

## Input
Create a styled text input, default to red color.
``` HTML
<span class="text-input" ng-class="{'text-input--filled': INPUT-NAME}">
    <input class="text-input-field" type="text" id="INPUT-NAME" ng-model="INPUT-NAME" />
    <label class="text-input-label" for="INPUT-NAME">
        <span class="text-input-label-content">READABLE NAME</span>
    </label>
</span>
```

##### class: `text-input-blue`:
Makes the input blue.

##### class: `text-input-green`:
Makes the input green.
