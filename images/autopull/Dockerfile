FROM node:12.16-alpine3.11
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
WORKDIR /app
COPY package.json /app/
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    npm install
EXPOSE 9000
COPY . .
CMD ["npm", "start"]
