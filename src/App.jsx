import {lazy, Suspense} from 'react'
import { ClientJS } from "clientjs";
import { Route, Routes } from "react-router";
import ViewOnDesktop from "./components/ViewOnDesktop";

const LazyHome = lazy(() => import("./pages/Home"));
const LazyRequests = lazy(() => import("./pages/Requests"));

const App = () => {
  const client = new ClientJS();
  const isMobile = client.isMobile();
  return (
    <>
      {!isMobile && window.innerWidth >= 1024 ? (
        <Suspense falllback={<h4>Loading Page</h4>}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/dashboard" element={<LazyHome />} />
            <Route path="/requests" element={<LazyRequests />} />
          </Routes>
        </Suspense>
      ) : (
        <ViewOnDesktop />
      )}
    </>
  );
};

export default App;
