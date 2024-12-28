import { useState, useEffect } from "react";

const ListOfUsers = ({
  people,
  setTarget,
  setTargetId,
  setTargetName,
  targetName,
  messages,
}) => {
  const [notifications, setNotifications] = useState({}); // Estado para notificaciones

  useEffect(() => {
    const newNotifications = {};
    people.forEach((person) => {
      const hasNewMessages =
        messages.filter((m) => m.sourceName === person.nombre && !targetName)
          .length > 0;
      newNotifications[person.id_user] = hasNewMessages;
    });
    setNotifications(newNotifications);
  }, [messages, people]);

  const removeNotification = (id) => {
    setNotifications((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  return (
    <>
      {people?.length > 0 ? (
        <section className="flex flex-col w-full justify-center items-center">
          <ul
            key={1}
            role="list"
            className="menu bg-base-200 transition-all divide-y divide-primary w-60 h-min rounded-lg"
          >
            <h1 className="font-bold text-2xl text-center mb-2 mt-2">
              Usuarios
            </h1>
            {people.map((person) => (
              <li
                key={person.id}
                className="flex flex-col p-3 gap-1 active cursor-pointer select-none"
                onClick={() => {
                  setTarget(person.id_socket);
                  setTargetId(person.id_user);
                  setTargetName(person.nombre);
                  removeNotification(person.id_user); // Remueve la notificación al seleccionar
                }}
              >
                <div className="shrink-0 flex justify-between h-full w-full">
                  <div>
                    <p className="text-sm uppercase">{person.nombre}</p>
                  </div>
                  <div className="mt-1 flex items-center justify-center gap-x-1.5">
                    <p className="text-xs text-accent">Online</p>
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
                {notifications[person.id_user] ? (
                  <div
                    className="self-center bg-info hover:bg-info focus:bg-primary text-info-content py-1 px-2 h-min text-xs]"
                    onClick={() => removeNotification(person.id_user)}
                  >
                    Nuevos mensajes
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <h1 className="font-bold text-2xl text-center">
          No hay usuarios online
        </h1>
      )}
    </>
  );
};

export default ListOfUsers;
