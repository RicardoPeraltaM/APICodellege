module.exports = {
    PORT: process.PORT || 3000, //app en producción(servidor) tomará valor PORT. De manera local tomará 3000
    DB: process.env.DB || 'mongodb://localhost:27017/api-farm' //app en producción(servidor) tomará url de entorno. de otro modo tomará valor localhost
}