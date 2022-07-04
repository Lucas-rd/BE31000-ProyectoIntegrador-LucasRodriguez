import fs from 'fs'

const getProductsService = async (req, res) => {
    try {
        const productsString = await fs.promises.readFile('../BE31000-ProyectoIntegrador-LucasRodriguez/src/data/productos.txt', "utf-8")
        const  productsArray = await JSON.parse(productsString)

        return productsArray
    } catch (error) {
        console.log("El error de lectura de archivo fue: ", error)
    }
}

const postProductsService = async (req, res) => {
    try {
        await fs.promises.writeFile('../BE31000-ProyectoIntegrador-LucasRodriguez/src/data/productos.txt', req)
    } catch (error) {
        console.log(error)
    }
}

export { getProductsService, postProductsService }