import { Route, Routes, Navigate } from "react-router-dom";
import { Register, Login, NotFound, Dashboard } from "./pages";
import { Layout } from "./components/Layout";
import { FC, PropsWithChildren } from "react";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtecterRouter>
              <Dashboard />
            </ProtecterRouter>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

const ProtecterRouter: FC<PropsWithChildren> = ({ children }) => {
  const userJson = localStorage.getItem("user");

  if (userJson === null) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default App;
