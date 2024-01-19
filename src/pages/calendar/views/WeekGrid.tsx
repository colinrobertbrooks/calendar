import { getDayOfWeekName } from "../../../utils";

type Props = {
  data: Date[];
};

// TODO(style): fix overflow
export const WeekGrid = ({ data }: Props) => (
  <div className="grid grid-cols-7 gap-2 h-full">
    {data.map((date) => (
      <div key={date.toUTCString()}>
        <div className="text-center">
          {getDayOfWeekName(date.getDay(), true)} {date.getDate()}
        </div>
        <div className="h-full border border-grey-500 p-2" />
      </div>
    ))}
  </div>
);
