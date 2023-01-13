import { useState } from 'react'
import { BaseColaboradores } from './components/baseDatos'

const App=()=>{

  const[dataBase, setDataBase]=useState(BaseColaboradores)
  
return (
  <div className="container-fluid m-2">
    <nav className="d-flex justify-content-between border border-light p-2">
      <h1>Listado Colaboradores</h1>
      <input
        type="search"
        className="form-control me-2 w-25"
        placeholder="Buscar por Nombre"
      />
    </nav>

    {/* <form className='border p-4 m-5'>
      <div className='mb-3'>
        <h2>Ingreso de Colaboradores</h2>
      </div>
      <div>
        <label htmlFor="">Nombre Colaborador:</label>
        <input type="text" className='form-control' placeholder='Ingrese Nombre'/>
        <label htmlFor="">Apellido Colaborador:</label>
        <input type="text" className='form-control' placeholder='Ingrese Apellido'/>
        <label htmlFor="">Email Colaborador:</label>
        <input type="email" className='form-control' placeholder='Ingrese E-mail'/>
        <button type="submit" className='btn btn-success my-3'>Ingresar</button>
      </div>
    </form> */}

    <section className="d-flex flex-column align-items-center">
      <h2 className="m-4">Base Datos Colaboradores</h2>

      <table className="table table-hover table-striped table-dark text-center w-75">
        <thead className="">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {dataBase.map((item) => (
            <tr key={item.id}>
              {" "}
              <td></td>
              <td>Matias</td>
              <td>Cuadros</td>
              <td>mcuadrose@gmail.com</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </div>
);
}


export default App
