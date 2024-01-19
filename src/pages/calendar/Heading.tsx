type Props = {
  monthName: string;
  year: number;
};

const Heading = ({ monthName, year }: Props) => (
  <h1 className="text-3xl">
    <span className="fw-bold">{monthName}</span> {year}
  </h1>
);

export default Heading;
