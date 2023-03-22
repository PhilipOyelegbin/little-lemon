import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const Chart = () => {
    const chartData = [
        {id: 1, label: "Little Lemon", vote: "427"},
        {id: 2, label: "Mr Bigs", vote: "200"},
        {id: 3, label: "Dominos", vote: "230"},
        {id: 4, label: "Tantalizer", vote: "300"},
        {id: 5, label: "Chicken Republic", vote: "150"},
    ]

    const data = {
        labels:  chartData.map(data => data.label),
        datasets: [
            {
                label: "Top Rated Restaurant",
                data: chartData.map(data => data.vote),
                backgroundColor: ["#face14","#495E57"],
                borderColor: "black",
                borderWidth: 1,
                innerWidth: 2,
            }
        ]
    }

  return (
    <section className="chart-section">
        <h3>We are highly rated!</h3>
        <div>
            <Bar data={data} className="bar-chart"></Bar>
        </div>
    </section>
  )
}

export default Chart