FROM ubuntu
RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
RUN apt-get -yq update
RUN apt-get -yq install ruby ruby-dev build-essential zlib1g-dev
RUN gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
# RUN gem sources -l
RUN gem install jekyll bundler
RUN apt-get update && apt-get install -y git nodejs
WORKDIR /data

CMD sh -c "bundle install && bundle update && bundle exec jekyll build --watch --trace"
