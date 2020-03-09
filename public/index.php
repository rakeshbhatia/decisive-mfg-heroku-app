<?php
  $url = parse_url(getenv("CLEARDB_DATABASE_URL"));

  $host = $url["host"];
  $user = $url["user"];
  $password = $url["pass"];
  $dbname = substr($url["path"], 1);

  //$conn = new mysqli($server, $username, $password, $db);

  $conn = mysqli_connect($host, $user, $password, $dbname);

  /* check connection */
  if (!$conn) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
?>

<!DOCTYPE html>
<html>
  <head>
    <link href="js/styles.css" rel="stylesheet" />
    <link href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css" rel="stylesheet" />

    <!--<link href="https://nightly.datatables.net/css/jquery.dataTables.css" rel="stylesheet" />
    <script src="https://nightly.datatables.net/js/jquery.dataTables.js"></script>-->

    <link href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/select/1.3.1/css/select.dataTables.min.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/buttons/1.6.1/css/buttons.dataTables.min.css" rel="stylesheet" />

    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    <!--<script srf="https://cdnjs.cloudflare.com/ajax/libs/yadcf/0.9.4/jquery.dataTables.yadcf.js"></script>-->

    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/echarts@4.6.0/dist/echarts.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts-stat/dist/ecStat.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/dataTool.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"></script>

    <script src="js/scripts.js"></script>

    <meta charset=utf-8 />
    <title>Decisive Manufacturing - Radar Chart</title>
  </head>
  <body>
    <div class="page-title" align="center">
      <h1>Material Filtering/Comparison Tool</h1>
      <h2>Use any combination of the range sliders below to filter materials as desired. 
        Select up to five different materials and click 'Plot Selected Materials' to plot a
        radar chart of your selected materials.</h2>
    </div>
    <div class="container">
      <p>
        <label>Density: </label><input type="text" id="liveRange1" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range1" style="width:100%"></div>
      <p>
        <label>Elongation at Break: </label><input type="text" id="liveRange2" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range2" style="width:100%"></div>
      <p>
        <label>Tensile Strength, Ultimate: </label><input type="text" id="liveRange3" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range3" style="width:100%"></div>
      <p>
        <label>Tensile Strength, Yield: </label><input type="text" id="liveRange4" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range4" style="width:100%"></div>
      <p>
        <label>Modulus (elasticity, tensile): </label><input type="text" id="liveRange5" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range5" style="width:100%"></div>
      <p>
        <label>Melting Temperature: </label><input type="text" id="liveRange6" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range6" style="width:100%"></div>
      <p>
        <label>Thermal Conductivity: </label><input type="text" id="liveRange7" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range7" style="width:100%"></div>
      <p>
        <label>Coefficient of Thermal Expansion (CTE): </label><input type="text" id="liveRange8" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range8" style="width:100%"></div>
      <p>
        <label>Specific Heat Capacity: </label><input type="text" id="liveRange9" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range9" style="width:100%"></div>
      <p>
        <label>Electrical Resistivity: </label><input type="text" id="liveRange10" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>
      <div id="range10" style="width:100%; margin-bottom:20px;"></div>
      <table id="sort-table" class="display nowrap" width="100%">
        <thead>
          <tr>
            <th>Material</th>
            <th>Density</th>
            <th>Elongation at Break</th>
            <th>Tensile Strength (Ultimate)</th>
            <th>Tensile Strength (Yield)</th>
            <th>Modulus (elasticity, tensile)</th>
            <th>Melting Temperature</th>
            <th>Thermal Conductivity</th>
            <th>Coefficient of Thermal Expansion (CTE)</th>
            <th>Specific Heat Capacity</th>
            <th>Electrical Resistivity</th>
          </tr>
        </thead>

        <tfoot>
          <tr>
            <th>Material</th>
            <th>Density</th>
            <th>Elongation at Break</th>
            <th>Tensile Strength, Ultimate</th>
            <th>Tensile Strength, Yield</th>
            <th>Modulus (elasticity, tensile)</th>
            <th>Melting Temperature</th>
            <th>Thermal Conductivity</th>
            <th>Coefficient of Thermal Expansion (CTE)</th>
            <th>Specific Heat Capacity</th>
            <th>Electrical Resistivity</th>
          </tr>
        </tfoot>

        <tbody>
          <?php
            $query = 'SELECT * FROM app_data_v1 ORDER BY density ASC';
            $result = mysqli_query($conn, $query);
            while($row = mysqli_fetch_array($result, MYSQLI_BOTH)){
              $material = $row['material'];
              $density = floatval($row['density']);
              $elongation_at_break = floatval($row['elongation_at_break']);
              $tensile_strength_ultimate = floatval($row['tensile_strength_ultimate']);
              $tensile_strength_yield = floatval($row['tensile_strength_yield']);
              $modulus_elasticity_tensile = floatval($row['modulus_elasticity_tensile']);
              $melting_temperature = floatval($row['melting_temperature']);
              $thermal_conductivity = floatval($row['thermal_conductivity']);
              $coefficient_of_thermal_expansion = floatval($row['coefficient_of_thermal_expansion']);
              $specific_heat_capacity = floatval($row['specific_heat_capacity']);
              $electrical_resistivity = floatval($row['electrical_resistivity']);
          ?>
          <tr>
            <td><?php echo $material; ?></td>
            <td><?php echo $density; ?></td>
            <td><?php echo $elongation_at_break; ?></td>
            <td><?php echo $tensile_strength_ultimate; ?></td>
            <td><?php echo $tensile_strength_yield; ?></td>
            <td><?php echo $modulus_elasticity_tensile; ?></td>
            <td><?php echo $melting_temperature; ?></td>
            <td><?php echo $thermal_conductivity; ?></td>
            <td><?php echo $coefficient_of_thermal_expansion; ?></td>
            <td><?php echo $specific_heat_capacity; ?></td>
            <td><?php echo $electrical_resistivity; ?></td>
          </tr>
          <?php
          }
          ?>
        </tbody>
      </table>
    </div>
    <div id="radar-chart" style="text-align:center; width:1500px; height:900px; margin-top:50px; margin-left:auto; margin-right:auto;"></div>
    <script>
      var radarChart = echarts.init(document.getElementById('radar-chart'));

      var option = {
        tooltip: {},
        legend: {},
        radar: [
          {
            indicator: [
              { text: 'Density', max: 25 }, 
              { text: 'Elongation at Break', max: 200 }, 
              { text: 'Tensile Strength (Ultimate)', max: 5000 }, 
              { text: 'Tensile Strength (Yield)', max: 2500 }, 
              { text: 'Modulus (elasticity, tensile)', max: 500 }, 
              { text: 'Melting Temperature', max: 3500 }, 
              { text: 'Thermal Conductivity', max: 500 },
              { text: 'Coefficient of Thermal Expansion (CTE)', max: 40 },
              { text: 'Specific Heat Capacity', max: 2 }, 
              { text: 'Electrical Resistivity', max: 0.00025 }
            ],
            center: ['50%', '50%'],
            radius: 300
          }
        ],
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: []
          }
        ]
      };
      if (option && typeof option === 'object') {
        radarChart.setOption(option, true);
      }
    </script>
  </body>
</html>