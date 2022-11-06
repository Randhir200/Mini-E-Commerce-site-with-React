import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import AuthContextProvider from "./Context/AuthContext/AuthContextProvider";

function App() {
  return (
    <>
      <Navbar />
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
