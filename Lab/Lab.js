var context = document.getElementById("myChart").getContext("2d");

var fruits = [
	{name:"Strawberry", quantity:15, color:"red"},
	{name:"Peach", quantity:10, color:"orange"},
  {name: "Banana", quantity:25, color:"yellow"},
  {name: "Pear", quantity:10, color:"green"},
  {name: "grape", quantity:20, color: "purple"}
];

var names = [];
var quantities = [];
var colors = [];

for (fruit of fruits) {
  names.push(fruit.name);
  quantities.push(fruit.quantity);
  colors.push(fruit.color);
}

new Chart("myChart", {
  type: "bar",
  data: {
    labels: names,
    datasets: [{
      backgroundColor: colors,
      data: quantities
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Quantities of Fruits"
    },
    scales: {
      yAxes: [{
        ticks: { beginAtZero: true}
      }]
    }
  }
});
