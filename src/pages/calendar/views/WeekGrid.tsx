import { WEEK_VIEW } from "../../../constants";
import { getDayOfWeekName, getToday, isSameDate } from "../../../utils";
import AddEventButton from "../AddEventButton";
import Events from "../Events";

type Props = {
  data: Date[];
  month: number;
};

export const WeekGrid = ({ data, month }: Props) => {
  const today = getToday();

  return (
    <div className="flex-1 grid grid-cols-7 gap-2">
      {data.map((date) => {
        const isMonth = date.getMonth() === month;
        const isToday = isSameDate(date, today);

        return (
          <div
            key={date.toUTCString()}
            className={`flex flex-col group ${
              isMonth ? "text-gray-800" : "text-gray-200"
            }`}
          >
            <div className="text-center mb-1">
              {getDayOfWeekName(date.getDay(), true)}{" "}
              <span
                className={
                  isMonth && isToday ? "p-1 rounded-full bg-orange-100 " : ""
                }
              >
                {date.getDate()}
              </span>
            </div>
            <div
              className={`flex-1 border ${
                isMonth ? "border-gray-400" : "border-gray-200"
              } p-2`}
            >
              {isMonth && (
                <>
                  <Events date={date} view={WEEK_VIEW} />
                  <AddEventButton date={date} />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
