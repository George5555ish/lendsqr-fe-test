import React from "react";

function DashboardCard({
  url,
  title,
  amount,
  id,
}: {
  url: string;
  title: string;
  amount: string;
  id: number;
}) {
  const colorToIdMatch: {
    [key: string]: string;
  }[] = [
    {
      'color': "rgba(223, 24, 255, .1)",
    },
    {  'color': "rgba(87, 24, 255, .1)" },
    {  'color': "rgba(245, 95, 68, .1)" },
    {  'color': "rgba(255, 51, 102, .1)" },
  ];

  return (
    <div  className="dashboardCard">
      <div className="dashboardCardIcon" style={{ backgroundColor: `${colorToIdMatch[id].color}` }}>
        <img src={url} alt={title} />
      </div>
      <p className="text_primary_400 fw_500 fs_14 ff_work_sans | dashboardCardTitle">{title}</p>
      <p className="text_primary_800 fw_600 fs_24 ff_work_sans | "> {amount}</p>
    </div>
  );
}

export default DashboardCard;
