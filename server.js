const api = require('./api.codebreaker.js');


const PORT = process.env.PORT || 3000;

api.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});