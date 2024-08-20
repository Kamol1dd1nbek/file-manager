// style
import "./Actions.css";

import AddIcon from "../icons/AddIcon";

function Actions() {
  return (
    <div className="actions">
      <div className="actions__new">
        <div>
          <AddIcon width={18} height={18} />
        </div>
      </div>
      <div className="actions__action"></div>
      <div className="actions__view"></div>
    </div>
  );
}

export default Actions;
