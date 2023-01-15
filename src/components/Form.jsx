const Form = ({name, mail, setName, setMail, handleSubmit}) => {

    const catchName=(e)=>{
        setName(e.target.value);
      }
    
    
      const catchMail=(e)=>{
        setMail(e.target.value.trim())
      }

  return (
    <form className="border p-4 m-5 w-50" onSubmit={handleSubmit}>
      <div className="mb-3">
        <h2>Ingreso de Colaboradores</h2>
      </div>
      <div>
        <label htmlFor="">Nombre Colaborador:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese Nombre y Apellido"
          onChange={catchName}
          value={name}
        />
        <label htmlFor="">Email Colaborador:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Ingrese E-mail"
          onChange={catchMail}
          value={mail.toLowerCase()}
        />
        <button type="submit" className="btn btn-success my-3">
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default Form
