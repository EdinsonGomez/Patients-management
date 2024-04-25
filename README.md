
# Gestion de pacientes

Esta aplicación te ayuda con la gestión de los pacientes. Es un monorepo creado utilizando los workspace de [pnpm](https://pnpm.io/es/) y [turborepo](https://turbo.build/).

## Instalación

1. Clonar repositorio
2. Instalar todas las dependencias:
```
pnpm install
```

## Empezar

### Reto 1

Para inicar el proyecto correspondiente al reto 1, que tenía como objetivo crear un frontend simulando una base de datos local en archivos json, sigue estos pasos:

1. Cambia a la rama dev/local
```
git checkout dev/local
```
2. Instala las dependencias
```
pnpm install
```
3. Inicia el servidor
```
pnpm run dev
```
4. Abre el navegador apuntando al puerto [5173](http://localhost:5173/)


### Reto 2

Para iniciar el reto 2, que tenía como objetivo crear una api en Nodejs y conectar con el frontend del reto 1, sigue estos pasos:

1. Cambiar a la rama master
```
git checkout master
```
2. Instala las dependencias
```
pnpm install
```
3. Inicar el api y el client desde el directorio raiz
```
pnpm run dev
```
4. Abre el navegador apuntando al puerto [5173](http://localhost:5173/), puedes tambien probar la api haciendo peticiones http al puerto 8080.


### Reto 3

Para iniciar los test correspondientes al reto 3 en el directorio raiz ejecuta

```
pnpm run reto:test
```

Si deseas ejecutar el archivo algorithm.js del reto ejecuta desde el directorio raiz

```
pnpm run reto:start
```

