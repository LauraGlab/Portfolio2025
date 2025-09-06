import { useEffect } from "react";
import CursorIcon from "../../assets/cursor.svg";
import "../../css/common/Cursor.css";

export default function Cursor() {
  useEffect(() => {
    const moveHandler = (e) => {
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        const trail = document.createElement("div");
        trail.className = "cursor-trail";
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        document.body.appendChild(trail);

        setTimeout(() => {
          trail.remove();
        }, 300);
      }
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div className="custom-cursor">
      <img src={CursorIcon} alt="cursor" className="cursor-icon" />
    </div>
  );
}