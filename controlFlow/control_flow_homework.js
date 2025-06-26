{
    let userType = "inscrito";
    let userAccessMessage;

    switch (userType) {
        case "empleado":
            userAccessMessage = "tener acceso a los 'Servicios Dietéticos'";
            break;
        case "inscrito":
            userAccessMessage = "tener acceso a los 'Servicios Dietéticos' y a interacción uno a uno con un dietista";
            break;
        case "suscriptor":
            userAccessMessage = "acceso parcial para facilitar los 'Servicios Dietéticos' únicamente";
            break;
        default:
            userAccessMessage = "inscribirse o al menos suscribirse primero para poder acceder a esta instalación";
    }

    console.log("Usuario:", userType, "es elegible a:", userAccessMessage);
}