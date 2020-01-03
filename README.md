# Docker for Laravel+PHP+Apache+PostgreSQL

## Laravel のプロジェクトを作成

### プロジェクトを作成

```
composer create-project --prefer-dist laravel/laravel プロジェクト名
```

### APP_KEYを作成

```
cd プロジェクト名
php artisan key:generate
```

## Dockerで環境構築

dockerのディレクトリをプロジェクトのルートにコピー

### .envを編集

```
APP_NAME=

DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=local_database
DB_USERNAME=root
DB_PASSWORD=
```

### コンテナビルド

```
docker-compose up -d
```
