
const form = document.getElementById("formulario")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name")
    const lastnameInput = document.getElementById("lastname")
    const documentInput = document.getElementById("document")
    /**
     * trim
     * "     "
     * ""
     * "   cadena de pruena     "
     * "cadena de pruena"
     */
    if (!nameInput.value.trim().length) {
        Swal.fire({
            icon: "error",
            title: "Campo invalido",
            text: "Debe Ingresar el valor del nombre",
        }).then(() => {
            nameInput.focus()
        });
        return;
    }

    if (!lastnameInput.value.trim().length) {
        Swal.fire({
            icon: "error",
            title: "Campo invalido",
            text: "Debe Ingresar el valor del apellido",
        }).then(() => {
            lastnameInput.focus()
        });
        return;
    }

    if (!documentInput.value.trim().length) {
        Swal.fire({
            icon: "error",
            title: "Campo invalido",
            text: "Debe Ingresar el valor del documento",
        }).then(() => {
            documentInput.focus()
        });
        return;
    }

    const user = {
        name: nameInput.value.trim(),
        lastname: lastnameInput.value.trim(),
        document: documentInput.value.trim()
    }

    const userJson = JSON.stringify(user)
    localStorage.setItem("user", userJson)

    nameInput.value= ""
    lastnameInput.value= ""
    documentInput.value= ""

    cargarInfo(user)
})

const cargarInfo = (user)=>{
    const divResult = document.getElementById("info-user")

    divResult.className ="border p-3 rounded"
    divResult.innerHTML = `
    <h5>Informacion del usuario</h5>
        <div>
            <span class="fw-bolder"> Nombre: </label>
                <span class="fw-light"> ${user.name}</span>
        </div>
        <div>
            <span class="fw-bolder"> Apellido: </label>
                <span class="fw-light"> ${user.lastname}</span>
        </div>
        <div>
            <span class="fw-bolder"> Documento: </label>
                <span class="fw-light"> ${user.document}</span>
        </div>
        `
}

const userInfoJSON = localStorage.getItem("user")
if (userInfoJSON!==null) {
    const userInfo = JSON.parse(userInfoJSON)

    cargarInfo(userInfo)
}