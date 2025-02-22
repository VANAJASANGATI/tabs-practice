import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import "./tabs.css";
export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
  });
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
        {tabs.map((eachTab, index) => (
          <button
            className="tab"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {eachTab.tabName}
          </button>
        ))}
      </div>
      <div className="component">
        <ActiveTabComponent data={data} setData={setData} />
        <div className="button-container">
          <button
            disabled={activeTab === 0}
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            Prev
          </button>
          <button
            disabled={activeTab === tabs.length - 1}
            onClick={() => setActiveTab((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
