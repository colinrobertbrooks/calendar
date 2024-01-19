type Props = {
  selectedMonthName: string;
  selectedYear: number;
};

const Heading = ({ selectedMonthName, selectedYear }: Props) => (
  <h1 className="text-3xl">
    <span className="fw-bold">{selectedMonthName}</span> {selectedYear}
  </h1>
);

export default Heading;
