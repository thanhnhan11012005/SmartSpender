# ============================================================
# TEST API TRANSACTION ENDPOINTS - PowerShell Script
# ============================================================

Write-Host "=== TEST GIAO DỊCH BE-FE ===" -ForegroundColor Green
Write-Host ""

# Set variables
$Backend = "http://localhost:8080"
$UserId = 1
$WalletId = 1

# Test 1: GET all transactions by userId
Write-Host "TEST 1: Lấy danh sách giao dịch theo userId" -ForegroundColor Cyan
Write-Host "GET $Backend/api/transactions?userId=$UserId" 
Write-Host ""
$response = Invoke-WebRequest -Uri "$Backend/api/transactions?userId=$UserId" -Method GET -Headers @{"Content-Type"="application/json"} -SkipHttpErrorCheck

Write-Host "Status: $($response.StatusCode)" -ForegroundColor Yellow
if ($response.StatusCode -eq 200) {
    $data = $response.Content | ConvertFrom-Json
    Write-Host "✅ Success! Received $($data.Count) transactions" -ForegroundColor Green
    Write-Host ""
    Write-Host "Sample transaction:" -ForegroundColor Yellow
    if ($data.Count -gt 0) {
        $data[0] | ConvertTo-Json | Write-Host
    }
} else {
    Write-Host "❌ Failed! Status: $($response.StatusCode)" -ForegroundColor Red
    Write-Host "Response: $($response.Content)" -ForegroundColor Red
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Gray
Write-Host ""

# Test 2: POST create new transaction
Write-Host "TEST 2: Tạo giao dịch mới (INCOME)" -ForegroundColor Cyan

$newTransaction = @{
    walletId = $WalletId
    userId = $UserId
    categoryId = $null
    amount = 500000
    type = "income"
    description = "Test Income Transaction"
    location = "Test Location"
    transactionDate = "2026-05-28"
} | ConvertTo-Json

Write-Host "POST $Backend/api/transactions" 
Write-Host "Body: $newTransaction"
Write-Host ""

try {
    $response = Invoke-WebRequest -Uri "$Backend/api/transactions" `
        -Method POST `
        -Headers @{"Content-Type"="application/json"} `
        -Body $newTransaction `
        -SkipHttpErrorCheck

    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Yellow
    if ($response.StatusCode -eq 201) {
        Write-Host "✅ Success! Transaction created" -ForegroundColor Green
        $body = $response.Content | ConvertFrom-Json
        Write-Host "Response: $($body | ConvertTo-Json)" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed! Status: $($response.StatusCode)" -ForegroundColor Red
        Write-Host "Response: $($response.Content)" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Gray
Write-Host ""

# Test 3: Check wallet balance (after transaction)
Write-Host "TEST 3: Kiểm tra balance ví (qua GET /api/wallets)" -ForegroundColor Cyan

try {
    $response = Invoke-WebRequest -Uri "$Backend/api/wallets?userId=$UserId" `
        -Method GET `
        -Headers @{"Content-Type"="application/json"} `
        -SkipHttpErrorCheck

    if ($response.StatusCode -eq 200) {
        $wallets = $response.Content | ConvertFrom-Json
        Write-Host "✅ Wallets retrieved:" -ForegroundColor Green
        $wallets | ForEach-Object {
            Write-Host "  - $($_.name): $($_.balance) VND" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Gray
Write-Host "DONE!" -ForegroundColor Green
