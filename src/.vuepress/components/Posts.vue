<template>
   <div class="">
      <router-link
          v-for="post in $page.frontmatter.posts"
         :key="post"
         :to="{ path: `/${$page.frontmatter.dir}/${post}`}"
      >
         <div class="post">
            {{ post }} 
         </div>
      </router-link>
   </div>  
</template>

<style lang="stylus">
 
</style> 