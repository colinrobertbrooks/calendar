import { MONTH_VIEW } from "../../../constants";
import { DayOfWeek } from "../../../types";
import { getEnumKeys, makeShort } from "../../../utils";
import AddEventButton from "../AddEventButton";
import Events from "../Events";

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
          const isMonth = date.getMonth() === month;

          return (
            <div
              key={date.toUTCString()}
              className={`group aspect-square border ${
                isMonth
                  ? "border-gray-400 text-gray-800"
                  : "border-gray-200 text-gray-200"
              } p-2`}
            >
              <div className="text-right">{date.getDate()}</div>
              {isMonth && (
                <>
                  <Events date={date} view={MONTH_VIEW} />
                  <AddEventButton date={date} />
                </>
              )}
            </div>
          );
        })}
      </div>
    ))}
  </>
);
