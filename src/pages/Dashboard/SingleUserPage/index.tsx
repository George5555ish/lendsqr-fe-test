import React from "react";
import backArrow from "../../../assets/icons/arrow.svg";
import avatar from "../../../assets/icons/profile_avatar.svg";
import filledStar from "../../../assets/icons/filled-star.svg";
import plainStar from "../../../assets/icons/plain-star.svg";
import { endpoints } from "../../../config";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetAllUsersApiInterface,
  IndexDbSingleUserInterface,
} from "../../../interfaces";
import { useIndexedDB } from "react-indexed-db";
function SingleUserPage({ db }: any) {
  const params = useParams();
  const navigate = useNavigate();
  const { add, getAll, clear } = useIndexedDB("singleuser");
  const [singleUserData, setSingleUserData] =
    React.useState<IndexDbSingleUserInterface>({
      name: "",
      keypath: "",
      accountBalance: "",
      accountNumber: "",
      createdAt: "",
      email: "",
      id: "",
      lastActiveDate: "",
      orgName: "",
      phoneNumber: "",
      userName: "",

      employmentStatus: "",
      sector: "",
      duration: "",
      officeEmail: "",
      loanRepayment: "",
      monthlyIncome: ["0","0"],
      level: "",

      guarantorFirstName: "",
      guarantorLastName: "",
      guarantorGender: "",
      guarantorAddress: "",
      guarantorPhoneNumber: "",

      profileFirstName: "",
      profileLastName: "",
      profileGender: "",
      profileAddress: "",
      profilePhoneNumber: "",
      profileAvatar: "",
      profileBvn: "",
      profileCurrency: "",

      facebook: "",
      instagram: "",
      twitter: "",
    });
  React.useEffect(() => {
    getAll().then(
      (userDataFromDb) => {
        // console.log(userDataFromDb);
        const isUserDataInDb: IndexDbSingleUserInterface[] =
          userDataFromDb.filter((data) => data.id === params.postId);
        console.log("isUserDataInDb");
        console.log(isUserDataInDb);
        if (isUserDataInDb.length > 0) {
          setSingleUserData(isUserDataInDb[0]);
        } else {
          // fetch user data and add to db
          fetch(endpoints.GET_ALL_USERS + "/" + params.postId, {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data: GetAllUsersApiInterface) => {
              // console.log(data);
              const dbData: IndexDbSingleUserInterface = {
                name: data.userName,
                keypath: data.userName,
                accountBalance: data.accountBalance,
                accountNumber: data.accountNumber,
                createdAt: data.createdAt,
                email: data.email,
                id: data.id,
                lastActiveDate: data.lastActiveDate,
                orgName: data.orgName,
                phoneNumber: data.phoneNumber,
                userName: data.userName,

                employmentStatus: data.education.employmentStatus,
                sector: data.education.sector,
                duration: data.education.duration,
                officeEmail: data.education.officeEmail,
                loanRepayment: data.education.loanRepayment,
                monthlyIncome: data.education.monthlyIncome,
                level: data.education.level,

                guarantorFirstName: data.guarantor.firstName,
                guarantorLastName: data.guarantor.lastName,
                guarantorGender: data.guarantor.gender,
                guarantorAddress: data.guarantor.address,
                guarantorPhoneNumber: data.guarantor.phoneNumber,

                profileFirstName: data.profile.firstName,
                profileLastName: data.profile.lastName,
                profileGender: data.profile.gender,
                profileAddress: data.profile.address,
                profilePhoneNumber: data.profile.phoneNumber,
                profileAvatar: data.profile.avatar,
                profileBvn: data.profile.bvn,
                profileCurrency: data.profile.currency,

                facebook: data.socials.facebook,
                instagram: data.socials.instagram,
                twitter: data.socials.twitter,
              };
              setSingleUserData(dbData);
              add(dbData).then(
                (event) => {
                  console.log("ID Generated: ", event);
                },
                (error) => {
                  console.log(error);
                }
              );
            });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  React.useEffect(
    () => {
      // create the store
      db.version(1).stores({ userData: "id,value" });
    },
    // run effect whenever the database connection changes
    [db]
  );
  return (
    <div className="right_dashboard_default bg_accent_200">
      <div className="single_user_page">
        <div
          className="flex_main flex_between | backDiv"
          onClick={() => navigate("/dashboard")}
        >
          <div>
            <img src={backArrow} alt={"backArrow"} />
          </div>
          <div>
            <p className="text_primary_400 fw_600 fs_16 ff_work_sans |">
              Back to Users
            </p>
          </div>
        </div>
        <div className="flex_main flex_between flex_align_center user_details_heading">
          <p className="text_primary_400 fw_600 fs_24 ff_work_sans">
            User Details
          </p>

          <div className="flex_main flex_between flex_align_center | blacklist_buttons">
            <button
              className="blacklist fw_600 fs_14 text_neutral_200 ff_work_sans"
              onClick={() => {
                clear().then(() => {
                  alert("All Clear!");
                });
              }}
            >
              BLACKLIST USER
            </button>
            <button className="activate text_neutral_600 ff_work_sans fw_600 fs_14">
              ACTIVATE USER
            </button>
          </div>
        </div>

        <div className="profile_card_container">
          <div className="flex_main flex_align_center | top_profile_info">
            <div className="flex_main flex_align_center">
              <div className="avatar_container">
                <img
                  src={
                    singleUserData.profileAvatar !== ""
                      ? singleUserData.profileAvatar
                      : avatar
                  }
                  alt="avatar"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="user_detail_name">
                <p className="text_primary_800 fw_600 fs_22 ff_work_sans">
                  {`${singleUserData.profileFirstName} ${singleUserData.profileLastName}`}
                </p>
                <p className="text_primary_400 fw_400 fs_14 ff_work_sans">
                  {`${singleUserData.accountNumber}`}
                </p>
              </div>
            </div>
            <div className="user_tier_div">
              <p className="text_primary_400 fw_600 fs_14 ff_work_sans">
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
              <p className="text_primary_800 fw_600 fs_22 ff_work_sans">
                <strong>N</strong> {`${singleUserData.accountBalance}`}
              </p>
              <p className="text_primary_800 fw_400 fs_12 ff_work_sans |">
                {`${singleUserData.profileBvn}`}
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
              <p className="text_primary_800 fw_600 fs_16 ff_work_sans">
                Personal Information
              </p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  Full Name
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.profileFirstName} ${singleUserData.profileLastName}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  Phone Number
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.phoneNumber}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMAIL ADDRESS
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.email}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  BVN{" "}
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.profileBvn}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  GENDER{" "}
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {" "}
                  {`${singleUserData.profileGender}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  MARITAL STATUS
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans"></p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  CHILDREN{" "}
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans"></p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  Type of residence{" "}
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans"></p>
              </div>
            </div>
          </div>

          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_600 fs_16 ff_work_sans">
                Education and Employment
              </p>
            </div>
            <div className="personalInfoDiv education_info_container">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  LEVEL OF EDUCATION
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.level}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMPLOYMENT STATUS
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.employmentStatus}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  SECTOR OF EMPLOYMENT
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.sector}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  DURATION OF EMPLOYMENT
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.duration}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  OFFICE EMAIL
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.officeEmail}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  MONTHLY INCOME
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {" "}
                  {`N${
                    parseInt(singleUserData.monthlyIncome[1]) >
                    parseInt(singleUserData.monthlyIncome[0])
                      ? singleUserData.monthlyIncome[0]
                      : singleUserData.monthlyIncome[1]
                  } - N${  parseInt(singleUserData.monthlyIncome[1]) >
                    parseInt(singleUserData.monthlyIncome[0])
                      ? singleUserData.monthlyIncome[1]
                      : singleUserData.monthlyIncome[0]}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  LOAN REPAYMENT
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.loanRepayment}`}
                </p>
              </div>
            </div>
          </div>

          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_600 fs_16 ff_work_sans">
                Socials
              </p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  TWITTER
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.twitter}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  FACEBOOK
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.facebook}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  INSTAGRAM
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.instagram}`}
                </p>
              </div>
            </div>
          </div>

          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_600 fs_16 ff_work_sans">
                Guarantor
              </p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  FULL NAME
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.guarantorFirstName} ${singleUserData.guarantorLastName}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  PHONE NUMBER
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {singleUserData.guarantorPhoneNumber}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMAIL ADDRESS
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans"></p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  RELATIONSHIP
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans"></p>
              </div>
            </div>
          </div>

          <div className="personal_info_container">
            <div>
              <p className="text_primary_800 fw_600 fs_16 ff_work_sans"></p>
            </div>
            <div className="personalInfoDiv">
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  FULL NAME
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {`${singleUserData.guarantorFirstName} ${singleUserData.guarantorLastName}`}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  PHONE NUMBER
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans">
                  {singleUserData.guarantorPhoneNumber}
                </p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  EMAIL ADDRESS
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans"></p>
              </div>
              <div>
                <p className="text_primary_400 fw_400 fs_12 ff_work_sans | personalInfoText">
                  RELATIONSHIP
                </p>
                <p className="text_primary_400 fw_600 fs_16 ff_work_sans"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserPage;
