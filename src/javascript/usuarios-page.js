import { obtenerUsuario } from "./http-provider";


const body  = document.body;

let tbodyHtml;
let contador = 0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Avatar</th>
                <th scope="col">Nombre</th>
                <th scope="col">e-mail</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tbodyHtml = document.querySelector('tbody');


}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = async( { email, avatar:urlAvatar, first_name:primerNombre, last_name:segundoNombre } ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    contador++;
    const html = `
        <td scope="col"> ${contador} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${urlAvatar}">
        </td>
        <td scope="col"> ${primerNombre} ${segundoNombre} </td>
        <td scope="col"> ${email} </td>
        
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbodyHtml.appendChild(tr);


}


export const init = async() => {

    crearHtml();
    
    (await obtenerUsuario()).forEach(crearFilaUsuario);

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

