import { DayOfWeek } from "../../../types";
import { getEnumKeys, makeShort } from "../../../utils";

type Props = {
  data: Date[][];
  month: number;
};

export const MonthGrid = ({ data, month }: Props) => (
  <>
    <div className="grid grid-cols-7 gap-2">
      {getEnumKeys(DayOfWeek).map((dayOfWeek) => (
        <div key={dayOfWeek} className="text-right pr-2">
          {makeShort(dayOfWeek)}
        </div>
      ))}
    </div>
    {data.map((week, idx) => (
      <div key={idx} className="grid grid-cols-7 gap-2 mb-2 last:mb-0">
        {week.map((date) => {
          const isSelectedMonth = date.getMonth() === month;
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
