var dissolved = document.getElementById("do-chart")
var lineChart = new Chart(dissolved, {
    type: 'line',
    data:{
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [{
            label:'dissolved',
            data: [2.5, 3, 4.5, 5, 5.5, 5.1, 5.6, 4.8 ],
            fill: true,
            borderColor: 'rgb(106, 173, 217)',
            tension: 0.1
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'ppm'
          }
        },
      }
    }
  
  })