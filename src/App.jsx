import { ClientJS } from "clientjs";
import { Route, Routes } from "react-router";
import ViewOnDesktop from "./components/ViewOnDesktop";
import Home from "./pages/Home";
import Requests from "./pages/Requests";

const App = () => {
  const client = new ClientJS();
  const isMobile = client.isMobile();
  return (
    <>
      {!isMobile && window.innerWidth >= 1024 ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      ) : (
        <ViewOnDesktop />
      )}
    </>
  );
};

export default App;
