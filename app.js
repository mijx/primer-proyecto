// ------------------  Obtención de información a partir del DOM y IDs ------------------------

// Atributos compartidos entre pacientes y personal médico
const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const cedula = document.getElementById("cedula")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

// atributos específicos del personal médico
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")

// atributos específicos de pacientes
const edad = document.getElementById("edad")

// ------------------ Llamado de los formularios ---------------------------------------------
const doctors_form = document.getElementById("doctors_form")
const patients_form = document.getElementById("patients_form")

// ------------------ Clase Persona ----------------------------------------------------------
class Persona{
    constructor(nombres, apellidos, cedula, telefono, especialidad){
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = cedula
        this.telefono = telefono
        this.especialidad = especialidad
    }
}

// ------------------- Funciones para las tablas de registros guardados ---------------
const show_doctors = function(){
    let doctors = []
    let table_body = document.getElementById("doctors-table-body")
    let local_doctors = localStorage.getItem("doctors")
    if(local_doctors){
        doctors = JSON.parse(local_doctors)
    }

    doctors.forEach(doctor => {
        let row = document.createElement("tr")

        let c_nombres = row.insertCell()
        let c_apellidos = row.insertCell()
        let c_cedula = row.insertCell()
        let c_consultorio = row.insertCell()
        let c_telefono = row.insertCell()
        let c_correo = row.insertCell()
        let c_especialidad = row.insertCell()
        let c_paciente = row.insertCell()

        c_nombres.textContent = doctor.nombres 
        c_apellidos.textContent = doctor.apellidos 
        c_cedula.textContent = doctor.cedula 
        c_consultorio.textContent = doctor.consultorio 
        c_telefono.textContent = doctor.telefono 
        c_correo.textContent = doctor.correo 
        c_especialidad.textContent = doctor.especialidad 
        c_paciente.textContent = "sin asignar" 

        table_body.appendChild(row)
    });
}

const show_patients = function(){
    let patients = []
    let table_body = document.getElementById("patients-table-body")
    let local_patients = localStorage.getItem("patients")
    if(local_patients){
        patients = JSON.parse(local_patients)
    }

    patients.forEach(patient => {
        let row = document.createElement("tr")

        let c_nombres = row.insertCell()
        let c_apellidos = row.insertCell()
        let c_cedula = row.insertCell()
        let c_edad = row.insertCell()
        let c_telefono = row.insertCell()
        let c_especialidad = row.insertCell()
        let c_medico = row.insertCell()

        c_nombres.textContent = patient.nombres 
        c_apellidos.textContent = patient.apellidos 
        c_cedula.textContent = patient.cedula 
        c_edad.textContent = patient.edad 
        c_telefono.textContent = patient.telefono 
        c_especialidad.textContent = patient.especialidad 
        c_medico.textContent = "sin asignar" 

        table_body.appendChild(row)
    });
}


if(window.location.href.endsWith("doctors_list.html")){
    show_doctors()
}
if(window.location.href.endsWith("patients_list.html")){
    show_patients()
}


//   ------------------- Guardar en Local Storage Registro de personal medico
if(window.location.href.endsWith("doctors_signin.html"))
{
doctors_form.addEventListener("submit", function(event){
    event.preventDefault()

    let v_nombres = nombres.value
    let v_apellidos = apellidos.value
    let v_cedula = cedula.value
    let v_consultorio = consultorio.value
    let v_telefono = telefono.value
    let v_correo = correo.value
    let v_especialidad = especialidad.value

    const doctor = new Persona(v_nombres,v_apellidos,v_cedula,v_telefono,v_especialidad)
    doctor.consultorio = v_consultorio
    doctor.correo = v_correo

    let doctors = []

    let local_doctors = localStorage.getItem("doctors")

    if(local_doctors){
        doctors = JSON.parse(local_doctors)
    }

    doctors.push(doctor)
    localStorage.setItem("doctors", JSON.stringify(doctors))

    alert("¡Personal medico registrado!")
})
}

//   ------------------- Guardar en Local Storage Registro de pacientes
if(window.location.href.endsWith("patients_signin.html"))
{
patients_form.addEventListener("submit", function(event){
    event.preventDefault()

    let v_nombres = nombres.value
    let v_apellidos = apellidos.value
    let v_cedula = cedula.value
    let v_edad = edad.value
    let v_telefono = telefono.value
    let v_especialidad = especialidad.value

    const patient = new Persona(v_nombres,v_apellidos,v_cedula,v_telefono,v_especialidad)
    patient.edad = v_edad

    let patients = []

    let local_patients = localStorage.getItem("patients")

    if(local_patients){
        patients = JSON.parse(local_patients)
    }

    patients.push(patient)
    localStorage.setItem("patients", JSON.stringify(patients))

    alert("¡Paciente registrado!")
})
}


