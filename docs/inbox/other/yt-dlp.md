# yt-dlp常用命令

## list all available formats
`yt-dlp -F [Link]`

## download (and merge) files
`yt-dlp -f xx [Link]` 
`yt-dlp -f xx+xx [Link]`

## with thumbnail
`yt-dlp -f xx+xx --write-thumbnail [Link]`

## other thumbnail params
```
--write-thumbnail               Write thumbnail image to disk
--no-write-thumbnail            Do not write thumbnail image to disk (default)
--write-all-thumbnails          Write all thumbnail image formats to disk
--list-thumbnails  
``` 