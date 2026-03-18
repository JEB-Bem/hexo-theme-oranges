[English](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README.md) | 简体中文

# hexo-theme-oranges

> 一个简单的 hexo 主题

[demo](https://hexo.theme.oranges.zcheng.site/)

## 安装

为了更为便捷的更新主题，建议使用添加 Git 子模块的方法安装，在 hexo 博客项目根目录下执行，会将`oranges`主题 clone 至`themes`文件夹下。

```bash
git submodule add https://github.com/zchengsite/hexo-theme-oranges.git themes/oranges
```

日后更新主题只需要在主题根目录执行`git pull`命令即可。

## 使用

在 hexo 博客项目根目录下找到`_config.yml`文件，修改其中`theme`字段为主题名`oranges`

```yml
theme: oranges
```

主题配置可以放在以下任一位置：

- `themes/oranges/_config.yml`
- 博客根目录下的 `_config.oranges.yml`

如果两处同时存在，建议只保留一处作为唯一配置源。

## 配置

### 支持的独立页面类型

当前主题原生支持以下非文章页面：

- `tags`
- `categories`
- `friends`
- `about`
- `presentations`
- `tools`

如果只是普通独立页面，不需要专用模板，请不要设置 `type`。

### 语言文件

当前主题内置以下语言文件：

- `default.yml`
- `zh-CN.yml`
- `zh-TW.yml`
- `zh-cn.yml`
- `zh-tw.yml`

因此站点配置中使用 `language: zh-cn` 或 `language: zh-tw` 也可以直接命中对应语言包。

<details>
  <summary><b>Tags page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`tags`文件夹

```bash
hexo new page tags
```

接着修改`tags`文件夹下`index`为以下内容

```markdown
---
title: tags
date: 2019-05-03 12:03:35
type: "tags"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 标签
    enable: true
    path: /tags/
```

</details>

<details>
  <summary><b>Friends page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`friends`文件夹

```bash
hexo new page friends
```

接着修改`friends`文件夹下`index`为以下内容

```markdown
---
title: friends
date: 2019-05-03 12:03:35
type: "friends"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 朋友
    enable: true
    path: /friends/
```

</details>

<details>
  <summary><b>About me page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`about`文件夹

```bash
hexo new page about
```

接着修改`about`文件夹下`index`为以下内容

```markdown
---
title: about
date: 2019-05-03 12:03:35
type: "about"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 关于我
    enable: true
    path: /about/
```

</details>

<details>
  <summary><b>Categories page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`categories`文件夹

```bash
hexo new page categories
```

接着修改`categories`文件夹下`index`为以下内容

```markdown
---
title: categories
date: 2019-05-03 12:03:35
type: "categories"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 分类
    enable: true
    path: /categories/
```

</details>

<details>
  <summary><b>Presentations page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`presentations`文件夹

```bash
hexo new page presentations
```

接着修改`presentations`文件夹下`index`为以下内容

```markdown
---
title: presentations
date: 2026-03-18 12:00:00
type: "presentations"
---
```

并在配置文件中增加导航项：

```yml
navbar:
  -
    name: Presentations
    enable: true
    path: /presentations/
```

</details>

<details>
  <summary><b>Tools page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`tools`文件夹

```bash
hexo new page tools
```

接着修改`tools`文件夹下`index`为以下内容

```markdown
---
title: tools
date: 2026-03-18 12:00:00
type: "tools"
---
```

并在配置文件中增加导航项：

```yml
navbar:
  -
    name: Tools
    enable: true
    path: /tools/
```

</details>

<details>
  <summary><b>普通自定义页面</b> (click to show)</summary>

如果你只是想新增一个普通页面，而不是使用主题内置的专用模板，不要设置 `type`：

```bash
hexo new page links
```

```markdown
---
title: links
date: 2026-03-18 12:00:00
---
```

这样页面会走默认页面容器，不会误命中其他专用分支。

</details>

<details>
  <summary><b>文章目录 (Catalog)</b> (click to show)</summary>

在配置文件`_config.oranges.yml`下`catalog`修改`enable`为`true`，如不想展示，设置为`false`即可

```yml
catalog:
  enable: true
```

</details>

<details>
  <summary><b>RSS</b> (click to show)</summary>

1.安装`hexo-generator-feed`[官方插件](https://github.com/hexojs/hexo-generator-feed)

```shell
npm install hexo-generator-feed --save
```

2.在博客项目配置文件`_config.yml`(非主题配置文件) 增加：

```yml
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
  icon: icon.png
  autodiscovery: true
  template:
```

3.开启 rss 按钮
在配置文件`_config.oranges.yml`增加页脚项：

```yml
footer:
  social:
    -
      name: rss
      icon: rss
      path: /atom.xml
```

</details>

<details>
  <summary><b>Giscus 评论系统</b> (click to show)</summary>

当前主题仅内置 Giscus 评论系统。

在 `themes/oranges/_config.yml` 或 `_config.oranges.yml` 中配置：

```yml
giscus:
  enable: true
  repo: your-org/your-repo
  repo_id: R_xxxxxxxxx
  category: Announcements
  category_id: DIC_xxxxxxxxx
  mapping: pathname
  strict: 0
  reactions_enabled: 1
  emit_metadata: 0
  input_position: bottom
  lang: zh-CN
  loading: lazy
```

主题会自动根据浅色/深色模式同步 Giscus 主题。

</details>

<details>
  <summary><b>Google Analytics</b> (click to show)</summary>

[Google Analytics](https://analytics.google.com)
注册 Google 分析账号，在管理/创建媒体资源/选择网站/填写相关信息后得到跟踪 Id，一般格式为 UA-xxxxxxx-x
如之前已有注册账号，在管理/跟踪信息/跟踪代码/找到跟踪 ID，一般格式为 UA-xxxxxxx-x

```yml
gtag:
  enable: true
  gtagkey: UA-xxxxxxx-x
```

</details>

<details>
  <summary><b>PREV & NEXT</b> (click to show)</summary>

文章末尾的上一篇与下一篇功能。

```yml
prevnext:
  enable: true
```

</details>

## Breaking Changes

- `comments` 配置项已移除，统一改为 `giscus`。
- Valine、Waline、Gitalk、Disqus 的内置支持文件已从主题中删除。
- `presentations` 与 `tools` 现在是独立页面类型，不再复用其他页面模板。
- 归档页标题改为通过 `archive_a` / `archive_b` 翻译键生成。

<details>
  <summary><b>文章图片懒加载 (Lazy image loading)</b> (click to show)</summary>

安装插件[hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

```bash
npm install hexo-lazyload-image --save
```

项目配置文件`_config.yml`（非主题配置文件）下添加：

```yml
lazyload:
  enable: true
  onlypost: false # optional
  loadingImg: # optional eg ./images/loading.gif
  isSPA: false # optional
```

详情可见[hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

</details>

<details>
  <summary><b>全文搜索 (search)</b> (click to show)</summary>

  1.安装插件[hexo-generator-search](https://github.com/wzpan/hexo-generator-search)

  ```bash
  npm install hexo-generator-search --save
  ```

  2.项目配置文件`_config.yml`（非主题配置文件）下添加：

  ```yml
  search:
    path: search.xml
    field: post
    content: true
  ```

  详情可见[hexo-generator-search](https://github.com/wzpan/hexo-generator-search)

  3.主题配置文件`_config.yml`下找到`search`，修改`enable`为`true`:

  ```yml
    # 文章搜索
    search:
      enable: true
      placeholder: 搜索...
  ```

</details>

<details>
  <summary><b>文章置顶 (pinned posts)</b> (click to show)</summary>

  1.安装插件[hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)。

  ```bash
  npm uninstall hexo-generator-index --save
  npm install hexo-generator-index-pin-top --save
  ```

  2.项目配置文件`_config.yml`（非主题配置文件）下添加（如已有请忽略）：

  ```yml
  index_generator:
    path: ''
    per_page: 10
    order_by: -date
  ```

  详情可见[hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)。

  3.在所需置顶的文章 front-matter 头中添加`top: true`即可：

  ```markdown
  ---
  title: Hello World
  date: 2020-03-11 14:19:04
  top: true
  tags:
  - Welcome
  categories:
  - [Welcome，欢迎]
---
  ```

  4.重启服务后，可在主页文章标题看到置顶图标。

</details>

<details>
  <summary><b>国际化 (i18n)</b> (click to show)</summary>

  现在页面部分元素支持以不同语言显示，通过修改项目配置文件`_config.yml`（非主题配置文件）中的`language`:

  举几个例子：
  
  英文：

  ```yml
  language: en
  ```

  中文：

  ```yml
  language: zh-CN
  ```

  日文：

  ```yml
  language: ja
  ```

  默认值为`en`，可选项在主题下`languages`语言文件中查看，修改为对应文件名即可。
  
</details>

<details>
  <summary><b>主题配色切换</b> (click to show)</summary>

  拉取最新仓库，在配置文件`_config.oranges.yml`中添加或修改`colorSwitch`字段，确保`enable`为`true`:

  ```yml
  colorSwitch:
    enable: true
  ```

重新运行项目，页面右下角会出现切换主题模式的开关。

</details>

<details>
  <summary><b>文章分享</b> (click to show)</summary>

  拉取最新仓库，在配置文件`_config.oranges.yml`中添加或修改`postShare`字段，确保`enable`为`true`:

  ```yml
  postShare:
    enable: true

    twitter:
      enable: true
  ```

重新运行项目，文章页面右下角会出现分享的按钮。

</details>

<details>
  <summary><b>文章加密</b> (click to show)</summary>

  拉取最新仓库代码，安装[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt) 插件：

  ```bash
  npm install --save hexo-blog-encrypt
  ```

  在你要加密文章头部 Front-matter 中添加 password：

  ```yml
    ---
    title: Hello World!
    date: 2020-09-27 10:42:38
    tags:
      - World
      - Hello
    password: hello
    ---
  ```

  更多可查看[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt/blob/master/ReadMe.zh.md)

</details>

## To Do List

- [x] 自定义导航，可灵活配置自己想要的导航✔
- [x] toc 文章目录展示✔
  - [x] 优化超出屏幕部分滚动显示，并自动跟随文章内容滚动`[2020.5.24]`✔
- [x] Fancybox，支持文章内图片友好浏览✔
- [x] 回到页面顶部`[2020.5.4]`✔
- [x] RSS Feed`[2020.5.7]`✔
- [x] 文章页末增加 NEXT & PREV`[2020.5.10]`✔
- [x] 文章标题锚点`[2020.5.3]`✔
- [x] 评论系统`[2020.5.7]`✔
- [x] 分享功能`[2021.8.22]`✔
- [ ] 文章字数统计
- [ ] 页面访问量统计
- [x] Google 分析`[2020.5.8]`✔
- [x] 文章加密`[2022.3.23]`✔
- [x] 文章置顶`[2020.9.1]`✔
- [x] 全文搜索功能`[2020.8.23]`✔
- [x] 主题配色切换 `[2021.7.10]`✔
- [x] 页面平滑滚动`[2020.5.4]`✔
- [ ] 主题样式可自定义配置
- [x] 国际化（i18n），支持多语言`[2020.9.10]`✔

## End

有问题请提交 Issue，欢迎 Fork。

如果觉得主题还不错，请点击 Star 支持下。

🍻

## License

MIT
