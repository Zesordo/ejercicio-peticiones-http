import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnChistesHtml, listaChistesHtml;

const crearBodyChistes = () => {

    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro chiste señorita</button>

        <ol class="mt-2 list-group">
            <li class="list-group-item">....</li>
        </ol>
        `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

}

const eventos = () => {

    btnChistesHtml = document.querySelector('button');
    listaChistesHtml = document.querySelector('ol');

    btnChistesHtml.addEventListener('click', async() => {

        btnChistesHtml.disabled = true;
        dibujarChiste(await obtenerChiste());
        //yo hice el de abajo pero no sé cuál es la diferencia jeje
        //obtenerChiste().then(dibujarChiste);
        btnChistesHtml.disabled = false;
        
    })

}


//Chiste {id, value}
const dibujarChiste = ({id, value}) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${id}</b> : ${value}`;
    olItem.classList.add('list-group-item');

    listaChistesHtml.append(olItem);
}



export const init = () => {
    crearBodyChistes();
    eventos();
}