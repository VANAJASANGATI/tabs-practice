import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import "./tabs.css";
export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      tabName: "Profile",
      component: Profile,
    },
    {
      tabName: "Interests",
      component: Interests,
    },
    {
      tabName: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <>
      <div className="tabs-container">
        {tabs.map((eachTab) => (
          <button className="tab">{eachTab.tabName}</button>
        ))}
      </div>
      <ActiveTabComponent />
    </>
  );
}
