import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import ChatContextProvider from "./context/ChatContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <AppRoutes />
      </ChatContextProvider>
    </AuthContextProvider>
  );
}

export default App;
