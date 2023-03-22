---
sidebar_position: 1
pagination_prev: null
---

# API 端点

:::caution 注意

洛谷开放平台的所有端点都使用了 TLS 为应用层加密，保障 API 调用和内容的安全。

平台限制 TLS 版本为 1.2 及以上，请确保 OpenApp 开启了 TLS 1.2 及以上版本的安全支持。

:::

HTTP 端点的 Base URL 为 `https://open-v1.lgapi.cn`。HTTP 端点用于 OpenApp 的主动请求，需要完成鉴权，详见[鉴权说明](auth.md)。

WebSocket 端点为 `wss://open-ws.lgapi.cn/ws`。WebSocket 端点用于平台对 OpenApp 的消息推送，同样需要鉴权，详见 [异步结果推送](async-result.mdx) 中的 WebSocket 部分。
