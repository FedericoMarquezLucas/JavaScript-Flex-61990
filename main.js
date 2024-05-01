const catalogoMotosWeb = [
    { id: 0, marca: 'Harley Davidson', modelo: 'Softail Deluxe FLSTN', anio: 2011, condicion: 'Usada', cilincrada: 103, kilometraje: 55000, precio: 29900 },
    { id: 1, marca: 'Harley Davidson', modelo: 'Sportster Forty Eight', anio: 2013, condicion: 'Usada', cilincrada: 75, kilometraje: 20000, precio: 19900 },
    { id: 2, marca: 'Ducati', modelo: 'Multistrada V4', anio: 2024, condicion: 'Nueva', cilincrada: 1178, kilometraje: 0, precio: 40900 }
]

////////////////////////////////////////////////////////////////////////////////////////////////////

const numeroFormateado = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

////////////////////////////////////////////////////////////////////////////////////////////////////

const subirDatosMoto = (id, marca, modelo, anio, condicion, cilincrada, kilometraje, precio) => {

    let continuar = true

    while (continuar) {
        for (const moto of catalogoMotosWeb) {
            if (moto.id == id) {

                alert(`El ID ingresado '${id}' ya está en uso en el catálogo. Comience el proceso AGREGAR de nuevo`)
                continuar = false
                accionInteractiva()
                break

            } else {
                
                const moto = {
                    id: id,
                    marca: marca,
                    modelo: modelo,
                    anio: anio,
                    condicion: condicion,
                    cilincrada: cilincrada,
                    kilometraje: kilometraje,
                    precio: precio
                }
            
                catalogoMotosWeb.push(moto)
                verDatosMoto(id,'AGREGADA')
                continuar = false
                break
                
            }
        }
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////

const editarDatosMoto = id => {
    for (let i = 0; i < catalogoMotosWeb.length; i++) {
        if (catalogoMotosWeb[i].id === id) {

            let editarFlag = true

            while (editarFlag) {
             
                const editar = prompt('Ingrese el campo que desea editar:\n MARCA - MODELO - CONDICION - KILOMETRAJE - PRECIO').toUpperCase()

                switch (editar) {
                    case 'MARCA':
                        const marcaEditada = prompt('( EDITAR MOTO )\nIngrese la nueva MARCA de la moto:')
                        catalogoMotosWeb[i].marca = marcaEditada
                        verDatosMoto(id,'EDITADA')
                        break

                    case 'MODELO':
                        const modeloEditado = prompt('( EDITAR MOTO )\nIngrese el nuevo MODELO de la moto:')
                        catalogoMotosWeb[i].modelo = modeloEditado
                        verDatosMoto(id,'EDITADA')
                        break

                    case 'CONDICION':
                        const condicionEditada = prompt('( EDITAR MOTO )\nIngrese la nueva CONDICION de la moto:')
                        catalogoMotosWeb[i].condicion = condicionEditada
                        verDatosMoto(id,'EDITADA')
                        break

                    case 'KILOMETRAJE':
                        const kilometrajeEditado = parseInt(prompt('( EDITAR MOTO )\nIngrese el nuevo KILOMETRAJE de la moto:'))
                        catalogoMotosWeb[i].kilometraje = kilometrajeEditado
                        verDatosMoto(id,'EDITADA')
                        break

                    case 'PRECIO':
                        const precioEditado = parseFloat(prompt('( EDITAR MOTO )\nIngrese el nuevo PRECIO de la moto:'))
                        catalogoMotosWeb[i].precio = precioEditado
                        verDatosMoto(id,'EDITADA')
                        break
                
                    default:
                        alert('🚨 Acción ingresada NO VÁLIDA.')
                        break
                }

                editarFlag = false

            }

            break
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

const eliminarMoto = () => {

    let vesMotosEnCatalogo = confirm('¿Ver listado de motos en catálogo?')

    while (vesMotosEnCatalogo) {
        verListadoMotos()

        let motoEliminar = parseInt(prompt('( 🚨 ELIMINAR MOTO )\nIngrese el NÚMERO IDENTIFICADOR ( ID ) de la moto que desea eliminar:'), 10)

        for (let i = 0; i < catalogoMotosWeb.length; i++) {
            if (catalogoMotosWeb[i].id === motoEliminar) {
                catalogoMotosWeb.splice(i, 1)
                break
            }
        }

        alert(`✅ MOTO ID: ${motoEliminar} ELIMINADA CON ÉXITO!`)
        verListadoMotos()
        vesMotosEnCatalogo = false
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////

const verListadoMotos = () => {
    if (catalogoMotosWeb.length > 0) {
        for (let i = 0; i < catalogoMotosWeb.length; i++) {
            alert(`🛵 MOTO ${i+1}/${catalogoMotosWeb.length} en CATÁLOGO\nID: ${catalogoMotosWeb[i].id}\nMARCA: ${catalogoMotosWeb[i].marca}\nMODELO: ${catalogoMotosWeb[i].modelo}\nAÑO: ${catalogoMotosWeb[i].anio}\nCONDICIÓN: ${catalogoMotosWeb[i].condicion}\nCILINDRADA: ${catalogoMotosWeb[i].cilincrada} ci\nKILOMETRAJE: ${numeroFormateado(catalogoMotosWeb[i].kilometraje)} kms.\nPRECIO: U$S ${numeroFormateado(catalogoMotosWeb[i].precio)}\n`)
        }
    } else {
        alert('🚨 EL CATÁLOGO ESTÁ VACÍO 🚨')
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

const verDatosMoto = (id, accion) => {
    for (const moto of catalogoMotosWeb) {
        if (moto.id == id) {
            alert(`✅ MOTO ${accion} CON ÉXITO!\nID: ${moto.id}\nMARCA: ${moto.marca}\nMODELO: ${moto.modelo}\nAÑO: ${moto.anio}\nCONDICIÓN: ${moto.condicion}\nCILINDRADA: ${moto.cilincrada}ci\nKILOMETRAJE: ${numeroFormateado(moto.kilometraje)}kms.\nPRECIO: U$S ${numeroFormateado(moto.precio)}`)
            break
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

const accionInteractiva = () => {

    let realizarAccion = confirm('👋🏼 Bienvenido al Dashboard para gestionar el Catálogo de Motos.\n¿Desea continuar?')

    while (realizarAccion) {
        
        const accion = prompt('Ingrese la acción que desea realizar:\n AGREGAR - EDITAR - ELIMINAR - LISTAR').toUpperCase()

        switch (accion) {
            case 'AGREGAR':
                const idInput = parseInt(prompt('( AGREGAR MOTO )\nIngrese el NÚMERO IDENTIFICADOR ( ID ) de la moto:'))
                const marcaInput = prompt('( AGREGAR MOTO )\nIngrese la MARCA de la moto:')
                const modeloInput = prompt('( AGREGAR MOTO )\nIngrese el MODELO de la moto:')
                const anioInput = parseInt(prompt('( AGREGAR MOTO )\nIngrese el AÑO de la moto:'))
                const condicionInput = prompt('( AGREGAR MOTO )\nIngrese la CONDICIÓN ( Nueva / Usada ) de la moto:')
                const cilindradaInput = parseInt(prompt('( AGREGAR MOTO )\nIngrese la CILINDRADA de la moto:'))
                const kilometrajeInput = parseInt(prompt('( AGREGAR MOTO )\nIngrese el KILOMETRAJE de la moto:'))
                const precioInput = parseFloat(prompt('( AGREGAR MOTO )\nIngrese el PRECIO de la moto:'))
                subirDatosMoto(idInput, marcaInput, modeloInput, anioInput, condicionInput, cilindradaInput, kilometrajeInput, precioInput)
                break

            case 'EDITAR':
                const idMotoEditar = parseInt(prompt('( EDITAR MOTO )\nIngrese el NÚMERO IDENTIFICADOR ( ID ) de la moto que desea editar:'), 10)
                editarDatosMoto(idMotoEditar)
                break

            case 'ELIMINAR':
                eliminarMoto()
                break

            case 'LISTAR':
                verListadoMotos()
                break
        
            default:
                alert('🚨 Acción ingresada NO VÁLIDA.')
        }

        realizarAccion = confirm('¿Desea realizar otra acción?')
    }

}

setTimeout(() => {
    accionInteractiva()
  }, 1000)

////////////////////////////////////////////////////////////////////////////////////////////////////