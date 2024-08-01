import React from "react";
import Chart from "react-apexcharts";

const AnalyticsChart = ({open, inProgress, inReview, done, type}) => {
    const options = { labels: ["Open", "InProgress", "InReview", "Completed"] };
    const dataPoints = [];
    dataPoints.push(open);
    dataPoints.push(inProgress);
    dataPoints.push(inReview);
    dataPoints.push(done);

    const pieData = dataPoints
    const barData = [{data : dataPoints}]

    const series = type === "pie" ? pieData : barData;


    return (
    <div>
        <Chart options={options} series={series} type={type} width="400" />
    </div>
    )
}

export default AnalyticsChart;