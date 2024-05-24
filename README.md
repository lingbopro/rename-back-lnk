# Rename Back Lnk

![GitHub Repo stars](https://img.shields.io/github/stars/lingbopro/rename-back-lnk?style=flat-square)
![GitHub Release](https://img.shields.io/github/v/release/lingbopro/rename-back-lnk?style=flat-square)
![GitHub Tag](https://img.shields.io/github/v/tag/lingbopro/rename-back-lnk?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/lingbopro/rename-back-lnk?style=flat-square)
![GitHub License](https://img.shields.io/github/license/lingbopro/rename-back-lnk?style=flat-square)

[![README English](https://img.shields.io/badge/EN-README-blue?style=flat-square)](./docs/README.en-US.md "README English")
[![Docs English](https://img.shields.io/badge/EN-Docs-blue?style=flat-square)](./docs/docs.en-US.md "Docs English")
[![Contributing Guide English](https://img.shields.io/badge/EN-Contributing%20Guide-blue?style=flat-square)](./docs/CONTRIBUTING.en-US.md "Contributing Guide English")
[![README 中文](https://img.shields.io/badge/ZH-README-orange?style=flat-square)](./README.md "README 中文")
[![文档 中文](https://img.shields.io/badge/ZH-%E6%96%87%E6%A1%A3-orange?style=flat-square)](./docs/docs.zh-CN.md "文档 中文")
[![贡献指南 中文](https://img.shields.io/badge/ZH-%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97-orange?style=flat-square)](./CONTRIBUTING.md "贡献指南 中文")

## 介绍
此程序由 `Node.js` 编写（~~他还是那么喜欢Node.js~~），用于将被改名的快捷方式改回来  
原因是我们班的希沃上的桌面快捷方式（特别是`Firefox`）总是被某些~~SUS~~*可疑*的人改名，为了把快捷方式改回来就做了这个  
（没用的程序增加了~）  
（这是我目前为止文档写的最认真的一个repo）  

## 安装
### 1.安装Git和Node.js
请先确认你的电脑中装有 [Git](//git-scm.com) 和 [Node.js](//nodejs.org/en)，如果没有？愣着干嘛，去安装啊（bushi  
### 2.克隆存储库
执行：
```shell
git clone https://github.com/lingbopro/rename-back-lnk.git
```
### 3.安装依赖
执行：
```shell
npm install
```
### 4.更改配置
详见 [文档](./docs/docs.zh-CN.md#配置文件)  
### 5.启动！
运行：
```shell
node main.js
```
（PS：`run_bg.windows.vbs` 可以在后台运行本程序）