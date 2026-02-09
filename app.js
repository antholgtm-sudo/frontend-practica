document.getElementById('formContacto').addEventListener('submit', async (e) => {
    e.preventDefault();
    const post= "http://localhost:3000";
    const datos = {
        nombre: document.getElementById('nombre').value,
        contacto: document.getElementById('contacto').value,
        mensaje: document.getElementById('mensaje').value
    };
    console.log(datos);

    try {
        const res = await fetch('http://localhost:3000/api/contacto', {
            method: ("post"),
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        if (res.ok) {
            alert("Guardado exitosamente");
        } else {
            alert("Error");
        };

    } catch (error) {
        console.log(`Tremendo error: ${error}`);
        throw (error);
    };
});