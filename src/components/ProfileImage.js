import React from "react";
import "./ProfileImage.css";

export default function ProfileImage({ src = "/profile.jpg", alt = "Profile" }) {
  return (
    <div className="profile-wrapper">
      <img className="profile-image" src={src} alt={alt} />
    </div>
  );
}
