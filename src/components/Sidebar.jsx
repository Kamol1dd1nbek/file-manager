// style
import { useFetch } from "../hooks/useFetch";
import "./Sidebar.css";

function Sidebar() {
  const sections = [{ name: "Desktop" }];
  let { data, isPending, error } = useFetch("http://localhost:3000/home");

  return (
    <aside className="sidebar">
      {data && data.map((section, index) => (
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
