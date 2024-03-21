var potential = document.getElementById("ph-chart")
var lineChart = new Chart(potential, {
    type: 'line',
    data:{
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [{
            label:'potential',
            data: [5,6,7,6.4,8,9.3, ],
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
            text: 'pH'
          }
        },
      }
    }
  
  })