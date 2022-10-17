import React from "react";
import filter from "../../../../assets/icons/table/filter-icon.svg";
import details from "../../../../assets/icons/table/details-icon.svg";
import caretDown from "../../../../assets/icons/sidebar/caret-down.svg";

import { endpoints } from "../../../../config";
import { GetAllUsersApiInterface } from "../../../../interfaces";
import DetailsCard from "./components/DetailsCard";
import FilterCard from "./components/FilterCard";

interface ModifiedGetAllUsersApiInterface extends GetAllUsersApiInterface {
  status: "inactive" | "active" | "pending" | "blacklisted";
}
function UsersTable() {
  const bgColorCodesByResponse = {
    inactive: "rgba(84, 95, 125, .06)",
    active: "rgba(57, 205, 98, 0.06)",
    pending: "rgba(233, 178, 0, .1)",
    blacklisted: "rgba(228, 3, 59, .1)",
  };
  const textColorCodesByResponse = {
    inactive: "rgba(84, 95, 125, 1)",
    active: "rgba(57, 205, 98, 1)",
    pending: "rgba(233, 178, 0, 1)",
    blacklisted: "rgba(228, 3, 59, 1)",
  };
  const textByResponse = {
    inactive: "Inactive",
    active: "Active",
    pending: "Pending",
    blacklisted: "Blacklisted",
  };
  const noOfPaginatedItems = 16;
  const populatedArray = new Array(noOfPaginatedItems)
    .fill(null)
    .map((_, index) => index + 1);

  const [totalUsersList, setTotalUsersList] = React.useState<
    ModifiedGetAllUsersApiInterface[]
  >([]);
  const [usersList, setUsersList] = React.useState<
    ModifiedGetAllUsersApiInterface[]
  >([]);
  const [noOfItems, setNoOfItems] = React.useState(5);
  const [currentPageNo, setCurrentPageNo] = React.useState(1);
  const [showNoOfItemDropdDown, setShowNoOfItemDropdown] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [paginationValues, _] = React.useState(populatedArray);
  const [showHiddenPaginatedNumbers, setShowHiddenPaginatedNumbers] =
    React.useState(false);
  const [showDetailsDropdown, setShowDetailsDropdown] = React.useState(false);
  const [showFilterDrodown, setShowFilterDropdown] = React.useState(false);
  const [currentListItemId, setCurrentListItemId] = React.useState(0);
  const [currentListId, setCurrentListId] = React.useState('1');

  const blacklistUser = (userId: string) => {
   const newUserslist: ModifiedGetAllUsersApiInterface[] = totalUsersList.map((listItem) => {
      if (listItem.id === userId){
        return {
          ...listItem,
          status: 'blacklisted'
        }
      } else {
        return listItem
      }
   });

   setTotalUsersList(newUserslist)
   setShowDetailsDropdown(false);
  }

  
  const activateUser = (userId: string) => {
   const newUserslist: ModifiedGetAllUsersApiInterface[] = totalUsersList.map((listItem) => {
      if (listItem.id === userId){
        return {
          ...listItem,
          status: 'active'
        }
      } else {
        return listItem
      }
   });

   setTotalUsersList(newUserslist)
   setShowDetailsDropdown(false);
  }
  React.useEffect(() => {
    fetch(endpoints.GET_ALL_USERS, { method: "GET" })
      .then((response) => response.json())
      .then((data: GetAllUsersApiInterface[]) => {
        const newData: ModifiedGetAllUsersApiInterface[] = data.map(
          (obj: GetAllUsersApiInterface) => {
            return {
              ...obj,
              status: "inactive",
            };
          }
        );
        const chunkedData = newData.slice(
          (currentPageNo - 1) * noOfItems,
          (currentPageNo - 1) * noOfItems + noOfItems
        );

        setUsersList(chunkedData);
        setTotalUsersList(newData);
        console.log(data);
      });
  }, []);

  React.useEffect(() => {
    const isAtLastPage = currentPageNo === noOfPaginatedItems;
    let chunkedData;
    if (isAtLastPage) {
      chunkedData = totalUsersList.slice((currentPageNo - 1) * noOfItems);
    } else {
      chunkedData = totalUsersList.slice(
        (currentPageNo - 1) * noOfItems,
        (currentPageNo - 1) * noOfItems + noOfItems
      );
    }
    setUsersList(chunkedData);
  }, [currentPageNo, noOfItems, totalUsersList]);

  React.useEffect(() => {
  
    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      //  console.log(target);
      //   console.log(target.getAttribute("details-dropdown"));
      if (
        target.getAttribute("data-dropdown") !== null &&
        target.getAttribute("data-dropdown") === "table-header-org-tab"
      ) {
        // console.log("open Modal");
        setShowFilterDropdown(true);
      }

      // if (
      //   target.getAttribute("data-details-dropdown") !== null &&
      //   target.getAttribute("data-details-dropdown") === `details-dropdown-${}`
      // ) { 
      //   const id: number =  target.getAttribute("data-details-dropdown-id") as unknown as number;
       
      //   setShowDetailsDropdown(true);
      //   setCurrentListItemId(id)
      // }
    });
    return window.removeEventListener("click", (e) => {});
  }, []);
 
  const parentRef = React.useRef<HTMLDivElement>(null);
  const userListItemRef = React.useRef<HTMLTableCellElement>(null);
  
  return (
    <div className="table_parent" ref={parentRef}>
      {showDetailsDropdown && (
        <DetailsCard
          setShowDetailsDropdown={setShowDetailsDropdown}
          currentListItemId={currentListItemId}
          currentListId={currentListId}
          blacklistuser={blacklistUser}
          activateUser={activateUser}
        />
      )}
      {showFilterDrodown && (
        <FilterCard setShowDetailsDropdown={setShowFilterDropdown} />
      )}
      <div className="table_container">
        <table id="users">
          {/* <div className='flex_main flex_between' style={{width: '100%'}}> */}

          <tr className="table-header">
            <th
              className="table-header-org-tab"
              data-dropdown="table-header-org-tab"
            >
              <div data-dropdown="table-header-org-tab">
                <p data-dropdown="table-header-org-tab">ORGANIZATION</p>
                <p data-dropdown="table-header-org-tab">
                  <img
                    src={filter}
                    alt={"filter-icon"}
                    data-dropdown="table-header-org-tab"
                  />
                </p>
              </div>
            </th>
            <th>
              <div data-dropdown="table-header-org-tab">
                <p data-dropdown="table-header-org-tab">USERNAME</p>
                <p data-dropdown="table-header-org-tab">
                  <img
                    src={filter}
                    alt={"filter-icon"}
                    data-dropdown="table-header-org-tab"
                  />
                </p>
              </div>
            </th>
            <th>
              <div data-dropdown="table-header-org-tab">
                <p data-dropdown="table-header-org-tab">EMAIL</p>
                <p data-dropdown="table-header-org-tab">
                  <img
                    src={filter}
                    alt={"filter-icon"}
                    data-dropdown="table-header-org-tab"
                  />
                </p>
              </div>
            </th>
            <th>
              <div data-dropdown="table-header-org-tab">
                <p data-dropdown="table-header-org-tab">PHONE NUMBER</p>
                <p data-dropdown="table-header-org-tab">
                  <img
                    src={filter}
                    alt={"filter-icon"}
                    data-dropdown="table-header-org-tab"
                  />
                </p>
              </div>
            </th>
            <th>
              <div data-dropdown="table-header-org-tab">
                <p data-dropdown="table-header-org-tab">DATE JOINED</p>
                <p data-dropdown="table-header-org-tab">
                  <img
                    src={filter}
                    alt={"filter-icon"}
                    data-dropdown="table-header-org-tab"
                  />
                </p>
              </div>
            </th>
            <th>
              <div data-dropdown="table-header-org-tab">
                <p data-dropdown="table-header-org-tab">STATUS</p>
                <p data-dropdown="table-header-org-tab">
                  <img
                    src={filter}
                    alt={"filter-icon"}
                    data-dropdown="table-header-org-tab"
                  />
                </p>
              </div>
            </th>
            <th></th>
          </tr>

          {usersList.map((user, id) => {
            return (
              <tr
                key={id} 
                data-details-dropdown="details-dropdown"
              >
                <td data-details-dropdown={`details-dropdown-${id}`} data-details-dropdown-id={id}>{user.orgName}</td>
                <td data-details-dropdown="details-dropdown">{user.userName}</td>
                <td data-details-dropdown="details-dropdown">{user.email}</td>
                <td data-details-dropdown="details-dropdown">{user.phoneNumber}</td>
                <td data-details-dropdown="details-dropdown">{new Date(user.createdAt).toLocaleString()}</td>
                <td data-details-dropdown="details-dropdown">
                  <div
                    style={{
                      color: `${textColorCodesByResponse[user.status]}`,
                      background: `${bgColorCodesByResponse[user.status]}`,
                      borderRadius: "100px",
                      maxWidth: "100px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "16px",
                      textTransform: "capitalize",
                      padding: '7px 13px'
                    }}
                  >
                    {user.status}
                  </div>
                </td>
                <td>
                  <p
                    onClick={() => {
                      setShowDetailsDropdown(true);
                      setCurrentListItemId(id);
                      setCurrentListId(user.id)
                    }}
                    className="detail_options_button"
                  >
                    <img
                      src={details}
                      alt={"filter-icon"}
                      className="detail_options_button"
                      style={{  minWidth: '20px'}}
                    />
                  </p>
                </td>
                <div className="border_bottom_line" />
              </tr>
            );
          })}
        </table>
      </div>
      <div className="flex_main flex_between  | pagination">
        <div className="flex_main flex_align_center">
          <p className="fs_14 text_primary_400 fw_400 ff_work_sans">Showing</p>
          <div
            className="flex_main flex_align_center flex_between | userListDropdown"
            onClick={() => setShowNoOfItemDropdown(!showNoOfItemDropdDown)}
          >
            <p className="fs_14 text_primary_800 fw_600 ff_work_sans">
              {noOfItems}
            </p>
            <img src={caretDown} alt="caretDown" />
            {showNoOfItemDropdDown && (
              <div className="userListDropdownCard">
                <p
                  className="fs_14 text_primary_800 fw_600 ff_work_sans"
                  onClick={() => {
                    setNoOfItems(5);
                    setShowNoOfItemDropdown(false);
                  }}
                >
                  5
                </p>
                <p
                  className="fs_14 text_primary_800 fw_600 ff_work_sans"
                  onClick={() => {
                    setNoOfItems(10);
                    setShowNoOfItemDropdown(false);
                  }}
                >
                  10
                </p>
              </div>
            )}
          </div>
          <p className="fs_14 text_primary_400 fw_400 ff_work_sans">
            out of 100
          </p>
        </div>

        <div className="flex_main flex_between flex_align_center | paginationRightDiv">
          <div
            className="userPaginationArrowLeft"
            onClick={() => {
              if (currentPageNo > 1) {
                setCurrentPageNo(currentPageNo - 1);
              }
            }}
          >
            <img src={caretDown} alt="caretDown" className="point_left" />
          </div>
          <div className="flex_main flex_between | paginationNumber">
            {paginationValues.map((value, index) => {
              const rangeToSkip = paginationValues.filter(
                (num) =>
                  num > currentPageNo + 1 && num < paginationValues.length - 1
              );
              const isNumberInRange = rangeToSkip.includes(value);

              return isNumberInRange ? (
                showHiddenPaginatedNumbers ? (
                  <p
                    className={value === currentPageNo ? "active" : ""}
                    onClick={() => setCurrentPageNo(value)}
                  >
                    {value}
                  </p>
                ) : index + 1 === currentPageNo + 2 ? (
                  <p onClick={() => setShowHiddenPaginatedNumbers(true)}>
                    <img src={details} alt={"filter-icon"} />
                  </p>
                ) : null
              ) : (
                <p
                  className={value === currentPageNo ? "active" : ""}
                  onClick={() => setCurrentPageNo(value)}
                >
                  {value}
                </p>
              );
            })}
          </div>
          <div
            className="userPaginationArrow"
            onClick={() => {
              if (
                currentPageNo < paginationValues[paginationValues.length - 1]
              ) {
                setCurrentPageNo(currentPageNo + 1);
              }
            }}
          >
            <img src={caretDown} alt="caretDown" className="point_right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
