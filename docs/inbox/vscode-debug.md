---
title: "Golang VSCode launch.json 配置"
---

# Golang VSCode launch.json 配置

[debugging · golang/vscode-go Wiki (github.com)](https://github.com/golang/vscode-go/wiki/debugging#launchjson-attributes)

参考配置：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch file",
            "type": "go",
            "request": "launch",
            "mode": "debug",
            "program": "${file}",
            "args": ["-c", "../../dal/configs/dal.yaml"]
        }
    ]
}
```