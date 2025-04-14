
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';



const resultData = [
    { "student_id": 1, "name": "Arif", "physics": 85, "chemistry": 78, "math": 92 },
    { "student_id": 2, "name": "Borna", "physics": 74, "chemistry": 69, "math": 80 },
    { "student_id": 3, "name": "Chayon", "physics": 90, "chemistry": 88, "math": 95 },
    { "student_id": 4, "name": "Dipa", "physics": 66, "chemistry": 72, "math": 70 },
    { "student_id": 5, "name": "Emon", "physics": 79, "chemistry": 85, "math": 88 },
    { "student_id": 6, "name": "Farha", "physics": 82, "chemistry": 80, "math": 75 },
    { "student_id": 7, "name": "Gias", "physics": 91, "chemistry": 89, "math": 94 },
    { "student_id": 8, "name": "Hira", "physics": 70, "chemistry": 68, "math": 73 },
    { "student_id": 9, "name": "Imran", "physics": 77, "chemistry": 74, "math": 85 },
    { "student_id": 10, "name": "Joya", "physics": 88, "chemistry": 90, "math": 93 }
  ]
  
  
  
  

const ResultsChart = () => {
    return (
        <div className='mt-20  lg:ml-6 lg:mr-6 pb-20  ml-12  hidden sm:block'>
            <p className='text-3xl ml-8 mb-8   text-blue-800'>Student Marks Chart</p>
            <LineChart width={700} height={300} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>

                <Line dataKey="physics"  stroke='red'></Line>
                <Line dataKey="chemistry"  stroke='blue'></Line>
                <Line dataKey="math"  stroke='black'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;




