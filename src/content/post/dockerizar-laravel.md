---
layout: ../../layouts/post.astro
title: Dockerizar Laravel
description: Aprovechando las ventajas que nos ofrece docker, veremos como deployar un proyecto laravel
dateFormatted: Julio, 2024
---

[![dockerizar-laravel](https://miro.medium.com/v2/resize:fit:888/1*M-HoF7qx8AlSu9lzO4JmUA.png)](https://miro.medium.com/v2/resize:fit:888/1*M-HoF7qx8AlSu9lzO4JmUA.png)

Laravel cuenta con un paquete llamado **Sail** que facilita la configuración y gestión de entornos utilizando Docker🐋. Que incluyen todo lo necesario para ejecutar aplicaciones Laravel, como un servidor web, un servidor de bases de datos y otras herramientas comunes.

Ventajas principales de Sail:

1. **Entorno de Desarrollo Consistente:** Con Sail, todos los miembros del equipo de desarrollo pueden trabajar en el mismo entorno de desarrollo, lo que ayuda a evitar problemas de configuración y discrepancias entre los diferentes entornos de desarrollo.
2. **Configuración Automatizada:** Sail automatiza la configuración de Docker y proporciona un conjunto de contenedores preconfigurados que incluyen servicios comunes como Nginx, MySQL, Redis, etc. Esto significa que no tienes que preocuparte por configurar estos servicios manualmente.
3. **Gestión Simplificada:** Sail simplifica la gestión de contenedores Docker al proporcionar comandos de terminal simples y familiares para iniciar, detener, reiniciar y administrar los contenedores asociados con tu aplicación Laravel.

## ¿Cómo empezamos?

Empezaremos instalando las dependencias de sail en el proyecto, con composer
```bash
composer require laravel/sail --dev
```

Seguiremos con su instalación
```bash
php artisan sail:install
```

Y ya estaría 🎉🎉, tendríamos sail en nuestro proyecto 🚀. Si te fijas ha creado un `docker-compose.yaml` en la raíz de nuestro proyecto, ahí podremos modificar toda la configuración del contenedor y su entorno.

Con el siguiente comando podremos levantar el contenedor
```bash
./vendor/bin/sail up
```

Te dejo la documentación oficial de Laravel, para que le heches un vistazo 🕵️‍♀️

https://laravel.com/docs/10.x/sail

