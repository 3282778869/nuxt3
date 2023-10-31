FROM node:18.0
WORKDIR /src
COPY . /src

ARG BUILD_ENV
ENV BUILD_ENV $BUILD_ENV
ENV TZ Asia/Shanghai
#ENV http_proxy=http://dnsla:dnsla2023@dev.dns.la:7890/
#ENV https_proxy=http://dnsla:dnsla2023@dev.dns.la:7890/
RUN npm install
RUN npm run build

WORKDIR /app
COPY --from /src/.output ./

EXPOSE 3000
