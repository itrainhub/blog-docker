FROM ubuntu
RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
RUN apt-get -yq update
RUN apt-get -yq install nginx

COPY ./conf.d/default.conf /etc/nginx/conf.d/

# Clean up APT when done
RUN apt-get clean && rm -rf /var/www/html/* /etc/nginx/sites-enabled/*

# Environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

ENTRYPOINT ["nginx", "-g", "daemon off;"]
