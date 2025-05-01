/* Pagina base escogida:
AMAZON
*/ 
console.log('HOLA QUE HACE');
console.log(" ");

// Variables
var NombreUsuario = "Mateo Moran"

let ArticuloDisponible = true
if (ArticuloDisponible = true) {
    ArticuloDisponible = "'Disponible'"
}else{
    ArticuloDisponible = "'No disponible'"
}

let PrecioArticulo = 69.99

console.log(`Estimado ${NombreUsuario}, actualmente el estado del articulo es: ${ArticuloDisponible} y tiene un precio de $${PrecioArticulo} dolares.`);
console.log(" ");


// Strings
let NombreArticulo = "GameSir Tarantula Pro"

let CarAriculo = "Compatibilidad con el controlador de juegos de PC multiplataforma: funciona con dispositivos PC, Switch, iOS y Android. Conectividad de tres modos - Bluetooth, 2.4G Dongle inalámbrico y conexión por cable (esta versión NO incluye una base de carga)"

let plataforma = "iOS, Windows"

console.log(`Plataformas disponibles ${plataforma}. Las caracteristicas de el ${NombreArticulo.replace('iOS','Android')} son: ${CarAriculo.slice(0,60)+"...."}`);



// Numeros
let Cupon = "15";
let Cantidad = 1;
let Descuento = PrecioArticulo * (parseFloat(Cupon) / 100);

let PrecioCupon = (PrecioArticulo - Descuento) * Cantidad;
PrecioCupon = Math.round(PrecioCupon * 100) / 100;

console.log(`Precio final del Articulo con cupón: ${PrecioCupon}`);
console.log(" ");


// Articulo
console.log(" ");
let Articulo = {
    marca: "Gamesir",
    PaisOrigen: "China",
    conectividad: "Wireless"
};

console.log("Sobre el Articulo:")
console.log(Articulo)

