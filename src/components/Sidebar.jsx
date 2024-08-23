// style
import "./Sidebar.css";

function Sidebar() {
  const sections = [{ name: "Desktop" }];

  return (
    <aside className="sidebar">
      {sections.map((section, index) => (
        <div
          key={index}
          className="box"
          style={{ height: "34px", borderRadius: "2px" }}
        >
          {section.name}
        </div>
      ))}
      <hr />
    </aside>
  );
}

export default Sidebar;
