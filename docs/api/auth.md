---
sidebar_position: 2
sidebar_label: 鉴权说明
---

# API 鉴权说明

洛谷开放平台的 API 鉴权使用 HTTP Basic authentication 完成，从开放平台申请到的 OpenApp Token 实际上是 Basic auth 的凭证组合，例如下面这个 token：
```
01gt8s4bnbesna15e9f6wvk5pn:w1MmbjBCsDYjXpgS
```

冒号前面的 `01gt8s4bnbesna15e9f6wvk5pn` 是用户、后面的 `w1MmbjBCsDYjXpgS` 则是密码，在某些请求库或工具中需要分开填写。

如果直接构造 HTTP Header 的话，则需要按照标准对其 base64 编码后使用，例如上面这个 token 就需要以这种形式发送：

```
Authorization: Basic MDFndDhzNGJuYmVzbmExNWU5ZjZ3dms1cG46dzFNbWJqQkNzRFlqWHBnUw==
```
