-- Update PASSWORD_HASH for testing
UPDATE "USERS" 
SET "PASSWORD_HASH" = '123'
WHERE "EMAIL" = 'nhanht1101@gmail.com';

-- Verify
SELECT id, name, email, phone, "PASSWORD_HASH" FROM "USERS" WHERE email = 'nhanht1101@gmail.com';
