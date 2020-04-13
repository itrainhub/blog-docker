FROM ubuntu
RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
RUN apt-get -yq update
RUN apt-get -yq install ruby ruby-dev build-essential zlib1g-dev
RUN gem install jekyll bundler

WORKDIR /data

CMD sh -c "bundle update --bundler && bundle exec jekyll build --watch"
