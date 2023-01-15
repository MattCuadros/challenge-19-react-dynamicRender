import { useState } from "react";
import SectionBaseDatos from "./components/SectionBaseDatos";
import { BaseColaboradores } from "./components/baseDatos";
import FilterData from "./components/FilterData";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const App = () => {
  const [dataBase, setDataBase] = useState(BaseColaboradores);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [filtered, setFilter] = useState(null);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || !isNaN(name) ) {
      alert("Debe ingresar los datos");
      return;
    }

    if (mail.trim() === ""){
      alert ("Debe ingresar un email correcto")
      return
    }

    setDataBase([...dataBase, { id: Date.now(), nombre: name, correo: mail }]);
    setName("");
    setMail("");
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
