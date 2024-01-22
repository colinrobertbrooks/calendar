import { getDayOfWeekName } from "../../../utils";
import AddEventButton from "../AddEventButton";

type Props = {
  data: Date[];
  month: number;
};

// TODO(style): fix overflow
export const WeekGrid = ({ data, month }: Props) => (
  <div className="grid grid-cols-7 gap-2 h-full">
    {data.map((date) => {
      const isMonth = date.getMonth() === month;

      return (
        <div
          key={date.toUTCString()}
          className={`group ${isMonth ? "text-gray-800" : "text-gray-200"}`}
        >
          <div className="text-center">
            {getDayOfWeekName(date.getDay(), true)} {date.getDate()}
          </div>
          <div
            className={`h-full border ${
              isMonth ? "border-gray-400" : "border-gray-200"
            } p-2`}
          >
            {isMonth && <AddEventButton />}
          </div>
        </div>
      );
    })}
  </div>
);
