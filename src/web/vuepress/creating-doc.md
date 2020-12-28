---
title: Vuepress Docs
description: Basic intro to vuepress
author: 4Wao
img:
date: 
type: Vuepress
---

# {{ $frontmatter.title }} 
 
## Install vuepress-docs
<code-group>

<code-block title="YARN" active>
```bash
$ yarn create vuepress-site vuepress-docs
$ cd vuepress-docs/docs
$ code .
$ yarn 
$ yarn add -D @vuepress/plugin-back-to-top
$ yarn dev
```
</code-block>

<code-block title="NPM">
```bash
$ npx create-vuepress-site vuepress-docs
$ cd vuepress-docs/docs
$ code .
$ npm install
$ npm install -D @vuepress/plugin-back-to-top
$ npm run dev / $ npm run build
```
</code-block>

</code-group>

## Main Structure
```
+ docs/
   + src/
      + .vuepress/
         + components/
         + style/
         + public/
         - config.js
         - enhanceApp.js
      - index.md
   - package.json 
``` 

## Create Content
```
+ components/
   + List/
      - Topics.vue
      - Test.vue  
   - PageBack.md

+ src/
   + test/
      - README.md
      - article-1.md
      - article-2.md
   - index.md
```

## Doc Content
- index.md
```
---
home: true
heroImage: https://s5.gifyu.com/images/tiger-logo.png
tagline: 
actionText: Quick Start →
actionLink: /test/
heroText: Welcome to 4Wao doc 
footer: Made by bonhansaudoi with ❤️❤️❤️❤️❤️❤️
---

<List-Topics /> 
```

- README.md
```
---
title: test
description:  
author: 
img:
date: 
type: topic
----

# Test page

## Introduction
 
```

- article.md
```
---
title: test-post-1
description:  
author: 
img:
date: 
type: test 
----

# Test post-1 page

## Content
```

- List/Topics.md
```vue
<template>
   <div class="container">
      <router-link v-for="page in pages" :to="page.path">
         <div class="topic-card">
            <img class="topic-image" src="https://v1.vuepress.vuejs.org/hero.png" />
            
            <div class="page-detail">
               <h3 class="page-title">{{ page.title }}</h3>
            </div>
         </div>        
      </router-link>
   </div>
</template>

<script>
export default {
   data() {
      return {
         pages: []
      }
   },
   mounted() {
      this.$site.pages.forEach(page => {
         if (page.frontmatter.type === 'topic') {
            this.pages.push(page)
         }
      })
   }
}
</script>
```
 
- PageBack.md
```vue
<template>
   <span class="back">
      <button @click="back">Back</button>
   </span>
</template>

<script>
export default {
   methods: {
      back () {
        this.$router.go(-1);
      },
   }
}
</script>

<style>

</style>
```

- index.style
```
.home .hero img
  max-width 450px!important

.container  
  display flex 
  flex-wrap wrap 
  width 100% 

.topic-card 
  width 120px 
  height 40px 
  margin 10px 
  border 1px solid #ccc 
  border-radius 3px 
  padding 10px 
  display flex 
  align-items center 
 
.topic-image 
  height 50% 
 
.article-card   
  width 600px  
  height 150px 
  margin 10px 
  border 1px solid #ccc 
  border-radius 3px 
  padding 10px 
  display flex 
  align-items center 
 
.article-image  
  height 100%  
 
.description  
  width 100% 
  display flex 
  justify-content center 
```

## Sample Content
- README.md
```
---
title: 
description:  
author: 
img:
date: 
type: topic
----
 
# {{ $frontmatter.title }}

<List-Sample/>
```

- post.md
```
---
title:  
description:  
author:  
img:
date: 
type: sample  
---

# {{ $frontmatter.title }}

## Table of Content
[[toc]]

## Content
```

- List/Sample.vue
```vue
<template>
   <div class="container">
      <router-link v-for="page in pages" :to="page.path">
      <div class="article-card">
         <img class="article-image" src="https://v1.vuepress.vuejs.org/hero.png" alt="#"/>
         
         <div class="page-detail">
            <h3 class="page-title">{{ page.title }}</h3>
            <div class="description">{{ page.frontmatter.description }}</div>
            <div class="page-author">Author: {{ page.frontmatter.author }}</div> 
         </div>
      </div>        
   </router-link> 
   </div>
</template>

<script>
export default {
   data() {
      return {
         pages: []
      }
   },
   mounted() {
      this.$site.pages.forEach(page => {
         if (page.frontmatter.type === 'sample') {
            this.pages.push(page)       
         }
      })
   }
}
</script>
```

## Config default Theme 
```js
module.exports = {
   title: '4Wao',

   head: [
      ['meta', { name: '', content: '' }],
      ['link', { rel: 'icon', href: '/public/img/tiger-icon.ico' }],
   ],

   themeConfig: {
      searchMaxSuggestions: 10,
      smoothScroll: true,
      logo: '/public/img/logo.png',

      nav: [
         {
         text: 'Test',
         link: '/test/',
         },
      ],
      
      sidebar: {
         '/test/': [
            {
               title: 'Test',
               collapsable: false,
               children: [
                  '',
                  'article-1',
                  'article-2',
               ]
            }
         ],
      }
   },
}
```

## Custome default theme 
```
Copy default-theme
   $ npx vuepress eject .

Edit
   - components/Navbar.vue
   - layout/404
```
 

## Install plugins
- [back-to-top](https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html#install)

## Deploy
- [Firebase](https://vuepress.vuejs.org/guide/deploy.html#google-firebase)
   -  Install local [Firebas tools](https://www.npmjs.com/package/firebase-tools)
   -  Create [Firebase project](https://firebase.google.com/docs/web/setup?authuser=0)
   -  Create firebase.json and .firebaserc at root
   ```json
   //firebase.json
   {
      "hosting": {
         "public": "./docs/.vuepress/dist",
         "ignore": []
      }
   }
   //.firebaserc
   {
      "projects": {
         "default": "Project ID"
      }
   }
   ```
   - yarn build
   - firebase deploy
   - Hosting URL: https://bonhansaudoi-196413.web.app
    
- [Netlify](https://www.netlify.com/) 