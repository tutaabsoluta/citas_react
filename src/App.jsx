import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});



  useEffect( () => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) => {
    // Nos traemos los pacientes que tienen un id diferente al que seleccione eliminar
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-12">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes} // Pacientes es un arreglo de objetos
          setPacientes={setPacientes}
          paciente={paciente} // Paciente es un objeto
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
