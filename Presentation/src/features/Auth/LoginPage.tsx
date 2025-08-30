// src/features/Login/LoginPage.tsx
import React from "react";

export const LoginPage: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ minWidth: "320px" }}>
        <h2 className="mb-3 text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign in</button>
        </form>
      </div>
    </div>
  );
};
