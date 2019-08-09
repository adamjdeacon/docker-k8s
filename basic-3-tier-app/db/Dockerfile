FROM mysql:5.7
ADD default/default.sql /docker-entrypoint-initdb.d/
RUN apt-get update && apt-get -y upgrade
