import { useState } from "react";
import SectionBaseDatos from "./components/SectionBaseDatos";
import { BaseColaboradores } from "./components/baseDatos";
import FilterData from "./components/FilterData";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Swal from 'sweetalert2';

const App = () => {
  const [dataBase, setDataBase] = useState(BaseColaboradores);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [filtered, setFilter] = useState(null);
  const [search, setSearch] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || !isNaN(name) ) {
      Swal.fire(
        '¡El nombre es Incorrecto!',
        'Ingresaste un Número o el campo está vacío',
        'error'
      )
      return;
    }

    if (mail.trim() === ""){
      Swal.fire(
        '¡El E-mail es Incorrecto!',
        'El campo está vacío',
        'error'
      )
      return
    }

    setDataBase([...dataBase, { id: Date.now(), nombre: name, correo: mail }]);
    setName("");
    setMail("");
    Swal.fire(
      'Buen trabajo!',
      'Ingresaste un nuevo Colaborador!',
      'success'
    )
  };

  const handleFilter = (e) => {
    const filterArray = dataBase.filter((item) =>
      item.nombre.toLowerCase().includes(e.target.value)
    );
    setFilter(filterArray);
    setSearch(e.target.value);
  };

  return (
    <div className="container-fluid m-2 d-flex flex-column align-items-center">
      <Navbar search={search} handleFilter={handleFilter} />

      <Form
        name={name}
        mail={mail}
        setName={setName}
        setMail={setMail}
        handleSubmit={handleSubmit}
      />

      {filtered && search != "" ? <FilterData filtered={filtered} /> : null}

      <SectionBaseDatos dataBase={dataBase} />
    </div>
  );
};

export default App;
