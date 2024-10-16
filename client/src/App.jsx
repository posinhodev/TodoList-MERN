import { Route, Routes } from "react-router-dom";

// Components
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
