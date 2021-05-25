import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SingleChartView = () => {
    const { currencyId } = useParams();

    const currencies = JSON.parse(window.sessionStorage.getItem("currencies"));
    const currency = currencies[currencyId];

    const data = [
    {
        name: "0",
        price: currency.value,
    },
    {
        name: 1,
        price: currency.value + 100,
    },
    {
        name: 2,
        price: currency.value - 200,
    },
    ];

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
            <Line type="linear" dataKey="price" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
        </div>
        </>
    );
}

export default SingleChartView;
