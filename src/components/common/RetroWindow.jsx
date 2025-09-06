import React from "react";
import ToolKitBtn from "./ToolKitBtn.jsx"
import "../../css/common/RetroWindow.css";

export default function RetroWindow({ title, children, className = "" }) {
  return (
    <div className={`retro-window ${className}`}>
      {title && (
        <div className="retro-window__titlebar">
          <span>{title}</span>
          <div className="titlebar-buttons">
            <ToolKitBtn text="x"/>
          </div>
        </div>
      )}
      <div className="retro-window__content">{children}</div>
    </div>
  );
}
