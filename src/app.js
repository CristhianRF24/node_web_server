const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  
  })
}


//funcion agnostica autoconvocada
//Agnostica por que no tiene nombre
//Autoconvocada por que se llama a si misma
(async () => {
   main() 
})()