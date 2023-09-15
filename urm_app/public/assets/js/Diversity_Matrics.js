window.google.charts.load('current', { 'packages': ['corechart'] });
window.google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  drawRaceChart();
  drawAgeGroupChart();
  drawGenderChart();
  drawInstitutionDiversityChart();
}

function drawRaceChart() {
  var data = window.google.visualization.arrayToDataTable([
    ['Race', 'Number of Candidates'],
    ['White', 50],
    ['Black or African American', 30],
    ['American Indian or Alaska Native', 10],
    ['Asian', 20],
    ['Native Hawaiian or Other Pacific Islander', 5]
  ]);

  var options = {
    title: 'Number of Candidates per Race',
    pieHole: 0.4,
    colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099']
  };

  var chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

function drawAgeGroupChart() {
  var data = window.google.visualization.arrayToDataTable([
    ['Age Group', 'Number of Candidates'],
    ['18-24', 50],
    ['25-34', 80],
    ['35-44', 60],
    ['45-54', 45],
    ['55+', 30]
  ]);

  var options = {
    title: 'Number of Candidates per Age Group',
    legend: { position: 'none' },
    hAxis: { title: 'Number of Candidates' },
    vAxis: { title: 'Age Group' }
  };

  var chart = new window.google.visualization.BarChart(document.getElementById('barchart'));
  chart.draw(data, options);
}

function drawGenderChart() {
  var data = window.google.visualization.arrayToDataTable([
    ['Gender', 'Number of Candidates'],
    ['Male', 80],
    ['Female', 60]
  ]);

  var options = {
    title: 'Male and Female Candidates Ratio',
    pieHole: 0.4,
    colors: ['#3366cc', '#dc3912']
  };

  var chart = new window.google.visualization.PieChart(document.getElementById('gender-chart'));
  chart.draw(data, options);
}

function drawInstitutionDiversityChart() {
  var data = window.google.visualization.arrayToDataTable([
    ['Institution', 'White', 'Black or African American', 'American Indian or Alaska Native', 'Asian', 'Native Hawaiian or Other Pacific Islander'],
    ['Institution A', 20, 10, 5, 15, 2],
    ['Institution B', 30, 20, 10, 25, 3],
    ['Institution C', 15, 5, 2, 10, 1],
    ['Institution D', 25, 15, 8, 20, 4],
    ['Institution E', 10, 8, 3, 12, 2],
    ['Institution B', 30, 20, 10, 25, 3],
    ['Institution C', 15, 5, 2, 10, 1],
    ['Institution D', 25, 15, 8, 20, 4],
    ['Institution E', 10, 8, 3, 12, 2],
    ['Institution B', 30, 20, 10, 25, 3],
    ['Institution C', 15, 5, 2, 10, 1],
    ['Institution D', 25, 15, 8, 20, 4],
    ['Institution E', 10, 8, 3, 12, 2],
    ['Institution B', 30, 20, 10, 25, 3],
    ['Institution C', 15, 5, 2, 10, 1],
    ['Institution D', 25, 15, 8, 20, 4],
    ['Institution E', 10, 8, 3, 12, 2]
  ]);

  // Calculate the total for each institution
  for (var i = 1; i < data.getNumberOfRows(); i++) {
    var rowTotal = 0;
    for (var j = 1; j < data.getNumberOfColumns(); j++) {
      rowTotal += data.getValue(i, j);
    }
    for (var j = 1; j < data.getNumberOfColumns(); j++) {
      data.setValue(i, j, data.getValue(i, j) / rowTotal);
    }
  }

  var options = {
    title: 'Diversity in Institutions',
    isStacked: 'percent',
    legend: { position: 'top' },
    vAxis: { title: 'Institution' },
    hAxis: { title: 'Percentage', format: 'percent', minValue: 0, maxValue: 1 },
    colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099']
  };

  var chart = new window.google.visualization.BarChart(document.getElementById('chart'));
  chart.draw(data, options);
}

