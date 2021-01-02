FROM php:7.2.12-fpm

# install composer
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer
RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim


RUN apt-get update \
    && apt-get install -y \
        libpq-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql \
    && docker-php-ext-install -j$(nproc) iconv \
    && docker-php-ext-configure gd —with-freetype-dir=/usr/include/ —with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd


WORKDIR /var/www/html