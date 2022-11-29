const Navbar = () => {
    return(
    <header id="header" className="container-fluid d-flex justify-content-between animate__animated animate__fadeInDown">
        <div className="col-2 col-lg-1 d-flex justify-content-center" id="divlogoheader">
            <a href="./index.html"><img className="col-10" src="./assets/logos/logo_motos_punta_favicon.png" alt="Motos Punta"></img></a>
        </div>
        <div className="col-6 d-flex justify-content-around align-items-center">
            <a href="./MOTOS.html" className="opcionclase">MOTOS</a>
            <a href="./CASCOS.html" className="opcionclase">CASCOS</a>
            <a href="./INDUMENTARIA.html" className="opcionclase">INDUMENTARIA</a>
            <a href="./ACCESORIOS.html" className="opcionclase">ACCESORIOS</a>
        </div>
        <div className="col-1">
            <i class="bi bi-cart"></i>
        </div>
    </header>
    )
}

export default Navbar;