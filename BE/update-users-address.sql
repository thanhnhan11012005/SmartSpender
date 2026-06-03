-- Add ADDRESS column to USERS for existing PostgreSQL database
ALTER TABLE IF EXISTS "USERS"
ADD COLUMN IF NOT EXISTS "ADDRESS" VARCHAR(255);

-- Optional backfill for local demo account
UPDATE "USERS"
SET "ADDRESS" = 'Gia Lai'
WHERE "EMAIL" = 'demo@local';

-- Verify
SELECT "ID", "NAME", "EMAIL", "PHONE", "ADDRESS"
FROM "USERS";
