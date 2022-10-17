import React from "react";
import ProfilePic from "../../../../../assets/images/profile-picture.svg";
import DropdownIcon from "../../../../../assets/icons/dropdown-icon.svg";
function DrawerComponent({ animateHamburger }: { animateHamburger: boolean }) {
  const icon = document.getElementById("icon");
  const icon1 = document.getElementById("a");
  const icon2 = document.getElementById("b");
  const icon3 = document.getElementById("c");
  const nav = document.getElementById("nav");
  const blue = document.getElementById("blue");

  if (icon) {
    icon!.addEventListener("click", function () {
      icon1!.classList.toggle("a");
      icon2!.classList.toggle("c");
      icon3!.classList.toggle("b");
      nav!.classList.toggle("show");
      blue!.classList.toggle("slide");
    });
  }
  return (
    <nav id="nav" className={animateHamburger ? "show" : ""}>
      <ul>
        <li>
          <div className="flex_main flex_between">
            <div className="profile_pic_container">
              <img src={ProfilePic} alt="logo" />
            </div>
            <div className="flex_main flex_between profile_dropdown">
              <p style={{ color: "rgba(57, 205, 204, 1)" }}>Adedeji</p>
              <img
                src={DropdownIcon}
                alt="logo"
                style={{
                  fill: "rgba(57, 205, 204, 1)",
                  stroke: "rgba(57, 205, 204, 1)",
                }}
              />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default DrawerComponent;
