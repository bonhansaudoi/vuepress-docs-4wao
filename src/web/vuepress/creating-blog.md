---
title: Vuepress Blog
description: Basic intro to vuepress blog
author: 4Wao
img:
date: 
type: Vuepress
---

# {{ $frontmatter.title }} 
 
## [plugin-blog](https://vuepress-plugin-blog.ulivz.com/)

## Quick start

## Manual
- Install

<code-group>

<code-block title="YARN" active>
```bash 
$ mkdir vuepress-blog && cd vuepress-blog
$ yarn init 
$ yarn add -D vuepress
$ yarn add @vuepress/plugin-blog -D
$ code .
$ mkdir blog && cd blog 
$ mkdir .vuepress
$ touch .vuepress/config.js
$ mkdir _posts
$ touch _posts/post-1.md
$ cd ../
```
</code-block>

<code-block title="NPM">
```bash
$ mkdir vuepress-blog && cd vuepress-blog
$ npm init
$ npm install -D vuepress
$ npm install -D @vuepress/plugin-blog
$ code .
$ mkdir blog && cd blog 
$ mkdir .vuepress
$ touch .vuepress/config.js
$ mkdir _posts
$ touch _posts/post-1.md
$ cd ../
```
</code-block>

</code-group>
 
- Config

```
//package.json
"scripts": {
   "dev": "vuepress dev blog",
   "build": "vuepress build blog"
} 
// .vuepress/config.js
plugins: [
   '@vuepress/blog',
   {
  
   },
],
```

- Run

``` 
$ npm run dev / $ npm run build
$ yarn dev / $ yarn build
```

## [Config](https://vuepress-plugin-blog.ulivz.com/config/#directories)

## [getting-started](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html)

## [Writing a blog theme](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#writing-a-blog-theme)
- [writing-a-theme](https://v1.vuepress.vuejs.org/theme/writing-a-theme.html)
- [plugin-theme](https://github.com/vuepress/vuepress-plugin-blog)
 
## [inheritance](https://v1.vuepress.vuejs.org/theme/inheritance.html#motivation)