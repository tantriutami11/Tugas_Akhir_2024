var temperature = document.getElementById("temp-chart")

var lineChart = new Chart(temperature, {
  type: 'line',
  data: {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    datasets: [{
      label: 'Temperature',
      data: [25, 27, 26, 26.5, 27.4, 18, 15, 24],
      fill: true,
      borderColor: 'rgb(106, 173, 217)',
      tension: 0.1,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '\u2103'
        }
      },
    }
  }

})