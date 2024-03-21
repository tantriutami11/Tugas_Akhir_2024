var amonia = document.getElementById("amm-chart")

var lineChart = new Chart(amonia, {
  type: 'line',
  data: {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    datasets: [{
      label: 'Amonia',
      data: [0.50, 0.87, 0.90, 1, 1.20, 1.30, 1.15],
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
          text: 'ppm'
        }
      },
    }
  }

})