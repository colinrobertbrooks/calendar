import { getMonthName } from "../../utils";

type Props = {
  date: Date;
};

const Heading = ({ date }: Props) => {
  const monthName = getMonthName(date);
  const fullYear = date.getFullYear();

  return (
    <h1 className="text-3xl">
      <span className="font-bold">{monthName}</span> {fullYear}
    </h1>
  );
};

export default Heading;
