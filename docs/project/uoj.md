---
sidebar_label: UOJ
sidebar_position: 2
---

# 适用于 UniversalOJ 的 Remote Judge 模块

通过将本模块集成到您现有的 Universal Online Judge (UOJ) 安装中，您可以将洛谷开放平台的强大评测能力带入您本地的评测系统中，从而提高您的教学效率和质量。

作为首批接入洛谷开放平台的评测系统扩展模块，本模块提供了完整的代评测体验，具体包括以下功能：

- 支持在线爬取来自洛谷的题面，并在自己的评测系统上展示；
- 远程提交评测请求至洛谷平台，获取评测结果及其详细信息，并将其显示在您的评测系统上；
- 对于需要导入较多题目的情况，我们还支持从本地文件批量导入洛谷题库（请在 [评测能力](../judge/index.md) 页面下载离线数据库）。

为了将现有的 UOJ 安装接入洛谷开放平台，您需要遵循以下步骤进行操作：

1. 将 [renbaoshuo/UOJ-Luogu-RemoteJudge](https://github.com/renbaoshuo/UOJ-Luogu-RemoteJudge) 仓库中的相关文件下载到本地（[打包下载链接](https://github.com/renbaoshuo/UOJ-Luogu-RemoteJudge/archive/refs/heads/master.zip)；打不开？[从镜像仓库下载](https://git.m.ac/baoshuo/UOJ-Luogu-RemoteJudge/archive/master.zip)）。
2. 按照 [安装教程](https://github.com/renbaoshuo/UOJ-Luogu-RemoteJudge/blob/master/INSTALLATION.md) 中的步骤将洛谷开放平台集成进您的评测系统中（打不开？访问 [镜像页面](https://git.m.ac/baoshuo/UOJ-Luogu-RemoteJudge/src/branch/master/INSTALLATION.md)）。

如果无法访问 GitHub，可以访问镜像仓库 [git.m.ac/baoshuo/UOJ-Luogu-RemoteJudge](https://git.m.ac/baoshuo/UOJ-Luogu-RemoteJudge)（[打包下载链接](https://git.m.ac/baoshuo/UOJ-Luogu-RemoteJudge/archive/master.zip)）。

如果您有部署或者二次开发方面的需求，可以联系开发人员寻求付费帮助。
