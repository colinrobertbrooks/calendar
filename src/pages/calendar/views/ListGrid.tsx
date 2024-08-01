import { getDayOfWeekName, getToday, isSameDate } from "../../../utils";
import AddEventButton from "../AddEventButton";
import Events from "../Events";

type Props = {
  data: Date[];
};

export const ListGrid = ({ data }: Props) => {
  const today = getToday();

  return (
    <div className="grid gap-3 pb-3">
      {data.map((date) => {
        const isToday = isSameDate(date, today);

        return (
          <div
            key={date.toUTCString()}
            className="flex flex-col group text-gray-800"
          >
            <div className="mb-1">
              {getDayOfWeekName(date, true)}{" "}
              <span
                className={isToday ? "p-1 rounded-full bg-orange-100 " : ""}
              >
                {date.getDate()}
              </span>
            </div>
            <div className="flex-1 border border-gray-400 px-2 py-3">
              <Events date={date} />
              <div className="min-h-[20px]">
                <AddEventButton date={date} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
