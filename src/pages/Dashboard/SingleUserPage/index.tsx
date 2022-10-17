import React from "react";
import backArrow from "../../../assets/icons/arrow.svg";
import avatar from "../../../assets/icons/profile_avatar.svg";
import filledStar from "../../../assets/icons/filled-star.svg";
import plainStar from "../../../assets/icons/plain-star.svg";
import { endpoints } from "../../../config";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllUsersApiInterface } from "../../../interfaces";
function SingleUserPage({
  db
}: any) {
  const params = useParams();
  const navigate = useNavigate()
  React.useEffect(() => {
    fetch(endpoints.GET_ALL_USERS + "/" + params.postId, { method: "GET" })
      .then((response) => response.json())
      .then((data: GetAllUsersApiInterface) => {
        console.log(data);
      });
  }, []);
  React.useEffect(
    () => {
      // create the store
      db.version(1).stores({ userData: 'id,value' })
    },
    // run effect whenever the database connection changes
    [db]
  )
  return (
    <div className="right_dashboard_default bg_accent_200">
      <div className="single_user_page">
        <div className="flex_main flex_between | backDiv" onClick={() => navigate('/dashboard')}>
          <div>
            <img src={backArrow} alt={"backArrow"} />
          </div>
          <div>
            <p className="text_primary_400 fw_500 fs_16 ff_work_sans |">
              Back to Users
            </p>
          </div>
        </div>
        <div className="flex_main flex_between flex_align_center user_details_heading">
          <p className="text_primary_400 fw_600 fs_24 ff_work_sans">
            User Details
          </p>

          <div className="flex_main flex_between flex_align_center | blacklist_buttons">
            <button className="blacklist fw_500 fs_14 text_neutral_200 ff_work_sans">
              BLACKLIST USER
            </button>
            <button className="activate text_neutral_600 ff_work_sans fw_500 fs_14">
              ACTIVATE USER
            </button>
          </div>
        </div>

        <div className="profile_card_container">
          <div className="flex_main flex_align_center | top_profile_info">
            <div className="flex_main flex_align_center">
              <div className="avatar_container">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="user_detail_name">
                <p className="text_primary_800 fw_500 fs_22 ff_work_sans">
                  Grace Effiom
                </p>
                <p className="text_primary_400 fw_400 fs_14 ff_work_sans">
                  LSQFf587g90
                </p>
              </div>
            </div>
            <div className="user_tier_div">
              <p className="text_primary_400 fw_500 fs_14 ff_work_sans">
                User's Tier
              </p>
              <div className="flex_main flex_align_center | stars_container">
                <div>
                  <img src={filledStar} alt="avatar" />
                </div>
                <div>
                  <img src={plainStar} alt="avatar" />
                </div>
                <div>
                  <img src={plainStar} alt="avatar" />
                </div>
              </div>
            </div>

            <div className="account_div">
              <p className="text_primary_800 fw_500 fs_22 ff_work_sans">
                <strong>N</strong>200,000
              </p>
              <p className="text_primary_800 fw_400 fs_12 ff_work_sans |">
                9912345678/Providus Bank
              </p>
            </div>
          </div>
          <div className="tab_controls">
            <p className="active">General Details</p>
            <p className="ff_sf_compact">Documents</p>
            <p className="ff_sf_compact">Bank Details</p>
            <p className="ff_sf_compact">Loans</p>
            <p className="ff_sf_compact">Savings</p>
            <p className="ff_sf_compact">App and System</p>
          </div>
        </div>

        <div className="profile_details_container">
        <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_500 fs_16 ff_work_sans">
                Personal Information
              </p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  Full Name
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  Grace Effiom
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  Phone Number
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  07060780922
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMAIL ADDRESS
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  grace@gmail.com
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  BVN{" "}
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  07060780922
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  GENDER{" "}
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  {" "}
                  FEMALE
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  MARITAL STATUS{" "}
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  {" "}
                  SINGLE
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  CHILDREN{" "}
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  {" "}
                  NONE
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  Type of residence{" "}
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  {" "}
                  Parent’s Apartment
                </p>
              </div>
            </div>
          </div>

 
          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_500 fs_16 ff_work_sans">
               Education and Employment
              </p>
            </div>
            <div className="personalInfoDiv education_info_container">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  LEVEL OF EDUCATION
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  Grace Effiom
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMPLOYMENT STATUS
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                 
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                SECTOR OF EMPLOYMENT
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  grace@gmail.com
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                DURATION OF EMPLOYMENT
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  07060780922
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                 OFFICE EMAIL
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  {" "}
                  FEMALE
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
              MONTHLY INCOME
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  {" "}
                  SINGLE
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                LOAN REPAYMENT
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  {" "}
                  NONE
                </p>
              </div>
              
            </div>
          </div>


          
          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_500 fs_16 ff_work_sans">
                Socials
              </p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  TWITTER
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  Grace Effiom
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                 FACEBOOK
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  07060780922
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  INSTAGRAM
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  grace@gmail.com
                </p>
              </div> 
            </div> 
          </div>


          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_500 fs_16 ff_work_sans">
                Guarantor
              </p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  FULL NAME
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  Grace Effiom
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                 PHONE NUMBER
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  07060780922
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMAIL ADDRESS
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  grace@gmail.com
                </p>
              </div> 
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                 RELATIONSHIP
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  grace@gmail.com
                </p>
              </div> 
            </div> 
          </div>

          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_500 fs_16 ff_work_sans">
                
              </p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  FULL NAME
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  Grace Effiom
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                 PHONE NUMBER
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  07060780922
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMAIL ADDRESS
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  grace@gmail.com
                </p>
              </div> 
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                 RELATIONSHIP
                </p>
                <p className="text_primary_400 fw_500 fs_16 ff_work_sans">
                  grace@gmail.com
                </p>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserPage;
