import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
  const studentsData = [
    {
      name: 'Alice Johnson',
      id: 'S001',
      marks: { Physics: 85, Chemistry: 90, Mathematics: 78 },
    },
    {
      name: 'Bob Smith',
      id: 'S002',
      marks: { Physics: 76, Chemistry: 82, Mathematics: 88 },
    },
    {
      name: 'Carol Evans',
      id: 'S003',
      marks: { Physics: 92, Chemistry: 87, Mathematics: 94 },
    },
    {
      name: 'David Brown',
      id: 'S004',
      marks: { Physics: 67, Chemistry: 72, Mathematics: 70 },
    },
    {
      name: 'Eva White',
      id: 'S005',
      marks: { Physics: 88, Chemistry: 85, Mathematics: 90 },
    },
    {
      name: 'Frank Black',
      id: 'S006',
      marks: { Physics: 74, Chemistry: 78, Mathematics: 76 },
    },
    {
      name: 'Grace Green',
      id: 'S007',
      marks: { Physics: 95, Chemistry: 93, Mathematics: 89 },
    },
    {
      name: 'Henry Gray',
      id: 'S008',
      marks: { Physics: 60, Chemistry: 65, Mathematics: 64 },
    },
    {
      name: 'Irene Blue',
      id: 'S009',
      marks: { Physics: 80, Chemistry: 80, Mathematics: 82 },
    },
    {
      name: 'Jack Red',
      id: 'S010',
      marks: { Physics: 78, Chemistry: 77, Mathematics: 85 },
    },
  ];

  return (
    <div className="m-4 p-4">
      <LChart width={800} height={400} data={studentsData}>
        <XAxis className='text-xs' dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="marks.Physics" stroke="green"></Line>
        <Line dataKey="marks.Chemistry" stroke="blue"></Line>
        <Line dataKey="marks.Mathematics" stroke="red"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
