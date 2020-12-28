# Deploy to Netlify

https://vuepressbook.com/netlify.html

Create GitHub repo:
   vuepress-docs-4wao
 
Local:
   git init 
   git add .
   git commit -m "commit"
   git remote add origin https://github.com/bonhansaudoi/vuepress-docs-4wao.git
   git push -u origin master

Netlify:
   Create site: 4wao-vuepress-docs
   Build Command: npm run build
   Publish directory: src/.vuepress/dist 

Url:
   https://vuepress-docs-4wao.netlify.app/ 
   
Update:
   git add README.md
   git commit -m "update"
   git push -u origin master 

https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment