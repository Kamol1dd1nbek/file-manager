// style
import "./Actions.css";

import AddIcon from "../icons/AddIcon";
import DownArrowIcon from "../icons/DownArrowIcon";
import ScissorsIcon from "../icons/ScissorsIcon";
import PasteIcon from "../icons/PasteIcon";
import CopyIcon from "../icons/CopyIcon";
import RenameIcon from "../icons/RenameIcon";
import ShareIcon from "../icons/ShareIcon";
import TrashIcon from "../icons/TrashIcon";
import SortIcon from "../icons/SortIcon";
import SelectDown from "./SelectDown";
import MenuIcon from "../icons/MenuIcon";
import OptionsIcon from "../icons/Options";

function Actions() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <div className="actions">
      <SelectDown title="New" options={options} headerIcon={<AddIcon />} />
      <div className="line"></div>
      <div className="box">
        <ScissorsIcon />
      </div>
      <div className="box">
        <CopyIcon />
      </div>
      <div className="box">
        <PasteIcon />
      </div>
      <div className="box">
        <RenameIcon />
      </div>
      <div className="box">
        <ShareIcon />
      </div>
      <div className="box">
        <TrashIcon />
      </div>
      <div className="line"></div>
      <SelectDown title="Sort" options={options} headerIcon={<SortIcon />} />
      <SelectDown title="View" options={options} headerIcon={<MenuIcon />} />
      <div className="line"></div>
      <SelectDown options={options} headerIcon={<OptionsIcon />} showIcon={false} />
    </div>
  );
}

export default Actions;
