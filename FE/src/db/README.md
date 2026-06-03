# Local Postgres for this project (pgAdmin 4)

This folder contains a small development scaffold to run PostgreSQL and pgAdmin locally so you can connect with pgAdmin 4.

Files added:
- `docker-compose.yml` — runs Postgres and pgAdmin and initializes the DB using `init.sql`.
- `init.sql` — creates tables and inserts a small set of sample rows.
- `.env.example` — example environment variables for credentials.

Quick start (requires Docker):

1. Copy `.env.example` to `.env` and modify if desired.

2. From this folder, start the services:

```bash
cd FE/src/db
docker-compose up -d
```

3. Open pgAdmin in your browser at http://localhost:5050 and login with the credentials from `.env` (defaults: `admin@local` / `admin`).

4. Add a new server in pgAdmin with these connection details:

- **Host name/address**: host.docker.internal (or `localhost` if host.docker.internal is not available)
- **Port**: 5432
- **Maintenance DB**: replicate_db
- **Username**: replicate_user
- **Password**: replicate_pass

Notes:
- The `init.sql` runs only the first time the Postgres container initializes. To re-run initialization, remove the `db_data` volume and restart.
- If you prefer not to use Docker, you can import `init.sql` into any existing Postgres instance via pgAdmin > Query Tool > run file.
