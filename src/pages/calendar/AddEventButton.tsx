import { FaPlus } from "react-icons/fa";

// parent must have "group" className
const btnVisibilityClassName =
  "sr-only group-hover:not-sr-only focus:not-sr-only";

const btnStylesClassName =
  "!w-full !py-1 !px-2 rounded-lg text-sm font-medium focus:z-10 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";

const AddEventButton = () => {
  return (
    <button
      className={`${btnVisibilityClassName} ${btnStylesClassName}`}
      title="Add event"
    >
      <FaPlus className="mx-auto" />
    </button>
  );
};

export default AddEventButton;
