# Download real images from Wikimedia Commons for BarCraft app

$baseDir = "c:/Users/otisfeng/OneDrive/桌面/workbuddy/调酒软件/My-Bar/assets"

# Define images to download (name, search query)
$images = @(
    @{name="real_campari.jpg"; search="Campari bottle red aperitif"},
    @{name="real_bacardi.jpg"; search="Bacardi rum bottle white"},
    @{name="real_martini.jpg"; search="Martini vermouth bottle red"},
    @{name="real_jose_cuervo.jpg"; search="tequila bottle Jose Cuervo"},
    @{name="real_absolute_vodka.jpg"; search="Absolut vodka bottle"},
    @{name="real_macallan.jpg"; search="Macallan whisky bottle"},
    @{name="real_lafite.jpg"; search="Lafite Rothschild wine bottle"},
    @{name="real_yamazaki.jpg"; search="Yamazaki whisky Japanese bottle"},
    @{name="real_cointreau.jpg"; search="Cointreau liqueur bottle"}
)

# Search for each image and download
foreach ($img in $images) {
    Write-Host "Searching for: $($img.search)"
    
    # Search for the image
    $searchUrl = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=$($img.search)&srnamespace=6&format=json&srlimit=3"
    try {
        $result = Invoke-RestMethod $searchUrl
        $pageIds = $result.query.search.pageid
        
        foreach ($pageId in $pageIds) {
            $imageInfoUrl = "https://commons.wikimedia.org/w/api.php?action=query&pageids=$pageId&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json"
            $imgResult = Invoke-RestMethod $imageInfoUrl
            $pageData = $imgResult.query.pages.$pageId
            
            if ($pageData.imageinfo -and $pageData.imageinfo.Count -gt 0) {
                $thumbUrl = $pageData.imageinfo[0].thumburl
                if (-not $thumbUrl) {
                    $thumbUrl = $pageData.imageinfo[0].url
                }
                
                Write-Host "  Found: $($pageData.title)"
                Write-Host "  URL: $thumbUrl"
                
                $outputPath = "$baseDir/$($img.name)"
                try {
                    Invoke-WebRequest -Uri $thumbUrl -OutFile $outputPath
                    $fileSize = (Get-Item $outputPath).Length
                    Write-Host "  Downloaded: $outputPath ($fileSize bytes)"
                    
                    # If file is too small, it might be an error page
                    if ($fileSize -lt 5000) {
                        Write-Host "  WARNING: File too small, might be error"
                        Remove-Item $outputPath
                    }
                } catch {
                    Write-Host "  ERROR downloading: $_"
                }
                break
            }
        }
    } catch {
        Write-Host "  ERROR searching: $_"
    }
    Write-Host ""
}

Write-Host "Done!"
