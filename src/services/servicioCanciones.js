import { servicioObtenerToken } from "./servicioToken"


export async function servicioCancionesTop(){

     
    let token=await servicioObtenerToken()
    

    const URL="https://api.spotify.com/v1/artists/3LY2cnBt6jqLEdJco5NBE2/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }

    let respuesta=await fetch(URL,PETICION)

    let canciones=await respuesta.json()

    return canciones

}   