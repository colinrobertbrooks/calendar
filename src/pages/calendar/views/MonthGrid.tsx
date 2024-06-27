import { MONTH_VIEW } from "../../../constants";
import { DayOfWeek } from "../../../types";
import { getEnumKeys, getToday, isSameDate, makeShort } from "../../../utils";
import AddEventButton from "../AddEventButton";
import Events from "../Events";

type Props = {
  data: Date[][];
  month: number;
};

export const MonthGrid = ({ data, month }: Props) => {
  const today = getToday();

  return (
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
            const isToday = isSameDate(date, today);

            return (
              <div
                key={date.toUTCString()}
                className={`group aspect-square border ${
                  isMonth
                    ? "border-gray-400 text-gray-800"
                    : "border-gray-200 text-gray-200"
                } p-2`}
              >
                <div className="text-right mb-1">
                  <span
                    className={
                      isMonth && isToday ? "p-1 rounded-full bg-orange-100" : ""
                    }
                  >
                    {date.getDate()}
                  </span>
                </div>
                {isMonth && (
                  <>
                    <Events date={date} maxEvents={2} />
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
};
