import {lazy, Suspense} from 'react'
import { ClientJS } from "clientjs";
import { Route, Routes } from "react-router";
import ViewOnDesktop from "./components/ViewOnDesktop";

const LazyHome = lazy(() => import("./pages/Home"));
const LazyRequests = lazy(() => import("./pages/Requests"));
const LazyTransaction=lazy(()=>import("./pages/Transaction"))
const LazyHistory = lazy(() => import("./pages/History"));

const App = () => {
  const client = new ClientJS();
  const isMobile = client.isMobile();
  return (
    <>
      {!isMobile && window.innerWidth >= 1024 ? (
        <Suspense fallback={<h4>Loading Page</h4>}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/dashboard" element={<LazyHome />} />
            <Route path="/requests" element={<LazyRequests />} />
            <Route path="/transaction" element={<LazyTransaction />} />
            <Route path="/history" element={<LazyHistory/> } />

          </Routes>
        </Suspense>
      ) : (
        <ViewOnDesktop />
      )}
    </>
  );
};

export default App;
