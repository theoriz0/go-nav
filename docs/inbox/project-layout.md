# Go项目标准布局

来源：[project-layout](https://github.com/golang-standards/project-layout/)

> 文件也是代码的组织方式。理想的代码构成一个树状结构，由架构到细节。MECE、金字塔原理。

```
/cmd：/cmd/velero/velero.go

/pkg: 外部可复用的包。未来的话可以抽离成独立的公共包，供其他项目、其他同事复用。

/internal: 无法被外部调用（go1.4开始）

/verdor: 把mod放在项目下，用于网络隔离构建

/api: OpenAPI/Swagger specs, JSON schema files, protocol definition files

/web: static web assets, server side templates and SPAs

/configs: 配置文件

/init：如systemd配置

/scripts：相关脚本（小Makefile，流程放在sh脚本里。）

/build: 打包、持续集成

/deployments: docker-compose, ..等

/test: 测试 go会忽略 . _ 开头以及test的目录和文件

/docs: 文档

/tools: 支撑工具（可以引入pkg、internal）

/examples

/third_party：三方工具，如swagger ui

/githooks

/assets：图片，logo

/website
```


## 徽章

* [Go Report Card](https://goreportcard.com/)：它将使用`gofmt`，`vet`，`gocyclo`，`golint`，`ineffassign`，`license`和`mispell`扫描项目中的代码。将`github.com/golang-standards/project-layout`替换为你的项目的引用。
* [GoDoc](http://godoc.org/)：它将提供GoDoc生成的文档的在线版本。更改链接以指向你的项目。
* Release：它将显示你项目的最新版本号。更改github链接以指向你的项目。

[![Go Report Card](https://goreportcard.com/badge/github.com/golang-standards/project-layout?style=flat-square)](https://goreportcard.com/report/github.com/golang-standards/project-layout)
[![Go Doc](https://img.shields.io/badge/godoc-reference-blue.svg?style=flat-square)](http://godoc.org/github.com/golang-standards/project-layout)
[![Release](https://img.shields.io/github/release/golang-standards/project-layout.svg?style=flat-square)](https://github.com/golang-standards/project-layout/releases/latest)

## 参考

命名、格式化或者样式方面的帮助：


* [GopherCon EU 2018: Peter Bourgon - Best Practices for Industrial Programming](https://www.youtube.com/watch?v=PTE4VJIdHPg)
* [GopherCon Russia 2018: Ashley McNamara + Brian Ketelsen - Go best practices](https://www.youtube.com/watch?v=MzTcsI6tn-0)
* [GopherCon 2017: Edward Muller - Go Anti-Patterns](https://www.youtube.com/watch?v=ltqV6pDKZD8)
* [GopherCon 2018: Kat Zien - How Do You Structure Your Go Apps](https://www.youtube.com/watch?v=oL6JBUk6tj0)

