$headers = @{
    'Content-Type' = 'application/json'
}

$body = @{
    email = "nhanht1101@gmail.com"
    password = "123456"
} | ConvertTo-Json

Write-Host "Testing POST http://localhost:8080/api/auth/login"

try {
    $response = Invoke-RestMethod -Uri 'http://localhost:8080/api/auth/login' `
        -Method POST `
        -Headers $headers `
        -Body $body
    Write-Host "Success:" -ForegroundColor Green
    $response | ConvertTo-Json
} catch {
    Write-Host "Error:" -ForegroundColor Red
    Write-Host "Status Code: $($_.Exception.Response.StatusCode.Value__)"
    Write-Host "Message: $($_.Exception.Message)"
    Write-Host "Content: $($_.ErrorDetails.Message)"
}
