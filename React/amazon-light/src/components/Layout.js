import React, { useState, useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../state/ThemeContext";
function Layout({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Background color={theme.foreground} background={theme.background}>
      <Switch toggleTheme={toggleTheme} />
      {children}
    </Background>
  );
}

export default Layout;

const Switch = ({ toggleTheme }) => {
  const [checked, setChecked] = useState(true);
  return (
    <StyledCheck>
      <label className="switch">
        <input
          onChange={() => {
            setChecked(!checked);
            toggleTheme();
          }}
          type="checkbox"
          checked={checked}
        />
        <span className="slider round"></span>
      </label>
    </StyledCheck>
  );
};

const Background = styled.div`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

const StyledCheck = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
