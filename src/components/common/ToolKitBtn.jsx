import "../../css/common/ToolKitBtn.css";

export default function ToolKitBtn({
  text,
  children,
  isHamburger = false,
  isOpen = false,
  toggleMenu,
  onClick 
}) {
   if (isHamburger) {
     return (
       <button
         className="titlebar-button hamburger"
         onClick={toggleMenu}
         aria-label="Menu"
       >
         {isOpen ? "x" : "="}
       </button>
     );
   }

  return (
    <button className="titlebar-button" onClick={onClick}>
      {text || children}
    </button>
  );
}