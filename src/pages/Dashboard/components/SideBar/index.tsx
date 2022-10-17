import React from "react";
import UsersIcon from "../../../../assets/icons/sidebar/users.svg";
import Guarantors from "../../../../assets/icons/sidebar/guarantors.svg";
import Loans from "../../../../assets/icons/sidebar/loan-icon.svg";
import Handshake from "../../../../assets/icons/sidebar/handshake.svg";
import Savings from "../../../../assets/icons/sidebar/piggy-bank.svg";
import briefcase from "../../../../assets/icons/sidebar/briefcase.svg";
import LoanRequests from "../../../../assets/icons/sidebar/loan-request-icon.svg";
import Whitelist from "../../../../assets/icons/sidebar/user-check.svg";
import Karma from "../../../../assets/icons/sidebar/user-times.svg";


import FeesAndCharges from "../../../../assets/icons/sidebar/fees-and-charges-icon.svg";
import SavingsProducts from "../../../../assets/icons/sidebar/savings-product-icon.svg";
import Services from "../../../../assets/icons/sidebar/services-icon.svg";
import ServiceAccount from "../../../../assets/icons/sidebar/service-account-icon.svg";
import Settlements from "../../../../assets/icons/sidebar/settlements-icon.svg";
import Reports from "../../../../assets/icons/sidebar/reports-icon.svg";
import Transactions from "../../../../assets/icons/sidebar/transactions.svg";

import Preferences from "../../../../assets/icons/sidebar/preferences-icon.svg";
import FeesAndPricing from "../../../../assets/icons/sidebar/fees-and-pricing-icon.svg";
import AuditLogs from "../../../../assets/icons/sidebar/audit-logs-icon.svg";
import SystemsMessages from "../../../../assets/icons/sidebar/tire.svg";
import Logout from "../../../../assets/icons/sidebar/sign-out-icon.svg";
import CaretIcon from "../../../../assets/icons/sidebar/caret-down.svg";
import dashboardIcon from "../../../../assets/icons/sidebar/home-icon.svg";
const customerTabList: { title: string; url: string }[] = [
  {
    title: "Users",
    url: UsersIcon,
  },
  {
    title: "Guarantors",
    url: Guarantors,
  },
  {
    title: "Loans",
    url: Loans,
  },
  {
    title: "Decision Models",
    url: Handshake,
  },
  {
    title: "Savings",
    url: Savings,
  },
  {
    title: "Loan Requests",
    url: LoanRequests,
  },
  {
    title: "Whitelist",
    url: Whitelist,
  },  {
    title: "Karma",
    url: Karma,
  },
];

const businessesTabList: { title: string; url: string }[] = [
    {
      title: "Organization",
      url: briefcase,
    },
    {
      title: "Loan Products",
      url: LoanRequests,
    },
    {
      title: "Savings Products",
      url: SavingsProducts,
    },
    {
      title: "Fees and Charges",
      url: FeesAndCharges,
    },
    {
      title: "Transactions",
      url: Transactions,
    },
    {
      title: "Services",
      url: Services,
    },
    {
      title: "ServiceAccount",
      url: ServiceAccount,
    },  {
      title: "Settlements",
      url: Settlements,
    }, {
        title: "Reports",
        url: Reports,
      },
  ];

  const settingsList: { title: string; url: string }[] = [
    {
      title: "Preferences",
      url: Preferences,
    },
    
    {
      title: "Fees and Pricing",
      url: FeesAndPricing,
    },
    {
        title: "Audit Logs",
        url: AuditLogs,
      },
      {
        title: "Systems Messages",
        url: SystemsMessages,
      },
      {
        title: "Logout",
        url: Logout,
      },
  ];
function SideBarItem({
  title,
  url,
  activeTab,
  setActiveTab,
}: {
  title: string;
  url: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className={`switch_org_main ${activeTab === title ? 'item-active': 'item-opacity'}`} onClick={() => setActiveTab(title)}>
      <div className="border_left_line" />
      <div className="switch_org_container">
        <div>
        <img src={url} alt={title} />
        </div>
        <div className="flex_center switch_org">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
function Sidebar() {
  const [activeTab, setActiveTab] = React.useState("Users");
  return (
    <div className="sideBarContainer">
      <div className="sideBarContent">
        <div className="switch_org_main">
          <div className="switch_org_container switch_org_btn">
            <img src={briefcase} alt="briefcase" />
            <div className="flex_center switch_org">
              <p>Switch Organization</p>
              <img src={CaretIcon} alt="CaretIcon" />
            </div>
          </div>
        </div>
        <div className="switch_org_main dashboard_icon_main">
          <div className="switch_org_container">
            <img src={dashboardIcon} alt="dashboardIcon" />
            <div className="flex_center switch_org">
              <p>Dashboard</p>
            </div>
          </div>
        </div>
        <p className="sidebar_adjust text_primary_400 fs_12 fw_700 ff_work_sans | customer_header">
          CUSTOMERS
        </p>
        <div>
          {customerTabList.map((item) => (
            <SideBarItem
              title={item.title}
              url={item.url}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        <p className="sidebar_adjust text_primary_400 fs_12 fw_700 ff_work_sans | business_header">
          BUSINESSES
        </p>
        <div>
          {businessesTabList.map((item) => (
            <SideBarItem
              title={item.title}
              url={item.url}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        <p className="sidebar_adjust text_primary_400 fs_12 fw_700 ff_work_sans | business_header">
          SETTINGS
        </p>
        <div>
          {settingsList.map((item) => (
            <SideBarItem
              title={item.title}
              url={item.url}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
