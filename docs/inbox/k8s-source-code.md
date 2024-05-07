---
title : "k8s 源码阅读"
---

# K8S 源码阅读

项目：[k8s@github](https://github.com/kubernetes/kubernetes)

关键组件：

1）api/apis/kubeapiserver：k8s对内对外api。

2）controller: 核心控制逻辑，维持cluster状态，提供弹性，自愈，高可用等能力。

3）kubelete: 部署在节点上的agent，监控和管理每个节点的资源和状态。

4）scheduler: 提供pod部署逻辑的模块。

5）kubectl: k8s命令行工具。

都遵循几乎一样的目录结构，因为k8s使用了bazel这个工具来编译代码和测试，关于这个工具可以参考 [https://bazel.build](https://bazel.build/)

## 解读文章

[霹雳五号_297e](https://www.jianshu.com/p/9d95bceb9a73)

[Kevin-fqh](https://github.com/Kevin-fqh/learning-k8s-source-code)：以apiserver controller-manager scheduler kubelet proxy 和 kubectl 6个命令为主线

[胡涛](https://www.danielhu.cn/tags/%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/)：client-go、Job Controller、Deployment

[田飞雨](https://blog.tianfeiyu.com/source-code-reading-notes/)

[derekguo001](https://github.com/derekguo001/understanding-kubernetes)：Scheduler、Kubelet、Volume