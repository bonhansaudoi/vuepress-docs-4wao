---
title: Django
sidebar: auto
---
 
# Content

## Install Python:
     https://www.python.org/     

## Install Django on Windows
    + django/djangoenv/
        $ py -m pip install virtualenvwrapper-win
        $ mkvirtualenv djangoenv              
        $ py -m pip install Django   

        + Install project & apps:
            $ django-admin startproject zdj_bnsd_site
            $ cd zdj_bnsd_site 
                $ python manage.py startapp a_users
                $ python manage.py startapp b_layouts 
                $ python manage.py startapp c_blog
                $ pip install Pillow 
                $ pip install django-crispy-forms  
                $ pip install django-summernote 
                $ pip install social-auth-app-django
                         
                + Create structure & Config settings.py        
                + Create Custom User model.
                + Migrate & Create superuser:
                    $ python manage.py makemigrations 
                    $ python manage.py migrate
                    
                    $ python manage.py createsuperuser        

                    $ python manage.py runserver 
                        http://localhost:8000/
                        http://localhost:8000/admin
----------- 
## Install Django on Windows-mysql:       
    + install local server:
        https://laragon.org/        
    $ pip install d:\BNSD\django\mysqlclient-1.4.6-cp38-cp38-win32.whl    