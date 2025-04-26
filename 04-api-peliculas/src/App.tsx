import { Route, Routes, Navigate } from "react-router-dom";
import { Register, Login } from "./pages";
import { Layout } from "./components/Layout";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
};

export default App;
