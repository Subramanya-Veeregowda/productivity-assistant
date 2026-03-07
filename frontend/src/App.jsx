import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Focus from "./pages/Focus";
import Settings from "./pages/Settings";
import ProtectedRoute from "./utils/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

function App() {

  const token = localStorage.getItem("token");

  return (
   

      <Routes>

        {/* Default route */}
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App pages */}
        <Route path="/dashboard" element={ <ProtectedRoute> <MainLayout><Dashboard /></MainLayout></ProtectedRoute> }
/>
       <Route
  path="/tasks"
  element={
    <ProtectedRoute>
      <MainLayout><Tasks /></MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/analytics"
  element={
    <ProtectedRoute>
      <MainLayout><Analytics /></MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/focus"
  element={
    <ProtectedRoute>
     <MainLayout> <Focus /></MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <MainLayout><Settings /></MainLayout>
    </ProtectedRoute>
  }
/>

      </Routes>

   
  );
}

export default App;