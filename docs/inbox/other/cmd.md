# cmd

A filepath is where you are in the filesystem

- C: is the C drive
- C:\user\Documents is the Documents folder
- C:\user\Documents\hello.c is a file in the Documents folder

## dir

Displays a list of a folder’s files and subfolders

```powershell
dir (shows current folder)
dir myfolder 
```

## cd, chdir

Displays the name of the current directory or changes the current folder.

```powershell
cd filepath
chdir filepath
cd .. (goes one directory up)
```

## md, mkdir

 Creates a folder (directory)

```powershell
md folder-name
mkdir folder-name
```

## rm, rmdir

Deletes a folder (directory) 

```powershell
rm folder-name
rmdir folder-name
rm /s folder-name
rmdir /s folder-name
```

Note: if the folder isn’t empty, you must add the /s. 

## copy

Copies a file from one location to another 

```powershell
copy filepath-from filepath-to 
```

## move

Moves file from one folder to another

```powershell
move folder1\file.txt folder2\ 
```

## ren

rename Changes the name of a file

```powershell
ren file1 file2 
```

## del

Deletes one or more files

```powershell
del filename 
```

## exit

Exits batch script or current command control

```powershell
exit
```

## echo

Used to display a message or to turn off/on messages in batch scripts

```powershell
echo message 
```

## type

Displays contents of a text file

```powershell
type myfile.txt 
```

## fc

Compares two files and displays the difference between them

```powershell
fc file1 file2
```

## certutil

查看文件MD5 SHA1 SHA256

```powershell
certutil -hashfile yourfilename.ext MD5
certutil -hashfile yourfilename.ext SHA1
certutil -hashfile yourfilename.ext SHA256
```

