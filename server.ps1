# PowerShell HTTP Server สำหรับหน้าแฟนวันปีใหม่
$port = 3000
$url = "http://localhost:$port/"

# ตรวจสอบว่า port ถูกใช้งานหรือไม่
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)
$listener.Start()

Write-Host "🎉 เซิร์ฟเวอร์ทำงานที่ $url" -ForegroundColor Green
Write-Host "🎊 เปิดเบราว์เซอร์และไปที่ $url" -ForegroundColor Yellow
Write-Host "กด Ctrl+C เพื่อหยุดเซิร์ฟเวอร์" -ForegroundColor Cyan

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $localPath = $request.Url.LocalPath
    
    # กำหนด path ไฟล์
    if ($localPath -eq "/" -or $localPath -eq "") {
        $filePath = Join-Path $PSScriptRoot "public\index.html"
    } else {
        $filePath = Join-Path $PSScriptRoot "public$localPath"
    }
    
    # ตรวจสอบว่าไฟล์มีอยู่หรือไม่
    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $content.Length
        
        # กำหนด Content-Type
        $extension = [System.IO.Path]::GetExtension($filePath)
        switch ($extension) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".css" { $response.ContentType = "text/css; charset=utf-8" }
            ".js" { $response.ContentType = "application/javascript; charset=utf-8" }
            ".json" { $response.ContentType = "application/json; charset=utf-8" }
            ".png" { $response.ContentType = "image/png" }
            ".jpg" { $response.ContentType = "image/jpeg" }
            ".gif" { $response.ContentType = "image/gif" }
            default { $response.ContentType = "text/plain; charset=utf-8" }
        }
        
        $response.StatusCode = 200
        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
        $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found")
        $response.ContentLength64 = $notFound.Length
        $response.ContentType = "text/plain; charset=utf-8"
        $response.OutputStream.Write($notFound, 0, $notFound.Length)
    }
    
    $response.Close()
}

