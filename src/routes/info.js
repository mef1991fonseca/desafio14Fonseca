import express from 'express'

const routerInfo = express.Router()

routerInfo.get("/", (req,res)=>{
    let argumentosEntrada = process.argv
    let pathEjecucion = process.execPath
    let sistemaOperativo = process.platform
    let processId = process.pid
    let nodeVersion = process.version
    let carpetaProyecto = process.cwd()
    let usoMemoria = process.memoryUsage();
    //const PORT = config.PORT

    res.json({
        //message: `Respuesta desde el puerto ${PORT} en el proceso ${process.pid}`,
        response: 
            argumentosEntrada, //- Argumentos de entrada 
            pathEjecucion, //- Path de ejecución
            processId, //- Process id
            sistemaOperativo, //- Nombre de la plataforma (sistema operativo)
            nodeVersion, //- Versión de node.js
            carpetaProyecto, //- Carpeta del proyecto
            usoMemoria//- Memoria total reservada (rss)
    })
})

export {routerInfo}