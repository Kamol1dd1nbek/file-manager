// style
import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [tabs, setTabs] = useState([{
    title: "Desctop",
    path: "C://usr/desctop"
  }])
  return <div className="tabs">
    {tabs && tabs.map(tab => {
      return <div key={tab.title} className="tabs__tab tabs__tab--active">
        <span className="tab__title">{tab.title}</span>
        <span>x</span>
      </div>
    })}
  </div>;
}

export default Tabs;
