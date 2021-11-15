import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { CurrencyColors } from "../global";
import { GenerateData } from "./data";

const SingleChartView = () => {
    const { currencyId } = useParams();

    const data = GenerateData(currencyId);

    return (
        <>
        <div className="ChartWrapper">
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
            <Line type="linear" dataKey="value" stroke={CurrencyColors[currencyId]} dot={false} />
            </LineChart>
        </ResponsiveContainer>
        </div>
        </>
    );
}

const AllCurrenciesChartView = () => {
    const currencies = JSON.parse(window.sessionStorage.getItem("currencies"));

    var data = [];
    var currencyTrends = [];
    var graphLines = [];
    for (var i=0; i<currencies.length; i++) {
        currencyTrends.push(GenerateData(i));
        graphLines.push(
            <Line type="linear" dataKey={`value.${i}`} stroke={CurrencyColors[i]} dot={false} />
        );
    }

    // each data point
    for (var d=0; d<currencyTrends[0].length; d++) {
        var datapoint = {
            value: []
        };
        // each currency itself
        for (var c=0; c<currencyTrends.length; c++) {
            // save the 
            datapoint.value[c] = currencyTrends[c][d].value;
        }

        data.push(datapoint);
    }

    return (
        <>
        <div className="ChartWrapper">
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
            <XAxis dataKey="currencies" />
            <YAxis />
            <Tooltip />
            <Legend />
            {graphLines}
            </LineChart>
        </ResponsiveContainer>
        </div>
        </>
    );
}

export { AllCurrenciesChartView, SingleChartView };
