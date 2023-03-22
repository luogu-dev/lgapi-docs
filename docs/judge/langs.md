---
sidebar_position: 3
---

# 语言支持

洛谷的语言支持如无特别的编译器版本说明，均会随着时间而更新。

除 C/C++/Pascal 外的语言，由于常数时间差距，不保证正确算法的执行所用时间和内存能够通过评测而不超出限制。洛谷不为此类语言提供多余的时间和内存限制。

评测环境中定义环境变量 `ONLINE_JUDGE=luogu`，若编译器支持也会带上此常量或宏，可据此判断是否在评测环境。

评测机更新时间：2021-12-01，nixpkgs commit hash `57be0c5d9650a5c3970439ba7a1f4a017cd98cc0`。

## C/C++ 家族

GCC 版本当前为 11.2.0。

所有 GCC 编译时均会带上 `-fPIC -fno-asm -lm -march=native` 参数。

:::caution 注意

为了比赛等情况下的公平，在 C/C++ 代码的编译中，如果出现了通过 pragma 和 attribute 打开优化开关的行为是会导致编译失败的，详见[公告贴](https://www.luogu.com.cn/discuss/259685)。不限制使用评测机 CPU 支持的指令集。

:::

| 类型              | 标识符          |
|-----------------|--------------|
| ISO C99 (GCC)   | `c/99/gcc`   |
| ISO C++98 (GCC) | `cxx/98/gcc` |
| ISO C++11 (GCC) | `cxx/11/gcc` |
| ISO C++14 (GCC) | `cxx/14/gcc` |
| ISO C++17 (GCC) | `cxx/17/gcc` |
| ISO C++20 (GCC) | `cxx/20/gcc` |

另外，对于 NOI 系列的参赛环境，提供以下专门的编译类型：

| 类型                     | 标识符              |                                                                   |
|------------------------|------------------|-------------------------------------------------------------------|
| ISO C++14 w/ GCC 9.3.0 | `cxx/noi/202107` | [NOI 官网通知](https://www.noi.cn/gynoi/jsgz/2021-07-16/732450.shtml) |

## Python 家族

Python 家族提供 CPython（常用版本）和 PyPy 两种解释器。CPython 环境安装了 NumPy 库。

Python 2 已于 2020 年被官方宣布寿终正寝，因此平台已不再提供支持。

| 类型                 | 标识符          |
|--------------------|--------------|
| Python 3 (CPython) | `python3/c`  |
| Python 3 (PyPy)    | `python3/py` |

## Pascal

Pascal 使用 Free Pascal 编译器，当前版本为 3.2.0。

| 类型     | 标识符          |
|--------|--------------|
| Pascal | `pascal/fpc` |

## Rust

Rust 提供 rustc 一种编译器，并使用 nightly 版本、Rust edition 为 2021。

| 类型                   | 标识符          |
|----------------------|--------------|
| Rust nightly (rustc) | `rust/rustc` |

## Haskell

Haskell 提供 Glasgow Haskell Compiler（GHC）一种编译器。

Haskell 环境安装了[官网](https://www.haskell.org/)所列举的核心包和常用包（见 Features-Packages 栏）。

| 类型            | 标识符           |
|---------------|---------------|
| Haskell (GHC) | `haskell/ghc` |

## Go

| 类型  | 标识符  |
|-----|------|
| Go  | `go` |

## PHP

| 类型  | 标识符   |
|-----|-------|
| PHP | `php` |

## Ruby

| 类型   | 标识符    |
|------|--------|
| Ruby | `ruby` |

## JavaScript

JavaScript 提供 Node.js 一种解释器。

| 类型          | 标识符           |
|-------------|---------------|
| Node.js LTS | `js/node/lts` |

## Perl

| 类型   | 标识符    |
|------|--------|
| Perl | `perl` |

## Java

Java 使用 OpenJDK 编译。

| 类型     | 标识符      |
|--------|----------|
| Java 8 | `java/8` |

## Kotlin

Kotlin 语言提供 JVM 一种编译目标，且 JVM 版本为 1.8（会随着评测机更新）。

| 类型         | 标识符          |
|------------|--------------|
| Kotlin/JVM | `kotlin/jvm` |

## Scala

Scala 编译目标版本为 1.8（会随着评测机更新）。

| 类型    | 标识符     |
|-------|---------|
| Scala | `scala` |
