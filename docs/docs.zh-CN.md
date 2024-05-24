# 文档
[![返回README](https://img.shields.io/badge/%E8%BF%94%E5%9B%9EREADME-blue?style=flat-square)](./../README.md "返回README")
[![View English](https://img.shields.io/badge/View-English-blue?style=flat-square)](./docs.en-US.md "View English")

> [!NOTE]
> **文档仍在完善中**  
> 如果你想参与完善，请按 [此文档](./../CONTRIBUTING.md#完善文档) 的指引提交PR


## 使用
启动方式见 [README](./../README.md#安装)  

## 配置文件
配置存储在 `config.json` 中。  
你可以修改此文件来更改配置。  

### 配置文件结构
- _(Object)_ 根对象
  - `rules` _(Array)_ 规则组
      - _(Object)_ 一个规则
        - `path` _(String)_ 要遍历的路径（必须为绝对路径）
        - `matches` _(Array)_ 匹配规则列表
          - _(Object)_ 一个匹配规则
            - `type` _(String)_ 匹配类型（见下[支持的匹配](#支持的匹配)）
            - `value` _(String)_ 匹配的值
            - `full` _(Boolean)_ 是否完全匹配
            - `rename` _(String)_ 重命名的名称（不带`.lnk`）
          - ...
      - ...

### 支持的匹配
参数由 [windows-shortcuts](https://www.npmjs.com/package/windows-shortcuts) 包提供，具体可见此包的文档  

- `target`: 快捷方式的指向
- `args`: 命令行参数
- `workingDir`: 工作路径
- `runStyle`: 运行方式（具体数据尚不明确）
- `icon`: 图标路径
- `iconIndex`: 图标在文件的第几个（对于DLL和有多个图标的文件）
- `hotKey`: 启动热键（具体数据尚不明确）

### 配置文件示例

<details>
<summary>点击展开</summary>

```json
{
    "rules": [
        {
            "path": "路径1",
            "matches": [
                {
                    "type": "target",
                    "value": "目标地址1",
                    "full": false,
                    "rename": "重命名1"
                },
                {
                    "type": "workingDir",
                    "value": "工作路径1（完全匹配）",
                    "full": true,
                    "rename": "重命名2"
                }
            ]
        },
        {
            "path": "路径2",
            "matches": [
                {
                    "type": "icon",
                    "value": "图标路径1",
                    "full": false,
                    "rename": "重命名3"
                }
            ]
        }
    ]
}
```

</details>
<br />

另外，本仓库的 `config.json` 也预置了几个示例。  