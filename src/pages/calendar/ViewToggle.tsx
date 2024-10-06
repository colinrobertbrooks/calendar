import { MONTH_VIEW, WEEK_VIEW } from "../../consts";
import { useParamsContext } from "../../contexts";

const btnClassName =
  "py-1 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";

const ViewToggle = () => {
  const { viewParam, setViewParam } = useParamsContext();

  return (
    <div className="inline-flex rounded-lg">
      <button
        className={`${btnClassName}${
          viewParam === WEEK_VIEW ? " !bg-gray-200" : ""
        }`}
        onClick={() => setViewParam(WEEK_VIEW)}
      >
        Week
      </button>
      <button
        className={`${btnClassName}${
          viewParam === MONTH_VIEW ? " !bg-gray-200" : ""
        }`}
        onClick={() => setViewParam(MONTH_VIEW)}
      >
        Month
      </button>
    </div>
  );
};

export default ViewToggle;
