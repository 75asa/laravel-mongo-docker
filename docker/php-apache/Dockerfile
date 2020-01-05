ARG PHP_VERSION=7.2
ARG COMPOSER_VERSION=1.8

FROM php:${PHP_VERSION}-apache
FROM composer:${COMPOSER_VERSION}
FROM php:${PHP_VERSION}-cli

COPY php.ini /usr/local/etc/php/

RUN apt update && \
    apt install -y --no-install-recommends apache2 autoconf git postgresql-client postgresql-server-dev-11 locales \
    libfreetype6-dev libjpeg62-turbo-dev libpng-dev libmcrypt-dev unzip pkg-config \
    libssl-dev zlib1g-dev && \
    pecl install mongodb && docker-php-ext-enable mongodb && \
    pecl install xdebug && docker-php-ext-enable xdebug && \
    docker-php-ext-install -j$(nproc) pdo_mysql zip && \
    mv /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled && \
    /bin/sh -c a2enmod rewrite headers && \
    apt -y clean && \
    rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install mbstring pdo pdo_pgsql gd iconv

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

RUN composer create-project --prefer-dist laravel/laravel=6.0 laravel-app && \
  composer require jenssegers/mongodb

# tools
RUN apt y update && apt install -y vim less zip unzip curl guzzle

RUN cp .env.example .env && php artisan key:generate


