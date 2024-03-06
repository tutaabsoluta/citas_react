// eslint-disable-next-line react/prop-types
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  // eslint-disable-next-line react/prop-types
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  // eslint-disable-next-line react/prop-types
  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')
    if (respuesta) {
      eliminarPaciente(id)
    }
  }


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="md:flex justify-between">
        <button 
        className="bg-indigo-600 py-2 px-10 rounded-md hover:bg-indigo-700 text-white font-bold uppercase w-full md:w-auto mb-4 md:mb-0"
        type="button"
        onClick={() => setPaciente(paciente)} 
        >
          Editar
        </button>

        <button 
        onClick={handleEliminar} 
        className="bg-red-600 py-2 px-10 rounded-md hover:bg-red-700 text-white font-bold uppercase w-full md:w-auto"
        type="button">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
