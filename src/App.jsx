import { ClientJS } from "clientjs";
import { Route, Routes } from "react-router";
import ViewOnDesktop from "./components/ViewOnDesktop";
import Home from "./pages/Home";

const App = () => {
  const client = new ClientJS();
  const isMobile = client.isMobile();
  return (
    <>
      {!isMobile ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <ViewOnDesktop />
      )}
    </>
  );
};

export default App;
