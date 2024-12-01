---
sidebar_position: 1
---

# Hydro 插件

HydroOJ 作为首批接入洛谷开放平台的在线评测系统，实现了完整的远程评测体验，您可以在 Hydro 中导入洛谷全部题目，定期更新，复制题目，编辑题面，发起评测和接收所有的子评测详细结果。

如果您还没有安装 Hydro，可以使用下方命令一键安装，详情阅读[官方指南](https://docs.hydro.ac/docs/install/)。

```sh
LANG=zh . <(curl https://hydro.ac/setup.sh)
```

使 Hydro 接入洛谷开放平台，您需要进行以下操作：

1. 使用 `hydrooj install https://hydro.ac/hydroac-client.zip` 安装最新的远端评测和题库导入工具。
2. 重启 Hydro 进程（`pm2 restart hydrooj`）。
3. 使用管理员账号登录，前往 控制面板 -> 脚本管理 页面，找到 `luogu-import-problem` 脚本，运行，参数可留空，也可参照下方更多信息。
4. 前往 控制面板->洛谷RemoteJudge管理，购买或填写账号信息。
5. 设置完成后再次重启 Hydro 进程。
6. 大功告成！

如果需要帮助部署/迁移或有二次开发的需求，您可联系 Hydro 开发者寻求帮助。

## 题库导入参数

```json
{"path":"","domainId":"luogu","prefix":""}
```

JSON 格式；

`path` 为本地的题目包路径，留空则自动下载。  
`domainId` 为导入的目标域，若希望导入默认域则填写 system  
`prefix` 为导入题目时添加的题号前缀，留空则保持原题号。

若日后需要更新题目列表则再次运行该导入功能即可。

- Hydro 仓库地址：https://github.com/hydro-dev/hydro
- Hydro 文档：https://hydro.js.org (镜像：https://docs.hydro.ac)
- 洛谷 vjudge 插件仓库地址：https://github.com/hydro-dev/luogu
