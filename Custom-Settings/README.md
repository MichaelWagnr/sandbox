=====================================================

Step 1.
MAC: SHIFT + COMMAND + P
WIN: SHIFT + CNTRL + P

Step 2.
Type 'user settings'

Step 3.
Select 'Open User Settings (JSON)'

=====================================================

This will open a 'settings.json' file in VScode. JSON stands for 'Javascript Object Notation'

=====================================================

This is pretty much just an object where you can select a setting with a key (it MUST be a string), and set the value.

If you haven't already added any custom settings it should be empty or look like an empty object

=====================================================

In the file custom-settings.JSON we have this object:

```js

{
    // This is optional, if you want to change the colors of the bracket colours to be more vivid or less vivid or whatever colour-scheme you'd like, otherwise comment it out or don't include it in your settings.
    "workbench.colorCustomizations": {
        "editorBracketPairGuide.background1": "#ff9d6430",
        "editorBracketPairGuide.background2": "#f7768e30",
        "editorBracketPairGuide.background3": "#7aa2f730",
        "editorBracketPairGuide.background4": "#bb9af730",
        "editorBracketPairGuide.background5": "#e0af6830",
        "editorBracketPairGuide.background6": "#9ece6a30",
        "editorBracketPairGuide.activeBackground1": "#ff9d64",
        "editorBracketPairGuide.activeBackground2": "#f7768e",
        "editorBracketPairGuide.activeBackground3": "#7aa2f7",
        "editorBracketPairGuide.activeBackground4": "#bb9af7",
        "editorBracketPairGuide.activeBackground5": "#e0af68",
        "editorBracketPairGuide.activeBackground6": "#9ece6a"
    },
    // This turns on the bracketPairs, each new set of () or {} will be colour coded.
    "editor.guides.bracketPairs": true,
    // This turns on colouring each indented line, this may be visually preferable over the indent-rainbow extensions - or uneccessary if you like indent-rainbow.
    "editor.guides.highlightActiveIndentation": true,
}

```

Copy/Paste it into your settings.json and hit save and it will add some extra colours to your editor to help identify indentation, scope and () {} pairs.

=====================================================

Some extensions like Error Lens or Indent Rainbow will include some information as to how you can customize it using the settings.json
