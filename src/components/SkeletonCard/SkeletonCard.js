import React from "react";
import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton-usercard">
      <div className="skeleton-card-img">
        <div className="skeleton-img" />
      </div>
      <div className="skeleton-card-name">
        <div className="skeleton-head-name" />
        <div className="skeleton-name" />
      </div>
    </div>
  );
};

export default SkeletonCard;
