import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h5 className="fw-bold">{title}</h5>
      <Breadcrumbs />
    </div>
  );
};
