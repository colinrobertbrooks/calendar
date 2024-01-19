type Props = {
  monthName: string;
  fullYear: number;
};

const Heading = ({ monthName, fullYear }: Props) => (
  <h1 className="text-3xl">
    <span className="fw-bold">{monthName}</span> {fullYear}
  </h1>
);

export default Heading;
