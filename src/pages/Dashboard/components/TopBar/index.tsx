import React from "react";
import Input from "../../../../components/InputComponent";
import logo from "../../../../assets/logo.svg";
import SearchIcon from "../../../../assets/icons/search-icon.svg";
import AlertIcon from "../../../../assets/icons/alert-icon.svg";
import ProfilePic from "../../../../assets/images/profile-picture.svg";
import DropdownIcon from "../../../../assets/icons/dropdown-icon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DrawerComponent from "./components/DrawerComponent";
function TopBar() {
  const navigate = useNavigate();

  const [animateHamburger, setAnimateHamburger] = React.useState(false)
  return (
    <div className="topBarContainer flex_between">
      <div className="imageSection">
        <div className="" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="topBarRight flex_between">
        <div className="flex_center searchBarContainer topBarRightLinks">
          <Input
            inputType="text"
            child={
              <p className="searchIconContainer">
                <img src={SearchIcon} alt="logo" />
              </p>
            }
            required={false}
            placeholder={"Search for anything"}
            containerStyles={{
              position: "relative",
              borderRadius: "8px",
              border: "1px solid rgba(33, 63, 125, 0.2)",
              width: "100%",
              height: "40px",
            }}
            inputStyle={{
              fontFamily: "Work Sans",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#545F7D",
              fontWeight: "400",
              opacity: "0.7",
            }}
          />
        </div>

        <div className="flex_main flex_between">
          <div className="hamburger-icon" id="icon" onClick={() => setAnimateHamburger(!animateHamburger)}> 
            <div className={`${!animateHamburger ? "icon-1" : "icon-1 a"}`} id="a"></div>
            <div className={`${!animateHamburger ? "icon-2" : "icon-2 c"}`} id="b"></div>
            <div className={`${!animateHamburger ? "icon-3" : "icon-3 b"}`} id="c"></div>
            <div className="clear"></div>
          </div>
          <DrawerComponent animateHamburger={animateHamburger} />
          <div className="topBarRightLinks flex_main flex_between">
            <Link to="#" className="docs_link">
            Docs
          </Link>

          <div className="alert_div">
            <img src={AlertIcon} alt="logo" />
          </div>
          <div className="flex_main flex_between">
            <div className="profile_pic_container">
              <img src={ProfilePic} alt="logo" />
            </div>
            <div className="flex_main flex_between profile_dropdown">
              <p>Adedeji</p>
              <img src={DropdownIcon} alt="logo" />
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default TopBar;
