import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  return {
    isToggled: toggle,
    toggle: () => {
      setToggle(!toggle);
    },
  };
};
