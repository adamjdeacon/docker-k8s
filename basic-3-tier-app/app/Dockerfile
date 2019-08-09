FROM php:apache
RUN docker-php-ext-install mysqli # && docker-php-ext-enable mysqli
COPY src/ /var/www/html
RUN apt-get update && apt-get -y upgrade
