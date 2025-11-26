import React from "react";


const FloatingIcon = () => {
  return (
    <a
      href="https://www.example.com"  // 🔗 Redirect link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        top: "130px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <img
        src="../public/images/c5.png" 
        alt="Floating Icon"
        style={{
          width: "70px",
          height: "50px",
          borderRadius: "10%",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      />
    </a>
  );
};

export default FloatingIcon;