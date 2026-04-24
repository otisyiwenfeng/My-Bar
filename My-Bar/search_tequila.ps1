$ErrorActionPreference = "Stop"

Write-Host "=== Downloading Tequila image ==="
Start-Sleep -Seconds 5

try {
    $result = Invoke-RestMethod "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=tequila+bottle&srnamespace=6&format=json&srlimit=10"
    foreach ($item in $result.query.search) {
        Write-Host "Found: $($item.title) (ID: $($item.pageid))"
    }
} catch {
    Write-Host "Search error: $_"
}
