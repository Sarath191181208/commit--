# Commit++
Commit++ is a Visual Studio Code (VS Code) extension that enhances the Git commit experience by providing a range of features, including the ability to add emojis to Git commits. Including a range of emojis in your Git commits can help you to communicate the purpose of your commits more effectively.

## Usage
To use Commit++, simply open the Command Palette `(Ctrl+Shift+P)` and type "Commit++" to see a list of available commands. 
Or else you can go to the Source control tab and find a new icon on the top right corner.
![Icon on the top right corner](https://raw.githubusercontent.com/Sarath191181208/commit--/main/images/demo.png)

## Extension Settings

You can add your own settings to the `settings.json` file in your VS Code workspace.
Ex:

```json
    {
        // settings.json
        // you vscode settings here .... 
        "commit++.additionalCommitPrefixes": [
            {
                "prefix": "🐛",
                "description": "Bugfix"
            },
            {
                "prefix": "🚀",
                "description": "Performance"
            }
            // .... and so on
        ], 
    }
```
Find more emojis here:
[Git Commit Emoji](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

## References
This project is heavily inspired by [Emoji-log](https://github.com/ahmadawais/Emoji-Log-VSCode)


