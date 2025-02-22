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
    interests: [
      { name: "HTML", isChecked: false },
      { name: "CSS", isChecked: false },
      { name: "JavaScript", isChecked: false },
      { name: "React js", isChecked: false },
    ],
  });
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      tabName: "Profile",
      component: Profile,
      validateData: () => {
        const err = {};
        if (!data.name) {
          err.name = "Enter name";
        } else if (!data.email) {
          err.email = "Enter email";
        } else if (!data.age) {
          err.age = "Enter age";
        }
        setErrors(err);
        return err.name || err.email || err.age ? false : true;
      },
    },
    {
      tabName: "Interests",
      component: Interests,
      validateData: () => {
        const err = {};
        const isValid =
          data.interests.filter((interest) => interest.isChecked === true)
            .length >= 2;
        if (!isValid) {
          err.interests = "Add at least 2 interests";
          setErrors(err);
        }
        return isValid;
      },
    },
    {
      tabName: "Settings",
      component: Settings,
    },
  ];
  function handleNext() {
    if (tabs[activeTab].validateData()) {
      setActiveTab((prev) => prev + 1);
    }
  }
  // console.log("errors", errors);
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
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
        <div className="button-container">
          <button
            disabled={activeTab === 0}
            onClick={() => setActiveTab((prev) => prev - 1)}
          >
            Prev
          </button>
          <button disabled={activeTab === tabs.length - 1} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
