import React from "react";
import { Card } from "../../layout/Card";

interface ImageCardProps {
  title: string;
  text: string;
  imageUrl: string;
  tags?: string[];
  authorName: string;
  authorAvatar: string;
  date: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  text,
  imageUrl,
  tags = [],
  authorName,
  authorAvatar,
  date
}) => {
  return (
    <Card className="image-card border-0 p-0">
      <div className="row g-0 h-100">
        {/* Картинка вне card-body */}
        <div className="col-4 h-100">
          <img
            src={imageUrl}
            alt={title}
            className="h-100 w-100"
            style={{ objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Контент */}
        <div className="col-8 d-flex flex-column pt-2 pb-2 pe-2">
          <div className="p-3 d-flex flex-column h-100">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text text-muted flex-grow-1">
              {text}{" "}
              <a href="#" className="text-decoration-none">
                Read More
              </a>
            </p>

            {/* Теги */}
            {tags.length > 0 && (
              <div className="mb-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge bg-light text-dark border me-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Автор и дата */}
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <div className="d-flex align-items-center">
                <img
                  src={authorAvatar}
                  alt="avatar"
                  className="rounded-circle me-2"
                  width={30}
                  height={30}
                />
                <span className="fw-medium">{authorName}</span>
              </div>
              <small className="text-muted">{date}</small>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
