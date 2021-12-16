const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl).then( resp => {

//     resp.json().then(data => {
//         console.log(data.id);
//         console.log(data.value);
//     });
     //puedo hacer lo anterior con desestructuración:
     //-resp.json().then( ({id, value}) => {
     //-    console.log(id);
     //-    console.log(value);
     //-});

// });


//puedo encadenar promesas con .then
//esta es una manera más limpia de hacer lo anterior:
fetch ( jokeUrl )
    .then( resp => resp.json())
    .then( ({id, value}) =>{
        console.log(id);
        console.log(value);
    });