import React, { Children } from "react";
import { useState } from "react";
import { Arrow } from "../icons/Arrow";

interface SelectboxProps {
  label?: string,
  selectedValue: string,
  className?: string,
  onChange: (value: string) => void;
  children?: React.ReactNode;
}

interface SelectboxContextProps {
  selectedValue: string,
  onChange: (value: string) => void;
}

const SelectboxContext = React.createContext<SelectboxContextProps>({
  selectedValue: "",
  onChange: () => { },
});

const Selectbox = ({
  children,
  label,
  selectedValue,
  onChange,
}: SelectboxProps) => {
  const [toggle, setToggle] = useState(false);

  const handleChange = (value: string) => {
    onChange(value);
    setToggle(!toggle);
  }

  const arrayChildren = Children.toArray(children);

  const selectedElement: React.ReactElement = arrayChildren.find((child) => {
    return (child as React.ReactElement)?.props.value === selectedValue;
  }) as React.ReactElement;

  return (
    <SelectboxContext.Provider value={{
      selectedValue,
      onChange: handleChange
    }}>
      <div data-aos="fade-up" className="product-size mb-[30px]">
        {label && (
          <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
            {label}
          </span>
        )}
        <div className="w-full">
          <div className=" border border-qgray-border h-[50px] flex justify-between items-center px-6 cursor-pointer">
            <div className="my-select-box">
              <button
                onClick={() => setToggle(!toggle)}
                type="button"
                className="my-select-box-btn flex items-center justify-between w-full"
              >
                <span className="text-[13px] text-qblack">{selectedElement?.props.children}</span>
                <Arrow direction={toggle ? "up" : "down"} />
              </button>
              {toggle && (
                <div
                  className="click-away"
                  onClick={() => setToggle(!toggle)}
                ></div>
              )}
              <div className={`my-select-box-section ${toggle ? "open" : ""}`}>
                <ul className="list">
                  {children}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SelectboxContext.Provider>
  );
};

interface SelectItemProps {
  value: string,
  children?: string;
  onClick?: (value: string) => void;
};

const SelectItem = ({ children, value, onClick }: SelectItemProps) => {
  const { selectedValue, onChange } = React.useContext(SelectboxContext);

  return (
    <li
      className={value === selectedValue ? "selected" : ""}
      onClick={() => {
        onChange(value);
        onClick && onClick(value);
      }}
    >
      {children}
    </li>
  );
};

Selectbox.Item = SelectItem;

export default Selectbox;
