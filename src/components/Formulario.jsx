/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  // State del formulario
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");


  // State para mostrar una alerta
  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  // Mostrar la informacion del paciente al dar click en editar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } 
  },[paciente]); // Se ejecuta solamente cuando paciente cambia



  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
      return;
    } 

    setError(false)

    // Como pasamos la validacion, creamos un objeto con la información del paciente
    const objetoPaciente = {
      nombre,//: nombre,
      propietario,//: propietario,
      email,//: email,
      fecha,//: fecha,
      sintomas,//: sintomas,
    };

    // Editar o agregar la información del paciente
    // Si existe en el objeto paciente un id, significa que estamos editando
    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id; // Paciente es el que tiene el id
      const pacientesActualizados = pacientes.map( pacienteState =>  pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      
      setPacientes(pacientesActualizados);
      // Limpiar el State luego de actualizarlo
      setPaciente({})

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


    // Reiniciar el Formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
    
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label className="block font-bold mb-2 uppercase" htmlFor="nombre">
            Nombre Mascota
          </label>
          <input
            className="shadow border-2 rounded w-full p-2 focus:outline-gray-400 focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block font-bold mb-2 uppercase"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            className="shadow border-2 rounded w-full p-2 focus:outline-gray-400 focus:shadow-outline"
            id="propietario"
            type="text"
            placeholder="Nombre de la Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold mb-2 uppercase" htmlFor="email">
            Correo Electronico
          </label>
          <input
            className="shadow border-2 rounded w-full p-2 focus:outline-gray-400 focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Correo Electronico Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold mb-2 uppercase" htmlFor="alta">
            Alta
          </label>
          <input
            className="shadow border-2 rounded w-full p-2 focus:outline-gray-400 focus:shadow-outline"
            id="alta"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold mb-2 uppercase" htmlFor="email">
            Sintomas
          </label>
          <textarea
            placeholder="Describe los Sintomas"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400 focus:outline-gray-400 focus:shadow-outline"
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            cols="30"
            rows="10"
          />
        </div>

        <input
          type="submit"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
          className="p-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-800 transition duration-300 w-full uppercase cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Formulario;
