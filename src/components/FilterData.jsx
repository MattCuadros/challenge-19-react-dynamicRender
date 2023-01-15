const FilterData=({filtered})=>{
    return(
        <div className='d-flex flex-column align-items-center w-100'><h2>Tabla Filtrada</h2>
    <table className='text-center w-75 table table-striped text-dark table-success'>
      <thead>
      <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>E-mail</th>
          </tr>
      </thead>
      <tbody>
        {filtered.map((item, index)=>(<tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.nombre}</td>
          <td>{item.correo}</td>
        </tr>)
          
        )}
      </tbody>
    </table></div>
    )
}

export default FilterData