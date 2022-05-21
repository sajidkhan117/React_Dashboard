import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Daily", "Weekly", "Monthly", "Yearly"],
        },
      },
      series: [
        {
          name: "LogIn",
          data: [20, 60, 15, 60],
        },
        {
          name: "SignUp",
          data: [50, 10, 25, 70],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              height="150%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
