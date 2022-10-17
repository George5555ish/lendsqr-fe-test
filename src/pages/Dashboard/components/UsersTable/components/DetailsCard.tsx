import React from "react";
import eyeIcon from "../../../../../assets/icons/dropdown/eye-icon.svg";
import blacklistIcon from "../../../../../assets/icons/dropdown/blacklist-icon.svg";
import activateIcon from "../../../../../assets/icons/dropdown/activate-icon.svg";

import {useNavigate} from "react-router-dom"
function DetailsCard({setShowDetailsDropdown,currentListItemId,currentListId}: {
    setShowDetailsDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    currentListItemId: number,
    currentListId: string;
}) {


    const navigate = useNavigate()
  React.useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (target.classList.contains("detail_options_button")){
        
        //  console.log(target.classList);
        setShowDetailsDropdown(true)
      } else if (
        !target.classList.contains("dropdown_img_container") &&
        !target.classList.contains("details_card_item") &&
        !target.classList.contains("details_card_container") &&
        !target.classList.contains("dropdown_img") &&
        !target.classList.contains("dropdown_details_text")
      ) {
        // console.log('closett now')
        //  console.log(target.classList);
         setShowDetailsDropdown(false)
      }
    });
    return window.removeEventListener("click", (e) => {
   
    });
  }, []);
  const cardRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="details_card_container" ref={cardRef} style={{
        top: `${(currentListItemId+1)*80}px`
    }}>
      <div className="flex_main flex_align_center details_card_item" onClick={() => {
        navigate(`/dashboard/${currentListId}`)
      }}>
        <div className="dropdown_img_container flex_main flex_align_center">
          <img src={eyeIcon} alt="icon" className="dropdown_img" />
        </div>
        <p className="ff_work_sans fw_500 fs_14 text_primary_400 dropdown_details_text">
          View Details
        </p>
      </div>
      <div className="flex_main flex_align_center details_card_item">
        <div className="dropdown_img_container flex_main flex_align_center">
          <img src={blacklistIcon} alt="icon" className="dropdown_img" />
        </div>
        <p className="ff_work_sans fw_500 fs_14 text_primary_400 dropdown_details_text">
          Blacklist User
        </p>
      </div>
      <div className="flex_main flex_align_center details_card_item">
        <div className="dropdown_img_container flex_main flex_align_center">
          <img src={activateIcon} alt="icon" className="dropdown_img" />
        </div>
        <p className="ff_work_sans fw_500 fs_14 text_primary_400 dropdown_details_text">
          Activate User
        </p>
      </div>
    </div>
  );
}

export default DetailsCard;
