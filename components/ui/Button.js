import { Lato_700 } from "../layout";

const Button = ({ type, variant, className, onClick, disabled, children }) => {
  let classes = `rounded shadow px-6 py-3 transition-all ${className} `;

  switch (variant) {
    case "primary":
      classes += "bg-primary hover:bg-primary-darker text-white";
      break;

    case "secondary":
      classes += "bg-secondary hover:bg-secondary-darker text-white";
      break;

    case "dark":
      classes += "bg-dark hover:bg-black text-white";
      break;

    case "light":
      classes += "bg-light hover:bg-white text-dark";
      break;

    default:
      classes += "rounded-none shadow-none !p-0";
      break;
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={Lato_700.className}>{children}</span>
    </button>
  );
};

export default Button;
