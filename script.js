function CrearProyecto()
{
    const nombreProyecto = document.getElementById("nuevoProyecto").value;
    const descripcionProyecto = document.getElementById("descripcion").value;


    const ObjProyecto = 
    {
        nombreProyecto: nombreProyecto,
        descripcionProyecto: descripcionProyecto
    }

    let ArrayProyectos = []
    ArrayProyectos.push(ObjProyecto)


    let titulo = document.createElement("h1")
    let descripcion = document.createElement("p")


    for(let i = 0; i<ArrayProyectos.length; i++)
    {
        titulo.innerHTML = ArrayProyectos[i].nombreProyecto;
        descripcion.innerHTML = ArrayProyectos[i].descripcionProyecto;

        titulo.appendChild()


    }


}