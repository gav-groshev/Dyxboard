import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "../features/Profile";
import TaskList from "../features/TaskList";
import { KanbanPage } from "../features/Kanban";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProfilePage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/todo" element={<TaskList />} />
    <Route path="/kanban" element={<KanbanPage />} />

  </Routes>
);
