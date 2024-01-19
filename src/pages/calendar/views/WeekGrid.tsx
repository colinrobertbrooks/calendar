import { getDayOfWeekName } from "../../../utils";

type Props = {
  week: Date[];
};

// TODO(style): fix overflow
export const WeekGrid = ({ week }: Props) => (
  <div className="grid grid-cols-7 gap-2 h-full">
    {week.map((date) => (
      <div key={date.toUTCString()}>
        <div className="text-center">
          {getDayOfWeekName(date.getDay(), true)} {date.getDate()}
        </div>
        <div className="h-full border border-grey-500 p-2" />
      </div>
    ))}
  </div>
);
