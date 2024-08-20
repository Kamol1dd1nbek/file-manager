// style
import "./Tabs.css";

import { useState } from "react";

const newTab = {
  id: 2,
  icon: "🏠",
  title: "Desctop",
  path: "C://usr/desctop"
}

function Tabs() {
  const [tabs, setTabs] = useState([{
    id: 1,
    icon: "🏠",
    title: "Desctop",
    path: "C://usr/desctop"
  }, {
    id: 2,
    icon: "🏠",
    title: "Desctop",
    path: "C://usr/desctop"
  }])



  function addNewTab() {
    setTabs(prev => [...prev, newTab])
  }

  function removeTab(id) {
    setTabs(prev => prev.filter(tab => tab.id !== id));
  }

  return (
    <>
      <div className="tabs__space"></div>
      <div className="tabs">
        {tabs && tabs.map((tab, index) => {
          return <div key={index} className="tabs__tab tabs__tab--active">
            <div className="tab__title">
              {tab.icon && <div className="tab__icon">{tab.icon}</div>}
              <span className="tab__title">{tab.title}</span>
            </div>
            <div onClick={() => removeTab(tab.id)} className="tabs__close-btn">
              <span>+</span>
            </div>
          </div>
        })}
        <div onClick={addNewTab} className="tabs__add-btn">
          +
        </div>
      </div>
    </>
  )
}

export default Tabs;
