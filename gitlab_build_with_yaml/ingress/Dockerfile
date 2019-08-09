FROM nginx:1.17
RUN apt-get update && apt-get -y install apt-utils && apt-get -y dist-upgrade && apt-get clean
RUN rm /etc/nginx/conf.d/default.conf
COPY ./conf/*.conf /etc/nginx/
COPY ./conf/conf.d/*.conf /etc/nginx/conf.d/
COPY ./ssl/*	/etc/nginx/ssl/
