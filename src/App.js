import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import Counter from "./features/counter/Counter";
const App = () => {
  const [userName, setUserName] = useState("Ragu");
  return (
    <UserContext.Provider value={{ loggedInUSer: userName, setUserName }}>
      <div>
        <Counter />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
