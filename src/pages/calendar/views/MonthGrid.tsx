import { DayOfWeek } from "../../../types";
import { getEnumKeys, makeShort } from "../../../utils";

type Props = {
  month: Date[][];
  selectedMonth: number;
};

export const MonthGrid = ({ month, selectedMonth }: Props) => (
  <>
    <div className="grid grid-cols-7 gap-2">
      {getEnumKeys(DayOfWeek).map((dayOfWeek) => (
        <div key={dayOfWeek} className="text-right pr-2">
          {makeShort(dayOfWeek)}
        </div>
      ))}
    </div>
    {month.map((week, idx) => (
      <div key={idx} className="grid grid-cols-7 gap-2 mb-2">
        {week.map((date) => {
          const isSelectedMonth = date.getMonth() === selectedMonth;
          return (
            <div
              key={date.toUTCString()}
              className={`aspect-square border ${
                isSelectedMonth
                  ? "border-gray-400"
                  : "border-gray-200 text-gray-200"
              } p-2`}
            >
              <div className="text-right">{date.getDate()}</div>
            </div>
          );
        })}
      </div>
    ))}
  </>
);
