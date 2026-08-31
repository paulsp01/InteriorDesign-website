import React from "react";

const Button = ({ color, textColor, text,onClick  }) => {
  return (
    <button
    onClick={onClick }
      style={{
        backgroundColor: color,
        color: textColor,
      }}
      className="py-2 px-8 border w-fit active:scale-95 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;