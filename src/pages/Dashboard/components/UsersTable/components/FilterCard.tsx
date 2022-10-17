import React from "react";
import caretDown from "../../../../../assets/icons/sidebar/caret-down.svg";
import calendar from "../../../../../assets/icons/dropdown/calendar.svg";
import activateIcon from "../../../../../assets/icons/dropdown/activate-icon.svg";

function ListItemComponent({
  children,
  header,
  placeholder,
}: {
  children?: JSX.Element | null;
  header: string;
  placeholder: string;
}) {
  return (
    <div className="filter_card_item" data-filter-dropdown="filter-dropdown">
      <p
        className="ff_work_sans fw_500 fs_14 text_primary_400 filter_card_item_header"
        data-filter-dropdown="filter-dropdown"
      >
        {header}
      </p>
      <div className="flex_main flex_between filter_card_item_dropdown">
        <p className="ff_work_sans fw_500 fs_14 text_primary_400 item-opacity">
          {placeholder}
        </p>
        {children}
      </div>
    </div>
  );
}

function FilterCard({
  setShowDetailsDropdown,
}: {
  setShowDetailsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  React.useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      //   console.log(target)
      //   console.log(target.getAttribute("data-filter-dropdown"))
      if (target.getAttribute("data-dropdown") === "table-header-org-tab") {
        return;
      } else if (
        target.getAttribute("data-filter-dropdown") !== "filter-dropdown"
      ) {
        setShowDetailsDropdown(false);
      }
    });
    return window.removeEventListener("click", (e) => {});
  }, []);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const filterCriteria = [
    {
      header: "Organization",
      placeholder: "Select",
      url: caretDown,
    },
    {
      header: "Username",
      placeholder: "User",
    },
    {
      header: "Email",
      placeholder: "Email",
    },
    {
      header: "Date",
      placeholder: "Date",
      url: calendar,
    },
    {
      header: "Phone Number",
      placeholder: "Phone Number",
    },
    {
      header: "Status",
      placeholder: "Select",
      url: caretDown,
    },
  ];
  return (
    <div
      className="filter_card_container"
      data-filter-dropdown="filter-dropdown"
    >
      {filterCriteria.map((item) => {
        return (
          <ListItemComponent
            placeholder={item.placeholder}
            header={item.header}
            children={
              item.url ? <img src={item.url} alt={item.header} /> : null
            }
          />
        );
      })}
      <div
        className="filter_card_container_buttons flex_main flex_between"
        data-filter-dropdown="filter-dropdown"
      >
        <button className="plain_btn ff_work_sans fw_600 fs_14 text_primary_400" data-filter-dropdown="filter-dropdown">
          Reset
        </button>
        <button
          className="primary_btn bg_neutral_600 ff_work_sans fw_600 fs_14"
          data-filter-dropdown="filter-dropdown"
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterCard;
