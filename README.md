# Aplicación de Chat en Tiempo Real

Una aplicación de chat en tiempo real construida con React 19, Tailwind CSS, DaisyUI, React Router, Socket.io y Vite.

## Tabla de Contenidos

- [Acerca de](#acerca-de)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)

## Acerca de

Esta es una aplicación de chat en tiempo real que permite a los usuarios enviar y recibir mensajes de manera instantánea. Utiliza **Socket.io** para la comunicación en tiempo real y está construida con **React** 19 para el frontend. **Tailwind CSS** y **DaisyUI** se usan para el estilo, ofreciendo una interfaz de usuario atractiva y responsive. El proyecto usa **Vite** como herramienta de construcción para un desarrollo rápido y eficiente.

## Tecnologías

- **React 19**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Un framework CSS basado en utilidades para diseños personalizados.
- **DaisyUI**: Un complemento para Tailwind CSS que proporciona componentes de interfaz de usuario pre-diseñados.
- **React Router**: Una biblioteca para manejar rutas en aplicaciones React.
- **Socket.io**: Una biblioteca para aplicaciones web en tiempo real, que permite comunicación bidireccional entre el servidor y el cliente.
- **Vite**: Un entorno de desarrollo rápido para aplicaciones React, que permite una recarga instantánea y una experiencia de desarrollo optimizada.

## Instalación

Para comenzar con el proyecto, sigue estos pasos:

1. Clona el repositorio:

   `git clone https://github.com/Jhon-E/frontend_chat.git`

2. Navega al directorio del proyecto:

   `cd frontend_chat`

3. Instala las dependencias necesarias:

   `npm install`

4. Inicia el servidor de desarrollo utilizando Vite:

   `npm run dev`

   La aplicación estará disponible en `http://localhost:5173`.

## Uso

- **React Router**: Las rutas se definen en `src/App.js`. Puedes agregar nuevas páginas, como un perfil de usuario o configuración, en este archivo.
- **Socket.io**: La conexión de socket se establece en `src/socket.js`. Puedes ajustar eventos como `connect`, `disconnect`, `message`, etc.
- **Componentes de DaisyUI**: Usa los componentes de DaisyUI en toda la aplicación para una interfaz de usuario estilizada y responsive.
- **Vite**: Vite proporciona un entorno de desarrollo ultra rápido con recarga instantánea, mejorando la experiencia de desarrollo.

### Características

- **Mensajería en tiempo real**: Envía y recibe mensajes de manera instantánea.
- **Autenticación de usuarios**: (Opcional) Implementa el inicio de sesión y autenticación de usuarios.
- **UI responsive**: Tailwind CSS y DaisyUI aseguran que la aplicación de chat se vea bien en todos los dispositivos.
- **UI personalizable**: Personaliza fácilmente el aspecto de la aplicación utilizando clases de Tailwind CSS.
