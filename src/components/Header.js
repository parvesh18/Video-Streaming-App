import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { useDispatch } from "react-redux";
import { category, searchQuery, toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  // fetch search suggestions
  const getSuggestions = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/suggestions?q=${searchValue}`
      );
      const jsonData = await response.json();
      setSuggestions(jsonData);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const searchChangeHandler = (event) => {
    setSearchValue(event.target.value);
    setHighlightIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      setSearchValue(suggestions[highlightIndex].value);
      setHighlightIndex(-1);
    } else if (e.button === 0 && highlightIndex >= 0) {
      setSearchValue(suggestions[highlightIndex].value);
      setHighlightIndex(-1);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchValue !== "") {
      dispatch(searchQuery(searchValue));
      navigate("/results?q=" + searchValue);
      setSearchValue("");
    }
  };

  const suggestionHandler = (index) => {
    const selectedValue = suggestions[index];
    setSearchValue(selectedValue);
    setHighlightIndex(-1);
    dispatch(searchQuery(selectedValue));
    navigate("/results?q=" + selectedValue);
    setSearchValue("");
  };

  return (
    <div className="w-full fixed bg-white top-0 z-10">
      <div className="flex flex-row justify-evenly sm:justify-between items-center w-[98%] sm:ml-3">
        <div className="flex items-center gap-x-1 sm:gap-x-3">
          <button onClick={() => dispatch(toggleMenu())}>
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <Link to="/" onClick={() => dispatch(category(""))}>
            <img
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
              alt="youtube-logo"
              className="h-16 select-none"
            />
          </Link>
        </div>
        {/* input search */}
        <div className="flex items-center">
          <form className="flex items-center" onSubmit={submitHandler}>
            <input
              type="search"
              placeholder="Search"
              className="border-[0.5px] border-gray-400 inline-block sm:w-[300px] md:w-[380px] lg:w-[450px] xl:w-[500px] focus:outline-none py-[6px] px-5 rounded-l-3xl rounded-r-3xl md:rounded-r-none  focus:border-[1px] focus:border-blue-500"
              onChange={searchChangeHandler}
              onKeyDown={handleKeyDown}
              value={searchValue}
            />
            <button type="submit" className="hidden md:block">
              <CiSearch className="md:border-[0.5px] h-[38px] w-16 px-5 md:bg-gray-50 hover:bg-gray-100 border-gray-400 rounded-full md:rounded-none md:rounded-r-3xl " />
            </button>
          </form>
          <button className="hidden">
            <IoMdMic className="text-2xl lg:bg-gray-100 h-10 w-10 p-[10px] rounded-full lg:ml-2" />
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-x-4">
          <button>
            <IoVideocamOutline className="text-2xl" />
          </button>
          <button>
            <CiBellOn className="text-3xl" />
          </button>
          <img
            src="https://yt3.ggpht.com/ytc/AIdro_mhD_uBtCD8mWdT0iitBx_Q8bq0TyRBWRZE2sXdp1oZwUfg1sZvctK6tZ7r4kqP-KS8-A=s88-c-k-c0x00ffffff-no-rj"
            className="w-9 rounded-full cursor-pointer"
            alt="user-logo"
          />
        </div>
      </div>
      {/* search suggestion */}
      <div
        className={`flex flex-col justify-center items-start fixed top-14 left-[40%] sm:left-[33%] md:left-[30%] xl:left-[33%] bg-white w-[200px] sm:w-[270px] md:w-[340px] lg:w-[400px] xl:w-[450px] rounded-xl border-[1px] py-3 ${
          searchValue.length === 0 && "hidden"
        }`}
      >
        {searchValue.length !== 0 &&
          suggestions.map((item, index) => (
            <p
              key={item.value}
              className={`text-lg font-semibold tracking-tight cursor-pointer select-none hover:bg-gray-100 w-full px-7 py-1 ${
                highlightIndex === index && "bg-gray-100"
              }`}
              onClick={() => suggestionHandler(index)}
            >
              {item.value}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Header;
