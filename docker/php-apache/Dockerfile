ARG PHP_VERSION=7.2
ARG COMPOSER_VERSION=1.8

FROM php:${PHP_VERSION}-apache

COPY php.ini /usr/local/etc/php/

RUN apt update && \
    apt install -y --no-install-recommends \
    apache2 autoconf git postgresql-client postgresql-server-dev-11 locales \
    libfreetype6-dev libjpeg62-turbo-dev libpng-dev libmcrypt-dev unzip pkg-config \
    libssl-dev zlib1g-dev libzip-dev && \
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

WORKDIR /var/www/html/

# Laravel, mongodb client install
RUN composer create-project laravel/laravel=6.0 . && \
  composer require jenssegers/mongodb
# directory volume mount
# RUN docker run -v ./:/var/www/html/ php7.2-apache-composer /bin/bash
# VOLUME "/var/www", "/var/log/apache2", "/etc/apache2"
VOLUME ../../ /var/www/html/


# tools
# RUN apt -y update && apt install -y vim less zip unzip curl guzzle

# RUN cp .env.example .env && /usr/local/etc/php artisan key:generate


