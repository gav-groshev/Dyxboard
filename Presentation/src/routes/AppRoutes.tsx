// routes/AppRoutes.tsx
import {  BrowserRouter as Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../features/Auth/LoginPage";
import { ProfilePage } from "../features/Profile";
import TaskList from "../features/TaskList";
import { KanbanPage } from "../features/Kanban";
import { AppLayout } from "../layout/AppLayout";
import { SignInPage } from "../features/Auth/SignInPage";

export const AppRoutes = () => (
  <Routes>
    {/* Public */}
    <Route path="./login" element={<LoginPage />} />
    <Route path="./signin" element={<SignInPage />} />

    {/* Private (общий каркас) */}
    <Route element={<AppLayout />}>
      <Route path="./" element={<ProfilePage />} />
      <Route path="./profile" element={<ProfilePage />} />
      <Route path="./todo" element={<TaskList />} />
      <Route path="./kanban" element={<KanbanPage />} />
    </Route>

    {/* опционально: редирект на / */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
