o365 spo connect https://skylinespark-admin.sharepoint.com -t password -u apetersen@skylinespark.onmicrosoft.com -p SHHH 
for ($i = 1; $i -le 8; $i++) {
    $url = "https://skylinespark.sharepoint.com/sites/Oneida-" + $i
    Write-Host "Creating Site Collection App Catalog for: " $url
    o365 spo site appcatalog add --url $url
}