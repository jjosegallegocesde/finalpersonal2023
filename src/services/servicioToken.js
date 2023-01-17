export async function servicioObtenerToken(){

    const grant_type="grant_type=client_credentials"
    const client_secret="client_secret=ac641808dc9849a3bf5ec86de7ebc241"
    const client_id="client_id=bb83f0687cef4648a662d5ab1d7efb21"

    let url="https://accounts.spotify.com/api/token"

    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:grant_type+"&"+client_secret+"&"+client_id
    }

    let respuesta=await fetch(url,peticion)

    let token=await respuesta.json()

    return(token.token_type+" "+token.access_token)


}


