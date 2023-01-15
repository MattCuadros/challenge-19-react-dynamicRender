const SectionBaseDatos = ({dataBase}) => {
  return (
    <section className="d-flex flex-column align-items-center w-100">
      <h2 className="m-4">Base Datos Colaboradores</h2>

      <table className="table table-hover table-striped table-dark text-center w-75">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Nombre</th>

            <th>E-mail</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {dataBase.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SectionBaseDatos;
