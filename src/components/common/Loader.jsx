import { useEffect, useState } from "react";
import RetroWindow from "./RetroWindow.jsx";
import "../../css/common/Loader.css";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <RetroWindow title="lauraglab.com">
          <div className="loader__body">
            <p>Ładowanie...</p>
            <div className="loader__bar">
              <div className="loader__bar-progress"></div>
            </div>
          </div>
        </RetroWindow>
      </div>
    );
  }

  return children;
}
