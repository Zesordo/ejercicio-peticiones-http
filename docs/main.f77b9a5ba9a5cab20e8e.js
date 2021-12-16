(()=>{'use strict';const a=async(a)=>{const b=new FormData;b.append('upload_preset','nodbfzhj'),b.append('file',a);try{const a=await fetch('https://api.cloudinary.com/v1_1/zegordo/upload',{method:'POST',body:b});if(a.ok){const b=await a.json();return b.secure_url}throw console.log('error ac\xE1'),await a.json()}catch(a){throw a}};const b=document.body;let c,d;const e=()=>{const a=`
        <h1>Subir archivo</h1>
        <hr>
        <label>Selecciona una imagen:</label>
        <input type="file" accept="image/*"/>
        <br>
        <img id="foto" class="img-thumbnail" src="">
    `,e=document.createElement('div');e.innerHTML=a,b.append(e),c=document.querySelector('input'),d=document.querySelector('#foto')},f=()=>{c.addEventListener('change',(b)=>{const c=b.target.files[0];a(c).then((a)=>d.src=a)})};(()=>{e(),f()})()})();