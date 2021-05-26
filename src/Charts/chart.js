import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { GenerateData } from "./data";

const SingleChartView = () => {
    const { currencyId } = useParams();

    const data = GenerateData(currencyId);

    return (
        <>
        <div className="SingleChartWrapper">
        <ResponsiveContainer>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey="price" stroke="#82ca9d" dot={false} />
            </LineChart>
        </ResponsiveContainer>
        </div>
        </>
    );
}

export default SingleChartView;
