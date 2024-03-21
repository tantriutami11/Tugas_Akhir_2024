// Menentukan variabel xValues
const xValues = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// Mendapatkan elemen canvas berdasarkan ID
var temperature = document.getElementById("temperatur");
var current = document.getElementById("current");
var voltage = document.getElementById("voltage");


// Membuat grafik temperature
new Chart(temperature, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Temperature',
      data: [50, 60, 55, 60, 75, 70, 63],
      borderColor: "rgb(240,230,140)",
      backgroundColor: "rgb(218,165,32)",
      fill: false
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
      }
    }
  }
});

// Membuat grafik Current
new Chart(current, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Current',
      data: [50, 60, 55, 60, 75, 70, 63],
      borderColor: "rgb(135,206,235)",
      backgroundColor: "rgb(70,130,180)",
      fill: false
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'A'
        }
      }
    }
  }
});

// Membuat grafik voltage
new Chart(voltage, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Voltage',
      data: [5.03, 60, 55, 60, 75, 70, 63],
      borderColor: "rgb(245,222,179)",
      backgroundColor: "rgb(210,105,30)",
      fill: false
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'V'
        }
      }
    }
  }
});