---
title: Set up common proxies
category: Others
layout: 2017/sheet
tags: [Javascript]
updated: 2022-05-31
intro: |
  `Set up mirrors and proxies.
---

### Git proxy

```bash
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
git config --global --unset http.proxy
git config --global http.proxy
```

### Fedora dnf mirror

Dnf by default does not choose the fastest mirror, but this can be changed by editing the dnf.conf file.

```bash
sudo vi /etc/dnf/dnf.conf
```

add `fastestmirror=1`, the file should look like this:

```cnf
[main]
gpgcheck=1
installonly_limit=3
clean_requirements_on_remove=True
best=False
skip_if_unavailable=True
fastestmirror=1
```

save the file, remove repository metadata using command:
```bash
sudo dnf clean all
```

[See Fedora Public Active Mirrors](https://admin.fedoraproject.org/mirrormanager/)

### Maven 
in settings.xml `<mirrors>` tag, add:

```xml
<mirror>
  <id>alimaven</id>
  <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
  <mirrorOf>central</mirrorOf>        
</mirror>
```

### Bash

```bash
export http_proxy=http://proxy.server.com:portnumber
export https_proxy=https://proxy.server.com:portnumber
```

### Command line (windows)

```cmd
set HTTP_PROXY=http://proxy_userid:proxy_password@proxy_ip:proxy_port
set FTP_PROXY=%HTTP_PROXY%
set HTTPS_PROXY=%HTTP_PROXY%
```

### npm
npm.taobao.org(now npmmirror.org)

```bash
npm config set registry https://registry.npmmirror.com
```

restore default
```bash
npm config set registry https://registry.npmjs.org
```