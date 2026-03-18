English | [简体中文](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README-zh.md)

# hexo-theme-oranges

> A simple hexo theme

[demo](https://hexo.theme.oranges.zcheng.site/)

## Installation

```bash
git submodule add https://github.com/zchengsite/hexo-theme-oranges.git themes/oranges
```

To update the theme in the future, just execute the `git pull` command in the theme root directory.

## Usage

Edit the `theme` field in the root `_config.yml`:

```yml
theme: oranges
```

Theme options can be configured in either of these places:

- `themes/oranges/_config.yml`
- `_config.oranges.yml` in the site root

If both exist, keep them in sync and prefer one source of truth.

## What This Theme Supports

This theme currently has first-class support for these non-post page types:

- `tags`
- `categories`
- `friends`
- `about`
- `presentations`
- `tools`

For a plain custom page that does not need a dedicated layout, omit `type` and let it render through the default post/page container.

## Configuration

### Language

The theme ships with these built-in language files:

- `default.yml`
- `zh-CN.yml`
- `zh-TW.yml`
- `zh-cn.yml`
- `zh-tw.yml`

If your site uses `language: zh-cn` or `language: zh-tw`, the lowercase aliases are supported directly.

### Pages

<details>
  <summary><b>tags page</b> (click to show)</summary>

  To add `tags page`:

  ```bash
  hexo new page tags
  ```

  Generate `tags` folder, edit the `index.md` file, make sure that `type` field is `tags`:

  ```markdown
  ---
  title: tags
  date: 2019-05-03 12:03:35
  type: "tags"
  ---
  ```

  ```yml
  navbar:
    -
      name: tags
      enable: true
      path: /tags/
  ```

</details>

<details>
  <summary><b>categories page</b> (click to show)</summary>

  To add `categories page`:

  ```bash
  hexo new page categories
  ```

  Generate `categories` folder, edit the `index.md` file, make sure that `type` field is `categories`:

  ```markdown
  ---
  title: categories
  date: 2019-05-03 12:03:35
  type: "categories"
  ---
  ```

  ```yml
  navbar:
    -
      name: categories
      enable: true
      path: /categories/
  ```

</details>

<details>
  <summary><b>friends page</b> (click to show)</summary>

  To add `friends page`:

  ```bash
  hexo new page friends
  ```

  Generate `friends` folder, edit the `index.md` file, make sure that `type` field is `friends`:

  ```markdown
  ---
  title: friends
  date: 2019-05-03 12:03:35
  type: "friends"
  ---
  ```

  ```yml
  navbar:
    -
      name: friends
      enable: true
      path: /friends/
  ```

</details>

<details>
  <summary><b>about page</b> (click to show)</summary>

  To add `about page`:

  ```bash
  hexo new page about
  ```

  Generate `about` folder, edit the `index.md` file, make sure that `type` field is `about`:

  ```markdown
  ---
  title: about
  date: 2019-05-03 12:03:35
  type: "about"
  ---
  ```

  ```yml
  navbar:
    -
      name: about
      enable: true
      path: /about/
  ```

</details>

<details>
  <summary><b>presentations page</b> (click to show)</summary>

  To add `presentations page`:

  ```bash
  hexo new page presentations
  ```

  Edit `source/presentations/index.md`:

  ```markdown
  ---
  title: presentations
  date: 2026-03-18 12:00:00
  type: "presentations"
  ---
  ```

  ```yml
  navbar:
    -
      name: Presentations
      enable: true
      path: /presentations/
  ```

</details>

<details>
  <summary><b>tools page</b> (click to show)</summary>

  To add `tools page`:

  ```bash
  hexo new page tools
  ```

  Edit `source/tools/index.md`:

  ```markdown
  ---
  title: tools
  date: 2026-03-18 12:00:00
  type: "tools"
  ---
  ```

  ```yml
  navbar:
    -
      name: Tools
      enable: true
      path: /tools/
  ```

</details>

<details>
  <summary><b>plain custom page</b> (click to show)</summary>

  If you just need a normal standalone page, do not set `type`:

  ```bash
  hexo new page links
  ```

  ```markdown
  ---
  title: links
  date: 2026-03-18 12:00:00
  ---
  ```

  This keeps the page on the default page/post layout instead of a dedicated type-specific layout.

</details>

<details>
  <summary><b>catalog (contents)</b> (click to show)</summary>

  Enable `catalog` in the `_config.oranges.yml` file:

  ```yml
  catalog:
    enable: true
  ```

</details>

<details>
  <summary><b>RSS</b> (click to show)</summary>

  Install the `hexo-generator-feed` [plugin](https://github.com/hexojs/hexo-generator-feed):

  ```bash
  npm install hexo-generator-feed --save
  ```

  add or edit configuration in your root `_config.yml`:

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

  Display the RSS button on the page(currently only display in footer is supported):

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
  <summary><b>Giscus</b> (click to show)</summary>

  This theme now supports Giscus as the only built-in comment system.

  Configure it in `themes/oranges/_config.yml` or `_config.oranges.yml`:

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
    lang: en
    loading: lazy
  ```

  The theme automatically synchronizes the Giscus theme with the light/dark color mode switch.

</details>

<details>
  <summary><b>Google Analytics</b> (click to show)</summary>

  First, view [Google Analytics](https://analytics.google.com) to get the `gtagkey`:

  Then, enable `gtag` in the `_config.oranges.yml` file:

  ```yml
  gtag:
    enable: true
    gtagkey: UA-xxxxxxx-x
  ```

</details>

<details>
  <summary><b>PREV & NEXT</b> (click to show)</summary>

  enable `prevnext` in the `_config.oranges.yml` file:

  ```yml
  prevnext:
    enable: true
  ```

</details>

## Breaking Changes

- `comments` configuration has been removed. Use `giscus` instead.
- Valine, Waline, Gitalk, and Disqus integration files were removed from the theme.
- `presentations` and `tools` are now dedicated page types instead of ad-hoc reuse of other layouts.
- Archive titles now use translated `archive_a` / `archive_b` strings instead of concatenating untranslated keys.

<details>
  <summary><b>lazy image loading</b> (click to show)</summary>

  Install the [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image) plugin:

  ```bash
  npm install hexo-lazyload-image --save
  ```

  add or edit configuration in your root `_config.yml`:

  ```yml
  lazyload:
    enable: true
    onlypost: false # optional
    loadingImg: # optional eg ./images/loading.gif
    isSPA: false # optional
  ```

  more [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

</details>

<details>
  <summary><b>search</b> (click to show)</summary>

  Install [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) plugin:

  ```bash
  npm install hexo-generator-search --save
  ```

  add or edit configuration in your root `_config.yml`:

  ```yml
  search:
    path: search.xml
    field: post
    content: true
  ```

  more [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)

  edit configuration in the `_config.oranges.yml`

  ```yml
    search:
      enable: true
      placeholder: 搜索...
  ```

</details>

<details>
  <summary><b>pinned posts</b> (click to show)</summary>

  Remove default `hexo-generator-index` and Install the [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top) plugin:

  ```bash
  npm uninstall hexo-generator-index --save
  npm install hexo-generator-index-pin-top --save
  ```

  add or edit configuration in your root `_config.yml`:

  ```yml
  index_generator:
    path: ''
    per_page: 10
    order_by: -date
  ```

  more [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)

  Add `top: true` to the top of the post you want

  ```markdown
    ---
    title: Hello World
    date: 2020-03-11 14:19:04
    top: true
    tags:
    - Welcome
    categories:
    - [Welcome, 欢迎]
    ---
  ```

</details>

<details>
  <summary><b>internationalization (i18n)</b> (click to show)</summary>

  You can use internationalization to present your site in different languages, add or edit configuration in your root `_config.yml`:

  Some examples:

  English:

  ```yml
  language: en
  ```

  Simplified Chinese:

  ```yml
  language: zh-CN
  ```

  Japanese:

  ```yml
  language: ja
  ```

  The default value is `en`，Optional in the 'languages' file under the theme。

</details>

<details>
  <summary><b>dark mode</b> (click to show)</summary>

  Pull up the latest repository, add or edit configuration in `_config.oranges.yml`:

  ```yml
  colorSwitch:
    enable: true
  ```

The toggle option appears in the bottom right corner of the page.

</details>

<details>
  <summary><b>share</b> (click to show)</summary>

  Pull up the latest repository, add or edit configuration in `_config.oranges.yml`:

  ```yml
  postShare:
    enable: true

    twitter:
      enable: true
  ```

The toggle option appears in the bottom right corner of the post page.

</details>

<details>
  <summary><b>post encryption</b> (click to show)</summary>

  install the [hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt) plugin:

  ```bash
  npm install --save hexo-blog-encrypt
  ```

  add or edit Front-matter in your post:

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

  more [hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt/blob/master/ReadMe.zh.md)

</details>

## To Do List

- [x] Custom navigation✔
- [x] post directories✔
  - [x] the directory follows the article scroll`[2020.5.24]`✔
- [x] Fancybox✔
- [x] back to top`[2020.5.4]`✔
- [x] RSS Feed`[2020.5.7]`✔
- [x] NEXT & PREV`[2020.5.10]`✔
- [x] H1 - h6 anchor`[2020.5.3]`✔
- [x] comments`[2020.5.7]`✔
- [x] share`[2021.8.22]`✔
- [ ] word count
- [ ] traffic statistics
- [x] Google Analytics`[2020.5.8]`✔
- [x] post encryption`[2022.3.23]`✔
- [x] pinned posts`[2020.9.1]`✔
- [x] search`[2020.8.23]`✔
- [x] dark mode `[2021.7.10]`✔
- [x] smooth scrolling`[2020.5.4]`✔
- [ ] theme styles are customizable
- [x] Internationalization (i18n), multilanguage support`[2020.9.10]`✔
- [x] code copy `[2022.5.10]`✔

## End

If you have any questions, please submit the Issue. Fork is welcome.

🍻

## License

MIT
