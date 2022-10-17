import React from "react";
import DashboardCard from "../components/DashboardCard";
import UsersTable from "../components/UsersTable";

import users from "../../../assets/icons/users/users-icon.svg";
import LoanUsers from "../../../assets/icons/users/users-with-loans.svg";
import activeUsers from "../../../assets/icons/users/active-users-icon.svg";
import savings from "../../../assets/icons/users/users-with-savings.svg";

const userCards: {
  url: string;
  title: string;
  amount: string;
}[] = [
  {
    url: users,
    title: "USERS",
    amount: "2,453",
  },
  {
    url: activeUsers,
    title: "ACTIVE USERS",
    amount: "2,453",
  },
  {
    url: LoanUsers,
    title: "USERS WITH LOANS",
    amount: "12,453",
  },
  {
    url: savings,
    title: "USERS WITH SAVINGS",
    amount: "102,453",
  },
];
function UsersPage() {
  return (
    <div className="right_dashboard_default bg_accent_200">
      <div className="users_page_container">
        <p className="text_primary_400 fw_600 fs_24 ff_work_sans | usersTitle">
          Users
        </p>

        <div className="dashboardCardContainer">
          {userCards.map((cardItem, idx) => (
            <div key={idx}>
              <DashboardCard
                url={cardItem.url}
                title={cardItem.title}
                amount={cardItem.amount}
                id={idx}
              />
            </div>
          ))}
        </div>

        <UsersTable />
      </div>
    </div>
  );
}

export default UsersPage;
