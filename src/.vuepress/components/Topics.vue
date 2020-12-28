<template>
   <div class="flex-container">
      <router-link
          v-for="tag in $page.frontmatter.tags"
         :key="tag"
         :to="{ path: `/${tag}`}"
      >
         <div class="tag">
            {{tag}}
         </div>
      </router-link>
   </div>  
</template>

<style lang="stylus">
 
</style> 