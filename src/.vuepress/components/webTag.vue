<template>
   <div class="flex-container">
      <router-link
          v-for="tag in $page.frontmatter.tags"
         :key="tag"
         :to="{ path: `/web/${tag}`}"
      >
         <div class="tag">
            {{tag}}
         </div>
      </router-link>
   </div>  
</template>

<style lang="stylus" scoped>
 
.tag
  background-color blue
   
</style>
