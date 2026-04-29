# Continue downloading real images from Wikimedia Commons

Start-Sleep -Seconds 5

# Tequila search
$result = Invoke-RestMethod 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=tequila&srnamespace=6&format=json&srlimit=10'
foreach ($item in $result.query.search) {
    if ($item.title -like "*Jose*" -or $item.title -like "*Cuervo*" -or ($item.title -like "*tequila*" -and $item.title -like "*bottle*")) {
        Write-Host "Found: $($item.title)"
        $imgResult = Invoke-RestMethod "https://commons.wikimedia.org/w/api.php?action=query&pageids=$($item.pageid)&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json"
        $page = $imgResult.query.pages.PsObject.Properties.Value | Where-Object { $_.imageinfo }
        if ($page -and $page.imageinfo[0].thumburl) {
            Write-Host "URL: $($page.imageinfo[0].thumburl)"
            Start-Sleep -Seconds 3
            Invoke-WebRequest -Uri $page.imageinfo[0].thumburl -OutFile "c:/Users/otisfeng/OneDrive/桌面/workbuddy/调酒软件/My-Bar/assets/real_tequila.jpg"
            Write-Host "Downloaded!"
            break
        }
    }
}

Write-Host "Done with tequila"
