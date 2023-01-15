import { useState } from "react";

const Navbar = ({search, handleFilter}) => {



  return (
    <nav className="d-flex justify-content-between border border-light p-2 w-100">
      <h1>Listado Colaboradores</h1>
      <input
        type="search"
        className="form-control me-2 w-25"
        placeholder="Buscar por Nombre"
        onChange={handleFilter}
        value={search}
      />
    </nav>
  );
};

export default Navbar;
