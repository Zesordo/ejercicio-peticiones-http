const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl = 'https://reqres.in/api/users?page=2';


//Cloudinary
const cloudPreset = 'nodbfzhj';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/zegordo/upload';

const obtenerChiste = async() =>{

    try{

        const resp = await fetch(jokeUrl);

        if(!resp.ok) throw 'No se pudo realizar la petición';
        
        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };

    }catch(err){

        throw err;

    }
}

const obtenerUsuario = async() =>{

    try{

        const resp = await fetch(usuariosUrl);

        if(!resp.ok) throw 'No se pudo realizar la petición';
        
        const { data:usuarios } = await resp.json();

        return (usuarios);

    }catch(err){

        throw err;

    }
}


const subirImagen = async( archivoSubir ) => {

    const caca = new FormData();
    caca.append('upload_preset', cloudPreset );
    caca.append('file', archivoSubir );

    try {
        
        const resp = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: caca
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            console.log('error acá');

            throw await resp.json();
        }
        
    } catch (err) {

        throw err;

    }


}

export {
    obtenerChiste,
    obtenerUsuario,
    subirImagen
} 