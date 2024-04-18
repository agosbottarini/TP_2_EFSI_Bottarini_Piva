let ArrayProyectos = []
let ObjProyecto
{

}
let contenedor;
function CrearProyecto()
{
    const nombreProyecto = document.getElementById("nuevoProyecto").value;
    const descripcionProyecto = document.getElementById("descripcion").value;


    ObjProyecto = 
    {
        nombreProyecto: nombreProyecto,
        descripcionProyecto: descripcionProyecto,
        ArrayTarea: []
    }


    ArrayProyectos.push(ObjProyecto)
    ListarArray()
    
    
    contenedor = document.querySelector(".Proyectos");
    
    

    let titulo = document.createElement("h1")
    let descripcion = document.createElement("p")

    titulo.style.display="inline";
    descripcion.style.paddingLeft="3vw"
    titulo.style.paddingTop="5vw"

    

    

    
    for(let i = 0; i < ArrayProyectos.length; i++)
{
    let proyectoContainer = document.createElement("div");
    proyectoContainer.id = `proyecto-${i}`;
    titulo.innerHTML = ArrayProyectos[i].nombreProyecto;
    descripcion.innerHTML = ArrayProyectos[i].descripcionProyecto;

    proyectoContainer.style.display = "flex"
    proyectoContainer.style.flexDirection = "column"

    proyectoContainer.appendChild(titulo);
    proyectoContainer.appendChild(descripcion);
    contenedor.appendChild(proyectoContainer);
}
    

}

function CrearTarea() {
    const nombreTarea = document.getElementById("nuevaTarea").value;
    const proyectoSeleccionado = document.getElementById("Dropdown").value;

    const proyectoIndex = ArrayProyectos.findIndex(proyecto => proyecto.nombreProyecto === proyectoSeleccionado);

    let nuevaTarea = {
        nombre: nombreTarea,
        estado: "pendiente"
    };

    ArrayProyectos[proyectoIndex].ArrayTarea.push(nuevaTarea);

    let tituloTarea = document.createElement("p");
    tituloTarea.innerHTML = nombreTarea;

    let check = document.createElement("input");
    check.type = 'checkbox';

    check.addEventListener('change', function() {
        if (check.checked) {
            tituloTarea.style.textDecoration = "line-through";
            nuevaTarea.estado = "completado";
            TacharProyecto(proyectoIndex);
        } else {
            tituloTarea.style.textDecoration = "none";
            nuevaTarea.estado = "pendiente";
            TacharProyecto(proyectoIndex);
        }
    });

    contenedor.appendChild(check);
    contenedor.appendChild(tituloTarea);
}

function TacharProyecto(proyectoIndex) {
    let proyectoElement = contenedor.querySelector(`#proyecto-${proyectoIndex}`);
    let todasCompletadas = ArrayProyectos[proyectoIndex].ArrayTarea.every(tarea => tarea.estado === "completado");

    if (todasCompletadas) {
        proyectoElement.style.textDecoration = "line-through";
        
    } else { 
        proyectoElement.style.textDecoration = "none";
    }
}



function ListarArray()
{

    var dropdown = document.getElementById("Dropdown")
    dropdown.innerHTML = ""


    ArrayProyectos.forEach(function(ObjProyecto)
    {
        const opcion = document.createElement('option')
        opcion.text = ObjProyecto.nombreProyecto;

        dropdown.add(opcion)
    })
}


