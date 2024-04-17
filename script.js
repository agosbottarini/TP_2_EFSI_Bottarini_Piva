let ArrayProyectos = []
function CrearProyecto()
{
    const nombreProyecto = document.getElementById("nuevoProyecto").value;
    const descripcionProyecto = document.getElementById("descripcion").value;


    let ObjProyecto = 
    {
        nombreProyecto: nombreProyecto,
        descripcionProyecto: descripcionProyecto,
        ObjTarea: null
    }


    ArrayProyectos.push(ObjProyecto)

    var contenedor = document.querySelector(".Proyectos");

    let titulo = document.createElement("h1")
    let descripcion = document.createElement("p")
    let check = document.createElement("input")
    check.type = 'checkbox';
    titulo.style.display="inline";
    descripcion.style.paddingLeft="3vw"
    titulo.style.paddingTop="5vw"

    check.addEventListener('change', function()
    {
        if(check.checked)
        {
            titulo.style.textDecoration = "line-through";
        }
        else
        {
            titulo.style.textDecoration = "none";
        }
        
    })

    for(let i = 0; i<ArrayProyectos.length; i++)
    {
        titulo.innerHTML = ArrayProyectos[i].nombreProyecto;
        descripcion.innerHTML = ArrayProyectos[i].descripcionProyecto;

        contenedor.appendChild(check)
        contenedor.appendChild(titulo)
        contenedor.appendChild(descripcion)
    }
    
    return ArrayProyectos;
}

function CrearTarea()
{
    console.log(opcion)
    const nombreTarea = document.getElementById("nuevaTarea").value;


    let ObjTareas = 
    {
        nombreTarea: nombreTarea

    }

    ArrayProyectos.find((opcion) => opcion === ObjProyecto.nombreProyecto);
        
    
    console.log(ArrayProyectos);
    let tituloTarea = document.createElement("h1")


}

var opcion
function ListarArray()
{
    var dropdown = document.getElementById("Dropdown")
    dropdown.innerHTML = "";

    ArrayProyectos.forEach(function(ObjProyecto)
    {
        opcion = document.createElement("option")
        opcion.text = ObjProyecto.nombreProyecto;
        dropdown.add(opcion)
    })

    
}
