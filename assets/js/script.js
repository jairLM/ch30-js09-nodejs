console.log('Sesion JS-09 npm y axios');

const apiFetch = document.getElementById('apiFetch');
const apiAxios = document.getElementById('apiAxios');

apiFetch.addEventListener('click', async()=>{

    const responseJSON =  await fetch('https://fakestoreapi.com/products');
    const response = await responseJSON.json();
    console.log(response);


});


//------------usando axios solicitud HTTP -----
apiAxios.addEventListener('click', async()=>{

    const response =  await axios.get('https://fakestoreapi.com/products');
    
    console.log(response);

});