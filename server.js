const api = require('./api.codebreaker.js');


api.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});