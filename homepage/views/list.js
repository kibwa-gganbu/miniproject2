<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GongJu Project</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
</head>
    <style>
      td, th {
        text-align: center;
      }
    </style>

<body>
    
    <table border=1>
      <th> floor </th>
      <th> date  </th>
      <th> hour </th>
      <th> avg_num </th>
      <% for(let i=0; i < data.length ; i++){ %>
          <tr>
              <td> <%= data[i].floor %> </td>
              <td> <%= data[i].date %> </td>
              <td> <%= data[i].hour %> </td>
              <td> <%= data[i].avg_num %> </td>
          </tr>
      <% } %>
    </table>

    <div class="chart-container" style="position: relative; height:10vh; width:45vh">
        <canvas id="myChart"></canvas>
    </div>

  <script>
  
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: [0, 2, 4, 5, 'Purple', 'Orange', 4],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 8, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
  </script>
  

</body>
</html>

