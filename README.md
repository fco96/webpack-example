## Instrucciones de uso

Para levantar el servidor introduzca los siguientes comandos

1. Instalar dependencias
```
    npm install
```
2. Servir el servidor con
```
    npm run start
```

## Observaciones

En la configuración del webpack se establece que en `http://localhost:8080/` se va hostear el js generado. En el **index.html** se dice que se va a cargar el js desde `src="http://localhost:8080/app.js"`