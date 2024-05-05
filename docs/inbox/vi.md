# vi

vi basically operates in 3 modes, namely :

1.  **vi mode** – the mode vi starts in
2.  **command mode** – you can be in command mode from the vi mode by pressing the key colon (“:”)
3.  **input mode** – in this mode user starts the actual editing of the text

Below are some of the most commonly used vi commands in all 3 modes of operation.

## vi mode commands

| Command | Action                                                   |
| ------- | -------------------------------------------------------- |
| k       | Move one line upwards                                    |
| l       | Move one character to the right                          |
| h       | Move one character to the left                           |
| w       | Move one word to the right                               |
| W       | Move one word to the right past punctuation              |
| b       | Move one word to the left                                |
| B       | Move one word to the left past punctuation               |
| e       | Move to the end of the current word                      |
| 1G      | Move to the beginning of the file                        |
| H       | Move to the top of the current screen                    |
| M       | Move to the middle of the current screen                 |
| L       | Move to the bottom of the current screen                 |
| Ctrl-G  | Move to the last line in the file                        |
| Ctrl-F  | Move one screen towards the end of the file              |
| Ctrl-D  | Move 1/2 screen towards the end of the file              |
| Ctrl-B  | Move one screen towards the beginning of the file        |
| Ctrl-U  | Move 1/2 screen towards the beginning of the file        |
| Ctrl-L  | Refresh the screen                                       |
| 5G      | Move to line 5 of the file (5 can be any line number)    |
| /string | Find text string forward                                 |
| ?string | Find text string backward                                |
| n       | Find forward next string instance after a string search  |
| N       | Find backward next string instance after a string search |
| ZZ      | Save the file exit vi                                    |
| x       | Delete the character at the cursor                       |
| X       | Delete the character behind the cursor                   |
| dd      | Delete the line the cursor is on                         |
| 10dd    | Delete the 10 lines following the cursor                 |
| yy      | Yank the current line                                    |
| p       | Put the yanked line below the current line               |
| P       | Put the yanked line above the current line               |

## Command mode commands

| Command     | Action                                                       |
| ----------- | ------------------------------------------------------------ |
| :g/X/s//x/g | Global Search and replace (X=search object x=replace object) |
| :r file     | Import a file into the current file                          |
| :34 r file  | Import a file into the current file after line 34            |
| :w          | Write out the file to save changes                           |
| :w file     | Write the file to named file                                 |
| :wq         | Save the file exit vi                                        |
| :w!         | Force save the file                                          |
| :q!         | Quit vi but don’t save changes                               |

## Input mode commands

| Command | Action                                                 |
| ------- | ------------------------------------------------------ |
| a       | Insert characters to the right of the cursor           |
| A       | Append characters to the current line                  |
| i       | Insert characters to the left of cursor                |
| I       | Insert characters at the beginning of the current line |
| o       | Add a new line after current line                      |
| O       | Insert a new line above the current line               |
