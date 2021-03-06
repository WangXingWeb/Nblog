---
title: http报文
---

用于 HTTP 协议交互的信息被称为 HTTP 报文。请求端（客户端）的 HTTP 报文叫做请求报文，响应端（服务器端）的叫做响应报文。

# 请求报文

请求报文包括

-   请求行
    请求行包括请求方法，url 和协议版本
-   请求头
-   空行
-   请求体(请求内容)

<img class="custom" :src="$withBase('/assets/img/http.jpeg')" />

# 响应报文

-   响应行
    响应行包括服务器 HTTP 协议版本，响应状态码，状态码的文本描述
    如`HTTP/1.1 200 OK`

-   响应头
-   空行
-   响应体(响应内容)

<img class="custom" :src="$withBase('/assets/img/http2.jpeg')" />

# 常见的状态吗

状态码由 3 位数字组成，第一位标识响应的类型，常用的 5 大类状态码如下：

1xx：表示服务器已接收了客户端的请求，客户端可以继续发送请求

2xx：表示服务器已成功接收到请求并进行处理

3xx：表示服务器要求客户端重定向

4xx：表示客户端的请求有==非法内容==

5xx：标识服务器未能正常处理客户端的请求而出现意外错误

常见状态码说明：

200 OK： 表示客户端请求成功

400 Bad Request： 表示客户端请求有语法错误，不能被服务器端解析

401 Unauthonzed： 表示请求未经授权，该状态码必须与 WWW-Authenticate 报文头一起使用

404 Not Found：请求的资源不存在，例如输入了错误的 url

500 Internal Server Error： 表示服务器发生了不可预期的错误，导致无法完成客户端的请求

503 Service Unavailable：表示服务器当前不能处理客户端的请求，在一段时间后服务器可能恢复正常
