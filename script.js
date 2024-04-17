let ArrayProyectos = []
let ObjProyecto
{

}
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

    

    for(let i = 0; i<ArrayProyectos.length; i++)
    {
        titulo.innerHTML = ArrayProyectos[i].nombreProyecto;
        descripcion.innerHTML = ArrayProyectos[i].descripcionProyecto;


        contenedor.appendChild(titulo)
        contenedor.appendChild(descripcion)
    }
    

}

function CrearTarea() {
    const nombreTarea = document.getElementById("nuevaTarea").value;
    const proyectoSeleccionado = document.getElementById("Dropdown").value;

    const proyecto = ArrayProyectos.findIndex(proyecto => proyecto.nombreProyecto === proyectoSeleccionado);
    
    
    let ArrayTarea =  
    [
        nombre = proyectoSeleccionado
    ]
    
    console.log(ArrayProyectos[proyecto])

    ArrayProyectos[proyecto].ArrayTarea.push(ArrayTarea)

    let tituloTarea = document.createElement("p");
    tituloTarea.innerHTML = nombreTarea;
    
    let check = document.createElement("input")
    tituloTarea.style.display="inline";
    check.type = 'checkbox';



    check.addEventListener('change', function()
    {
        if(check.checked)
        {
            tituloTarea.style.textDecoration = "line-through";
        }
        else
        {
            tituloTarea.style.textDecoration = "none";
        }
        
    })
    contenedor.appendChild(check)
    contenedor.appendChild(tituloTarea);

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

