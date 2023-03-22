---
sidebar_position: 1
---

# Hydro 插件

HydroOJ 作为首批接入洛谷开放平台的在线评测系统，实现了完整的远程评测体验，您可以在 Hydro 中导入洛谷全部题目，定期更新，复制题目，编辑题面，发起评测和接收所有的子评测详细结果。

如果您还没有安装 Hydro ，可以使用下方命令一键安装，详情阅读 [官方指南](https://docs.hydro.ac/docs/install/)。

```sh
LANG=zh . <(curl https://hydro.ac/setup.sh)
```

使 Hydro 接入洛谷开放平台，您需要进行以下操作：

1. 使用 `hydrooj install @hydrooj/vjudge && hydrooj install https://cdn.luogu.com.cn/lgapi/hydro/hydroplugin-luogu-0.0.1.tgz` 安装相关模块。
2. 使用 `hydrooj cli luogu importProblem` 导入题库。
3. 使用 `hydrooj cli luogu addAccount <token>` 设置账号。
4. 重启 Hydro 进程。（`pm2 restart hydrooj`）
5. 大功告成

如果需要帮助部署/迁移或有二次开发的需求，您可联系 Hydro 开发者寻求帮助。

- Hydro 仓库地址：https://github.com/hydro-dev/hydro
- Hydro 文档：https://hydro.js.org (镜像：https://docs.hydro.ac)
- 洛谷 vjudge 插件仓库地址：https://github.com/hydro-dev/luogu
