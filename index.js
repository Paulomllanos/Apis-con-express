const express = require('express')
const router = require('./routes/ProductRoute')

require('dotenv').config()

const app = express()

//* me permite que mi app entienda lo que le envio en el body
app.use(express.json())

//* se le da 2 parametros , la ruta en la que quiero aplicarle, y el router
app.use('/api', router)

//* utilizamos un middleware = algo que se hace antes (funcion que se realiza antes de que suceda algo)




app.listen(5000, () => console.log('Servidor conectado en puerto: 5000'))
