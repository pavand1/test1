import React, { useState, MouseEvent, useRef, useEffect } from "react";
import { IMenuItem } from "../data/app-data";
import "./component-style.css";

type Props = {
  data: IMenuItem[];
  isMultiSelect?: boolean;
  handleSelectedItems: (items: IMenuItem[]) => void;
};

export default function Dropdown(props: Props) {
  const { data, isMultiSelect, handleSelectedItems } = props;
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const newRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<IMenuItem[] | []>([]);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  };
  const handleDropdownClick = (item: IMenuItem) => {
    if (item && dropdownRef.current) {
      if (!isMultiSelect) {
        dropdownRef.current.innerHTML = item.title;
        handleSelectedItems([item]);
        setShowDropdown(false);
      } else {
        if (selectedItems.includes(item)) {
          setSelectedItems((prev) =>
            prev.filter((selectedItem) => selectedItem !== item)
          );
        } else setSelectedItems((prev) => [...prev, item]);
      }
    }
  };
  const handleOutsideClick: EventListener = (e: MouseEventInit) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      if (selectedItems.length > 0) handleSelectedItems(selectedItems);
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  useEffect(() => {
    if (selectedItems.length > 0 && isMultiSelect && dropdownRef.current)
      dropdownRef.current.innerHTML = selectedItems
        .map((item) => item.title)
        .join(", ");
  }, [selectedItems, isMultiSelect, dropdownRef]);
  if (!data) {
    return null;
  }
  return (
    <div className="dropdown-container">
      <button
        ref={dropdownRef}
        className="dropdown-button"
        onClick={handleButtonClick}
      >
        {"Dropdown"}
      </button>

      {showDropdown && (
        <ul className="dropdown-list" ref={newRef}>
          {data.map((item) => (
            <li key={item.id} onClick={() => handleDropdownClick(item)}>
              {isMultiSelect && (
                <input type="checkbox" checked={selectedItems.includes(item)} />
              )}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
