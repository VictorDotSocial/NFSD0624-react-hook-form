import React from "react";
import "./MyAdvancedForm.css";
import { useForm } from "react-hook-form";

const MyAdvancedForm = () => {
  const { register, handleSubmit, formState, watch, setValue, reset } =
    useForm();

  const onSubmitHandler = (formData) => {
    // Esta función se llama al enviarse el formulario
    setValue("formCode", "landing004");
    setTimeout(() => {
      console.log("FORMDATA", watch());
    }, 2000);
  };

  const showFormState = () => {
    console.log(formState);
  };

  const checkEmail = async (email) => {
    console.log("EMAIL", email);

    return true;
    // return "El email ya está registrado en el sistema";
    // const response = await fetch('http://localhost:3000/checkEmail', {
    //   method: 'POST',
    //   body: JSON.stringify(email)
    // })
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div>
      <h1>Formulario con React Hook Form</h1>
      <div>
        <p>{JSON.stringify(watch())}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "El campo nombre es OBLIGATORIO.",
              },
              minLength: {
                value: 2,
                message: "El nombre debe tener más de 2 caracteres",
              },
            })}
            placeholder="Nombre"
          />
          <br />
          {formState.errors.name && (
            <span className="error-text">{formState.errors.name.message}</span>
          )}
          <br />
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Debes introducir un email",
              },
              // validate: (value) => {
              //   if (value.length > 15) {
              //     return "El email no puede superar 15 caracteres";
              //   }
              //   return true;
              // },
              validate: {
                length: (value) => {
                  if (value.length > 15) {
                    return "El email no puede superar 15 caracteres";
                  }
                  return true;
                },
                exists: checkEmail,
              },
            })}
            placeholder="Email"
          />
          <br />
          {formState.errors.email && (
            <span>{formState.errors.email.message}</span>
          )}
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />
          <br />
          <button type="submit">Enviar</button>
          <button onClick={showFormState}>MOSTRAR FORM STATE</button>
          <button onClick={handleReset}>RESET</button>
        </form>
      </div>
    </div>
  );
};

export default MyAdvancedForm;
