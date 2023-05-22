// Chart 1

var xValues = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
var yValues = [15, 5, 10, 15, 25, 15, 20];
var barColors = ["#8dc63f", "#6ba63c", "#8dc63f", "#6ba63c", "#8dc63f", "#6ba63c","#8dc63f" ];


new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    /*
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Cette semaine"
      }
    }
    */
    options: {
        title: {
            display: true,
            text: "Cette semaine"
        }
    }

});

// End Chart 1


// Chart 2

const xValues2 = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues2 = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChartBord2", {
    type: "line",
    data: {
        labels: xValues2,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues2
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 6, max: 16 } }],
        }
    }
});


// End Chart 2







