import { useActionState, use } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

sessionStorage.clear();

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = use(AuthContext);

  if (!setUser) {
    throw new Error("El contexto auth debe consumirse dentro de un provider.");
  }

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const nombre = formData.get("name");
      const pass = formData.get("pass");

      const user = { nombre, pass };

      try {
        if (!nombre || !pass) {
          throw new Error("Todos los campos son obligatorios");
        }

        const res = await fetch("http://localhost:8000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (!res.ok) {
          const errorData = await res.json();
          sessionStorage.clear();
          setUser("");
          throw new Error(errorData.message || "Error en la solicitud");
        } else {
          const user = await res.json();
          setUser(user);
          sessionStorage.setItem("user", JSON.stringify(user));
          navigate("/chat");
        }
        return null;
      } catch (err) {
        console.log(err);
        return err.message;
      }
    },
    null
  );

  return (
    <main className="flex items-center justify-evenly h-dvh">
      <form action={submitAction} className="flex flex-col w-1/4 gap-7">
        <h1 className="font-bold text-2xl text-center">Registrarse</h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="name"
            placeholder="Nombre"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            name="pass"
            autoComplete="false"
            placeholder="********"
          />
        </label>
        {error ? <p className="text-error text-center">{error}</p> : null}
        {isPending ? (
          <button className="btn" disabled={isPending}>
            <span className="loading loading-spinner"></span>
            loading
          </button>
        ) : (
          <button className="btn" disabled={isPending}>
            Registrarse
          </button>
        )}
      </form>
      <h1 className="text-6xl text-wrap font-bold">
        <span className=" text-secondary">Chat</span>
        <br />
        En
        <span className=" text-primary">Tiempo</span>
        <br />
        Real
      </h1>
    </main>
  );
};

export default Signup;
