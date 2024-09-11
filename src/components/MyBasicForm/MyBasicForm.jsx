import { useState } from "react";

const MyBasicForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("EVENT", formState);
  };

  return (
    <div>
      <h1>Mi Formulario Básico con React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Nombre:</span>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MyBasicForm;
