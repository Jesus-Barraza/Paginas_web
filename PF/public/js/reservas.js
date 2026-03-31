// Referencias a elementos
const btnBuscar = document.getElementById("btnBuscar");
const searchGrupo = document.getElementById("searchGrupo");
const reservasBody = document.getElementById("reservas-body");

const btnAgregar = document.getElementById("btnAgregar");
const btnActualizar = document.getElementById("btnActualizar");
const btnEliminar = document.getElementById("btnEliminar");

// Popups
const popupAgregar = document.getElementById("popup-agregar");
const popupActualizar = document.getElementById("popup-actualizar");
const popupEliminar = document.getElementById("popup-eliminar");

// Botones de cerrar
const closeAgregar = document.getElementById("closeAgregar");
const closeUpdate = document.getElementById("closeUpdate");
const closeDelete = document.getElementById("closeDelete");

// Botones de enviar
const submitReserva = document.getElementById("submitReserva");
const submitUpdate = document.getElementById("submitUpdate");
const submitDelete = document.getElementById("submitDelete");

// Popup de mensajes
const popupMessage = document.getElementById("popup-message");
const closeMessage = document.getElementById("closeMessage");

function showMessage(title, body) {
  document.getElementById("message-title").textContent = title;
  document.getElementById("message-body").textContent = body;
  popupMessage.style.display = "flex";
}
closeMessage.addEventListener("click", () => popupMessage.style.display = "none");

// -------------------
// Cargar todas reservas
async function cargarReservas() {
  try {
    const res = await fetch("/reserva");
    const data = await res.json();

    reservasBody.innerHTML = "";
    data.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${r.id}</td>
        <td>${r.nombre_grupo}</td>
        <td>${r.fecha}</td>
        <td>${r.habitacion}</td>
      `;
      tr.addEventListener("click", () => seleccionarReserva(r));
      reservasBody.appendChild(tr);
    });

    // deshabilitar botones si no hay selección
    btnActualizar.disabled = true;
    btnEliminar.disabled = true;
  } catch (err) {
    console.error(err);
    showMessage("Error", "No se pudieron cargar las reservas");
  }
}

// -------------------
// Buscar por nombre de grupo
btnBuscar.addEventListener("click", async () => {
  const nombre = searchGrupo.value.trim();
  if (!nombre) return cargarReservas();

  try {
    const res = await fetch(`/reserva/${nombre}`);
    const data = await res.json();

    reservasBody.innerHTML = "";
    data.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${r.id}</td>
        <td>${r.nombre_grupo}</td>
        <td>${r.fecha}</td>
        <td>${r.habitacion}</td>
      `;
      tr.addEventListener("click", () => seleccionarReserva(r));
      reservasBody.appendChild(tr);
    });

    btnActualizar.disabled = true;
    btnEliminar.disabled = true;
  } catch (err) {
    console.error(err);
    showMessage("Error", "No se pudo realizar la búsqueda");
  }
});

// -------------------
function seleccionarReserva(reserva) {
  // quitar selección previa
  document.querySelectorAll("#reservas-body tr").forEach(tr => tr.classList.remove("selected"));

  // remarcar la fila actual
  const filas = document.querySelectorAll("#reservas-body tr");
  filas.forEach(tr => {
    if (tr.children[0].textContent == reserva.id) {
      tr.classList.add("selected");
    }
  });

  // llenar campos de actualización
  document.getElementById("update_id").value = reserva.id;
  document.getElementById("update_nombre").value = reserva.nombre_grupo;
  document.getElementById("update_fecha").value = reserva.fecha;
  document.getElementById("update_habitacion").value = reserva.habitacion;

  // llenar id para eliminar
  document.getElementById("delete_id").value = reserva.id;

  // habilitar botones
  btnActualizar.disabled = false;
  btnEliminar.disabled = false;
}


// -------------------
// Agregar reserva
btnAgregar.addEventListener("click", () => popupAgregar.style.display = "flex");
closeAgregar.addEventListener("click", () => popupAgregar.style.display = "none");

submitReserva.addEventListener("click", async () => {
  const nombre_grupo = document.getElementById("nombre_grupo").value;
  const fecha = document.getElementById("fecha").value;
  const habitacion = document.getElementById("habitacion").value;

  try {
    const res = await fetch("/reserva/agregar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre_grupo, fecha, habitacion })
    });
    const data = await res.text();
    showMessage("Reserva", data);
    popupAgregar.style.display = "none";
    cargarReservas();
  } catch (err) {
    console.error(err);
    showMessage("Error", "No se pudo guardar la reserva");
  }
});

// -------------------
// Actualizar reserva
btnActualizar.addEventListener("click", () => popupActualizar.style.display = "flex");
closeUpdate.addEventListener("click", () => popupActualizar.style.display = "none");

submitUpdate.addEventListener("click", async () => {
  const id = document.getElementById("update_id").value;
  const nombre_grupo = document.getElementById("update_nombre").value;
  const fecha = document.getElementById("update_fecha").value;
  const habitacion = document.getElementById("update_habitacion").value;

  try {
    const res = await fetch(`/reserva/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre_grupo, fecha, habitacion })
    });
    const data = await res.text();
    showMessage("Actualizar", data);
    popupActualizar.style.display = "none";
    cargarReservas();
  } catch (err) {
    console.error(err);
    showMessage("Error", "No se pudo actualizar la reserva");
  }
});

// -------------------
// Eliminar reserva
btnEliminar.addEventListener("click", () => popupEliminar.style.display = "flex");
closeDelete.addEventListener("click", () => popupEliminar.style.display = "none");

submitDelete.addEventListener("click", async () => {
  const id = document.getElementById("delete_id").value;
  try {
    const res = await fetch(`/reserva/${id}`, { method: "DELETE" });
    const data = await res.text();
    showMessage("Eliminar", data);
    popupEliminar.style.display = "none";
    cargarReservas();
  } catch (err) {
    console.error(err);
    showMessage("Error", "No se pudo eliminar la reserva");
  }
});

// -------------------
// Cargar reservas al inicio
cargarReservas();

// Botón de cerrar sesión
const btnLogout = document.getElementById("logout");
if (btnLogout) {
  btnLogout.addEventListener("click", async () => {
    try {
      const res = await fetch("/logout");
      const data = await res.text();
      alert(data);
      // Redirige al menú de inicio
      window.location.href = "/inicio.html"; 
    } catch (err) {
      console.error(err);
      alert("Error al cerrar sesión");
    }
  });
}