new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["White", "Black or African American", "American Indian and Alaska Native", "Asian", "Native Hawaiian and Other Pacific Islander", "Two or more races"],
      datasets: [
        {
          label: "Resident population of the United States by race in 2021 (in millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [250.56,44.78,4.34,20.17,0.86,9.73]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Resident population of the United States by race in 2021 (in millions) - Tahamina Chowdhury'
      }
    }
});


new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: ["White", "Black or African American", "American Indian and Alaska Native", "Asian", "Native Hawaiian and Other Pacific Islander", "Two or more races"],
        datasets: [
        {
            label: "Resident population of the United States by race in 2021 (in millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [250.56,44.78,4.34,20.17,0.86,9.73]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Resident population of the United States by race in 2021 (in millions) - Tahamina Chowdhury'
      }
    }
});