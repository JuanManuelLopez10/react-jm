const Navbar = () => {
    return (
        <>
        <header id="header" class="container-fluid d-flex fixed-top justify-content-between animate__animated animate__fadeInDown">
        <div class="titulo"><h1>Motos Punta</h1></div>
        <div class="opciones">
            <a href="./MOTOS.html" class="opcionclase">MOTOS</a>
            <a href="./CASCOS.html" class="opcionclase">CASCOS</a>
            <a href="./INDUMENTARIA.html" class="opcionclase">INDUMENTARIA</a>
            <a href="./ACCESORIOS.html" class="opcionclase">ACCESORIOS</a></div>
        <div class="icono">
            <i class="bi bi-cart-check-fill"></i>
        </div>
    </header> 
    </>
   )
}

export default Navbar;
