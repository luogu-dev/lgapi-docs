---
sidebar_position: 1
---

# Hydro 插件

:::info

如果您还没有搭建评测系统，推荐使用 Hydro 作为您的评测系统。Hydro 有完善的插件系统用以增删定制功能，以及原生的多题库和远程评测支持。

如果您已经安装了 HustOJ、SYZOJ、Vijos 等评测系统，同样也可以根据[官方迁移指南](https://docs.hydro.ac/plugins/migrate/)的介绍将您的评测系统迁移至 Hydro。注意，若您有二次开发增加功能，在迁移后可能需要重新实现相关功能。

:::

- Hydro 仓库地址：https://github.com/hydro-dev/hydro
- 洛谷 vjudge 插件仓库地址：https://github.com/hydro-dev/luogu

HydroOJ 作为首批接入洛谷开放平台的在线评测系统，通过 vjudge 插件实现了完整的远程评测体验，您可以在 Hydro 中导入洛谷题目，发起评测和接收所有的子评测详细结果。

若要使用 Hydro 插件，您需要有一个 HydroOJ 实例，部署请参考[官方指南](https://docs.hydro.ac/docs/install/)。

使 HydroOJ 接入洛谷开放平台，您需要进行以下操作：

1. 使用 `hydrooj install @hydrooj/vjudge && hydrooj install https://cdn.luogu.com.cn/lgapi/hydro/hydroplugin-luogu-0.0.1.tgz` 安装相关模块。
2. 使用 `hydrooj cli luogu import` 导入题库。
3. 使用 `hydrooj cli luogu addAccount <token>` 设置账号。
4. 重启 HydroOJ 进程。

如果需要帮助部署或有二次开发的需求，您可联系 Hydro 开发者寻求付费服务帮助。
