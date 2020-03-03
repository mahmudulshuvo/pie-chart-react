import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import input from "./input";

class App extends Component {
  data = {
    labels: [],
    datasets: [
      {
        backgroundColor: [],
        hoverBackgroundColor: [],
        data: []
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.prepareDataset(input);
  }

  prepareDataset(input) {
    input.map(item => {
      let isSuccess = true;
      this.data.labels.push(`item: ${item.id}`);
      item.end_points.map(key => {
        if (item[key] && item[key] === true && isSuccess !== false) {
          isSuccess = true;
        } else {
          isSuccess = false;
        }
      });

      if (isSuccess) {
        this.data.datasets[0]["backgroundColor"].push("#2FDE00");
        this.data.datasets[0]["hoverBackgroundColor"].push("#175000");
      } else {
        this.data.datasets[0]["backgroundColor"].push("#B21F00");
        this.data.datasets[0]["hoverBackgroundColor"].push("#501800");
      }
      this.data.datasets[0].data.push(item.id);
    });
    this.setState(this.data);
  }

  render() {
    return (
      <div style={{ width: 700, height: 700, marginLeft: 100, marginTop: 100 }}>
        <h1
          style={{
            fontSize: 30,
            color: "gray",
            textAlign: "left",
            marginLeft: 30
          }}
        >
          Pie Chart
        </h1>
        <Pie
          data={this.state}
          width={500}
          height={500}
          options={{
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  if (
                    data.datasets[0]["backgroundColor"][tooltipItem.index] ===
                    "#2FDE00"
                  ) {
                    return "success";
                  } else {
                    return "failure";
                  }
                },
                title: (tooltipItem, data) => {
                  return data.labels[tooltipItem[0].index];
                },
                afterLabel: (tooltipItem, data) => {
                  return (
                    "data: " +
                    JSON.stringify(input[tooltipItem.index], undefined, 2)
                  );
                }
              }
            },
            legend: {
              display: true,
              position: "right"
            },
            maintainAspectRatio: false
          }}
          getElementsAtEvent={elems => {
            if (elems.length !== 0) {
              const index = elems[0]["_index"];
              alert("Please check the console");
              console.log("item : ", input[index]);
            }
          }}
        />
      </div>
    );
  }
}

export default App;
