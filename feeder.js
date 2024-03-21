// Menentukan variabel xValues
const xValues = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// Mendapatkan elemen canvas berdasarkan ID
var feeder = document.getElementById("feeder-chart");

// Membuat grafik menggunakan Chart.js
new Chart(feeder, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Berat Lobster',
      data: [50, 60, 55, 60, 75, 70, 63],
      borderColor: "rgba(0, 0, 255, 1.0)",
      backgroundColor: "rgba(0, 0, 255, 0.1)",
      fill: false
    },
    {
      label: 'Berat Pakan',
      data: [55, 65, 60, 65, 70, 75, 73],
      borderColor: "green",
      backgroundColor: "rgba(0, 255, 0, 0.1)",
      fill: false
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'g'
        }
      }
    }
  }
});