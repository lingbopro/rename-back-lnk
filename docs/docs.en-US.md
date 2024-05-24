# Documentation
[![Return to README](https://img.shields.io/badge/Return-README-blue?style=flat-square)](./README.en-US.md "Return to README")
[![查看中文](https://img.shields.io/badge/%E6%9F%A5%E7%9C%8B-%E4%B8%AD%E6%96%87-blue?style=flat-square)](./docs.zh-CN.md "查看中文")

> [!NOTE]
> This document is machine-translated.  
> It may incorrect.

> [!NOTE]
> **The documentation is still being improved**  
> If you want to contribute to the improvement, please follow the instructions in [this document](./../CONTRIBUTING.md#improve-documentation) to submit a PR


## Usage
See [README](./../README.md#installation) for startup methods  

## Configuration File
The configuration is stored in `config.json`.  
You can modify this file to change the configuration.  

### Configuration File Structure
- _(Object)_ Root object
  - `rules` _(Array)_ Rule group
      - _(Object)_ A rule
        - `path` _(String)_ Path to traverse (must be an absolute path)
        - `matches` _(Array)_ Matching rule list
          - _(Object)_ A matching rule
            - `type` _(String)_ Match type (see below [Supported Matches](#supported-matches))
            - `value` _(String)_ Match value
            - `full` _(Boolean)_ Full match
            - `rename` _(String)_ Renamed name (without `.lnk`)
          - ...
      - ...

### Supported Matches
Parameters provided by the [windows-shortcuts](https://www.npmjs.com/package/windows-shortcuts) package, see the documentation of this package for details

- `target`: Target of the shortcut
- `args`: Command line arguments
- `workingDir`: Working directory
- `runStyle`: Running style (specific data is not clear yet)
- `icon`: Icon path
- `iconIndex`: Icon index in the file (for DLL and files with multiple icons)
- `hotKey`: Startup hotkey (specific data is not clear yet)

### Configuration File Example

<details>
<summary>Click to expand</summary>

```json
{
    "rules": [
        {
            "path": "Path1",
            "matches": [
                {
                    "type": "target",
                    "value": "Target Address1",
                    "full": false,
                    "rename": "Rename1"
                },
                {
                    "type": "workingDir",
                    "value": "Working Directory1 (Exact Match)",
                    "full": true,
                    "rename": "Rename2"
                }
            ]
        },
        {
            "path": "Path2",
            "matches": [
                {
                    "type": "icon",
                    "value": "Icon Path1",
                    "full": false,
                    "rename": "Rename3"
                }
            ]
        }
    ]
}
```

</details>
<br />

Additionally, this repository's `config.json` also comes with several examples.