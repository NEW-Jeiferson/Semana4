const validarCedula = (cedula) => {
    const clean = cedula.replace(/[-\s]/g, '');
    if(!/^\d{11}$/.test(clean)) return false;

    const mult = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    let sum = 0;

    for(let i = 0; i < 10; i++) {
        let p = parseInt(clean[i]) * mult[i];
        if (p >= 10) p= Math.floor(p / 10) + (p % 10);
        sum += p;
    }

    const digEsp = (10 - (suma % 10)) % 10;
    return digEsp === parseInt(clean[10]);

}