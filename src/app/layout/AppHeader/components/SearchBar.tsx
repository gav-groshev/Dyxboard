import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "../AppHeader.css";

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="search-bar hidden lg:block">
      <form>
        <div className="relative">
          <span className="">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search or type command..."
            className=""
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;