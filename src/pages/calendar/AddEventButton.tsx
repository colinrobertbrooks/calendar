import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParamsContext } from "../../contexts";
import { toDateParam } from "../../utils";

type Props = {
  date: Date;
};

// parent must have "group" className
const btnVisibilityClassName =
  "sr-only group-hover:not-sr-only focus:not-sr-only";

const btnStylesClassName =
  "flex !px-2.5 !py-0.5 rounded text-sm text-gray-800 border border-gray-300 hover:bg-gray-50";

const AddEventButton = ({ date }: Props) => {
  const { viewParam } = useParamsContext();

  return (
    <Link
      className={`${btnVisibilityClassName} ${btnStylesClassName}`}
      title="Add event"
      to={`/add-event?date=${toDateParam(date)}&view=${viewParam}`}
    >
      <FaPlus className="mx-auto" />
    </Link>
  );
};

export default AddEventButton;
