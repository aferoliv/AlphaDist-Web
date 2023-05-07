// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

new Chart(document.getElementById("myAreaChart1"),
  {
    type: 'line',
    data: {
      labels: [0.000, 0.047, 0.093, 0.140, 0.187, 0.233, 0.280, 0.327, 0.373, 0.420, 0.467, 0.513, 0.560, 0.607, 0.653, 0.700, 0.747, 0.793, 0.840, 0.887, 0.933, 0.980, 1.027, 1.073, 1.120, 1.167, 1.213, 1.260, 1.307, 1.353, 1.400, 1.447, 1.493, 1.540, 1.587, 1.633, 1.680, 1.727, 1.773, 1.820, 1.867, 1.913, 1.960, 2.007, 2.053, 2.100, 2.147, 2.193, 2.240, 2.287, 2.333, 2.380, 2.427, 2.473, 2.520, 2.567, 2.613, 2.660, 2.707, 2.753, 2.800, 2.847, 2.893, 2.940, 2.987, 3.033, 3.080, 3.127, 3.173, 3.220, 3.267, 3.313, 3.360, 3.407, 3.453, 3.500, 3.547, 3.593, 3.640, 3.687, 3.733, 3.780, 3.827, 3.873, 3.920, 3.967, 4.013, 4.060, 4.107, 4.153, 4.200, 4.247, 4.293, 4.340, 4.387, 4.433, 4.480, 4.527, 4.573, 4.620, 4.667, 4.713, 4.760, 4.807, 4.853, 4.900, 4.947, 4.993, 5.040, 5.087, 5.133, 5.180, 5.227, 5.273, 5.320, 5.367, 5.413, 5.460, 5.507, 5.553, 5.600, 5.647, 5.693, 5.740, 5.787, 5.833, 5.880, 5.927, 5.973, 6.020, 6.067, 6.113, 6.160, 6.207, 6.253, 6.300, 6.347, 6.393, 6.440, 6.487, 6.533, 6.580, 6.627, 6.673, 6.720, 6.767, 6.813, 6.860, 6.907, 6.953, 7.000, 7.047, 7.093, 7.140, 7.187, 7.233, 7.280, 7.327, 7.373, 7.420, 7.467, 7.513, 7.560, 7.607, 7.653, 7.700, 7.747, 7.793, 7.840, 7.887, 7.933, 7.980, 8.027, 8.073, 8.120, 8.167, 8.213, 8.260, 8.307, 8.353, 8.400, 8.447, 8.493, 8.540, 8.587, 8.633, 8.680, 8.727, 8.773, 8.820, 8.867, 8.913, 8.960, 9.007, 9.053, 9.100, 9.147, 9.193, 9.240, 9.287, 9.333, 9.380, 9.427, 9.473, 9.520, 9.567, 9.613, 9.660, 9.707, 9.753, 9.800, 9.847, 9.893, 9.940, 9.987, 10.033, 10.080, 10.127, 10.173, 10.220, 10.267, 10.313, 10.360, 10.407, 10.453, 10.500, 10.547, 10.593, 10.640, 10.687, 10.733, 10.780, 10.827, 10.873, 10.920, 10.967, 11.013, 11.060, 11.107, 11.153, 11.200, 11.247, 11.293, 11.340, 11.387, 11.433, 11.480, 11.527, 11.573, 11.620, 11.667, 11.713, 11.760, 11.807, 11.853, 11.900, 11.947, 11.993, 12.040, 12.087, 12.133, 12.180, 12.227, 12.273, 12.320, 12.367, 12.413, 12.460, 12.507, 12.553, 12.600, 12.647, 12.693, 12.740, 12.787, 12.833, 12.880, 12.927, 12.973, 13.020, 13.067, 13.113, 13.160, 13.207, 13.253, 13.300, 13.347, 13.393, 13.440, 13.487, 13.533, 13.580, 13.627, 13.673, 13.720, 13.767, 13.813, 13.860, 13.907, 13.953],
      datasets: [
        {
          label: 'Valor A',
          data: [1.00000, 0.99980, 0.99885, 0.99790, 0.99694, 0.99597, 0.99499, 0.99401, 0.99301, 0.99201, 0.99100, 0.98998, 0.98896, 0.98792, 0.98687, 0.98582, 0.98475, 0.98368, 0.98259, 0.98150, 0.98040, 0.97928, 0.97816, 0.97703, 0.97589, 0.97473, 0.97357, 0.97239, 0.97121, 0.97001, 0.96881, 0.96759, 0.96636, 0.96512, 0.96387, 0.96261, 0.96134, 0.96006, 0.95876, 0.95745, 0.95613, 0.95480, 0.95345, 0.95209, 0.95072, 0.94934, 0.94794, 0.94653, 0.94511, 0.94368, 0.94223, 0.94076, 0.93929, 0.93780, 0.93629, 0.93477, 0.93324, 0.93169, 0.93013, 0.92855, 0.92696, 0.92535, 0.92373, 0.92209, 0.92044, 0.91877, 0.91708, 0.91538, 0.91366, 0.91193, 0.91017, 0.90840, 0.90662, 0.90481, 0.90299, 0.90115, 0.89930, 0.89742, 0.89553, 0.89362, 0.89169, 0.88974, 0.88778, 0.88579, 0.88379, 0.88176, 0.87972, 0.87766, 0.87558, 0.87348, 0.87136, 0.86922, 0.86706, 0.86488, 0.86268, 0.86046, 0.85822, 0.85594, 0.85355, 0.85105, 0.84843, 0.84569, 0.84284, 0.83988, 0.83679, 0.83360, 0.83029, 0.82686, 0.82332, 0.81967, 0.81590, 0.81201, 0.80802, 0.80391, 0.79969, 0.79536, 0.79092, 0.78637, 0.78170, 0.77693, 0.77204, 0.76705, 0.76196, 0.75675, 0.75144, 0.74603, 0.74052, 0.73490, 0.72918, 0.72336, 0.71744, 0.71142, 0.70530, 0.69909, 0.69278, 0.68638, 0.67989, 0.67331, 0.66664, 0.65988, 0.65303, 0.64610, 0.63909, 0.63199, 0.62482, 0.61757, 0.61024, 0.60284, 0.59537, 0.58783, 0.58023, 0.57256, 0.56483, 0.55704, 0.54920, 0.54130, 0.53335, 0.52536, 0.51732, 0.50923, 0.50111, 0.49295, 0.48475, 0.47653, 0.46828, 0.46001, 0.45172, 0.44341, 0.43509, 0.42676, 0.41842, 0.41008, 0.40175, 0.39342, 0.38511, 0.37682, 0.36854, 0.36029, 0.35206, 0.34386, 0.33570, 0.32758, 0.31950, 0.31147, 0.30349, 0.29557, 0.28771, 0.27991, 0.27218, 0.26452, 0.25693, 0.24942, 0.24199, 0.23465, 0.22740, 0.22024, 0.21317, 0.20620, 0.19933, 0.19257, 0.18592, 0.17938, 0.17295, 0.16664, 0.16045, 0.15439, 0.14845, 0.14264, 0.13697, 0.13143, 0.12602, 0.12075, 0.11562, 0.11063, 0.10578, 0.10107, 0.09650, 0.09207, 0.08778, 0.08363, 0.07962, 0.07575, 0.07201, 0.06841, 0.06494, 0.06161, 0.05841, 0.05534, 0.05239, 0.04957, 0.04687, 0.04430, 0.04184, 0.03950, 0.03727, 0.03515, 0.03313, 0.03121, 0.02940, 0.02768, 0.02604, 0.02450, 0.02303, 0.02165, 0.02033, 0.01908, 0.01790, 0.01679, 0.01573, 0.01474, 0.01379, 0.01290, 0.01207, 0.01128, 0.01054, 0.00985, 0.00921, 0.00860, 0.00803, 0.00749, 0.00699, 0.00653, 0.00609, 0.00568, 0.00529, 0.00493, 0.00460, 0.00428, 0.00399, 0.00371, 0.00346, 0.00322, 0.00299, 0.00279, 0.00259, 0.00241, 0.00224, 0.00208, 0.00193, 0.00179, 0.00166, 0.00154, 0.00143, 0.00132, 0.00123, 0.00113, 0.00105, 0.00097, 0.00089, 0.00082, 0.00076, 0.00070, 0.00064, 0.00059, 0.00054, 0.00049, 0.00045, 0.00041, 0.00037, 0.00034],
          lineTension: 0,
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 1)',
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: 'rgba(255, 99, 132, 1)',
          pointRadius: 2,
          pointHoverRadius: 0,
          borderWidth: 0
        },
        {
          label: 'Valor B',
          data: [0.00034, 0.00037, 0.00041, 0.00045, 0.00049, 0.00054, 0.00059, 0.00064, 0.00070, 0.00076, 0.00082, 0.00089, 0.00097, 0.00105, 0.00113, 0.00123, 0.00132, 0.00143, 0.00154, 0.00166, 0.00179, 0.00193, 0.00208, 0.00224, 0.00241, 0.00259, 0.00279, 0.00299, 0.00322, 0.00346, 0.00371, 0.00399, 0.00428, 0.00460, 0.00493, 0.00529, 0.00568, 0.00609, 0.00653, 0.00699, 0.00749, 0.00803, 0.00860, 0.00921, 0.00985, 0.01054, 0.01128, 0.01207, 0.01290, 0.01379, 0.01474, 0.01573, 0.01679, 0.01790, 0.01908, 0.02033, 0.02165, 0.02303, 0.02450, 0.02604, 0.02768, 0.02940, 0.03121, 0.03313, 0.03515, 0.03727, 0.03950, 0.04184, 0.04430, 0.04687, 0.04957, 0.05239, 0.05534, 0.05841, 0.06161, 0.06494, 0.06841, 0.07201, 0.07575, 0.07962, 0.08363, 0.08778, 0.09207, 0.09650, 0.10107, 0.10578, 0.11063, 0.11562, 0.12075, 0.12602, 0.13143, 0.13697, 0.14264, 0.14845, 0.15439, 0.16045, 0.16664, 0.17295, 0.17938, 0.18592, 0.19257, 0.19933, 0.20620, 0.21317, 0.22024, 0.22740, 0.23465, 0.24199, 0.24942, 0.25693, 0.26452, 0.27218, 0.27991, 0.28771, 0.29557, 0.30349, 0.31147, 0.31950, 0.32758, 0.33570, 0.34386, 0.35206, 0.36029, 0.36854, 0.37682, 0.38511, 0.39342, 0.40175, 0.41008, 0.41842, 0.42676, 0.43509, 0.44341, 0.45172, 0.46001, 0.46828, 0.47653, 0.48475, 0.49295, 0.50111, 0.50923, 0.51732, 0.52536, 0.53335, 0.54130, 0.54920, 0.55704, 0.56483, 0.57256, 0.58023, 0.58783, 0.59537, 0.60284, 0.61024, 0.61757, 0.62482, 0.63199, 0.63909, 0.64610, 0.65303, 0.65988, 0.66664, 0.67331, 0.67989, 0.68638, 0.69278, 0.69909, 0.70530, 0.71142, 0.71744, 0.72336, 0.72918, 0.73490, 0.74052, 0.74603, 0.75144, 0.75675, 0.76196, 0.76705, 0.77204, 0.77693, 0.78170, 0.78637, 0.79092, 0.79536, 0.79969, 0.80391, 0.80802, 0.81201, 0.81590, 0.81967, 0.82332, 0.82686, 0.83029, 0.83360, 0.83679, 0.83988, 0.84284, 0.84569, 0.84843, 0.85105, 0.85355, 0.85594, 0.85822, 0.86046, 0.86268, 0.86488, 0.86706, 0.86922, 0.87136, 0.87348, 0.87558, 0.87766, 0.87972, 0.88176, 0.88379, 0.88579, 0.88778, 0.88974, 0.89169, 0.89362, 0.89553, 0.89742, 0.89930, 0.90115, 0.90299, 0.90481, 0.90662, 0.90840, 0.91017, 0.91193, 0.91366, 0.91538, 0.91708, 0.91877, 0.92044, 0.92209, 0.92373, 0.92535, 0.92696, 0.92855, 0.93013, 0.93169, 0.93324, 0.93477, 0.93629, 0.93780, 0.93929, 0.94076, 0.94223, 0.94368, 0.94511, 0.94653, 0.94794, 0.94934, 0.95072, 0.95209, 0.95345, 0.95480, 0.95613, 0.95745, 0.95876, 0.96006, 0.96134, 0.96261, 0.96387, 0.96512, 0.96636, 0.96759, 0.96881, 0.97001, 0.97121, 0.97239, 0.97357, 0.97473, 0.97589, 0.97703, 0.97816, 0.97928, 0.98040, 0.98150, 0.98259, 0.98368, 0.98475, 0.98582, 0.98687, 0.98792, 0.98896, 0.98998, 0.99100, 0.99201, 0.99301, 0.99401, 0.99499, 0.99597, 0.99694, 0.99790, 0.99885, 0.99980, 1.00000],
          lineTension: 0,
          fill: false,
          backgroundColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointRadius: 2,
          pointHoverRadius: 0,
          borderWidth: 0
        }
      ]
    },
    options: {      
      tooltips: {
        mode: 'index',
        intersect: false
      },
      scales: {
        xAxes: [{
          display: true,
          align: "end",
          type: "category",          
          scaleLabel: {
            display: true,
            labelString: 'ph'            
          },          
          ticks: {
            maxTicksLimit: 15,
            maxRotation: 0,
            minRotation: 0,
            padding: -5
          }
        }]
      }
    }
  });



new Chart(document.getElementById("myAreaChart2"),
  {
    type: 'line',
    data: {
      labels: [0.000, 0.047, 0.093, 0.140, 0.187, 0.233, 0.280, 0.327, 0.373, 0.420, 0.467, 0.513, 0.560, 0.607, 0.653, 0.700, 0.747, 0.793, 0.840, 0.887, 0.933, 0.980, 1.027, 1.073, 1.120, 1.167, 1.213, 1.260, 1.307, 1.353, 1.400, 1.447, 1.493, 1.540, 1.587, 1.633, 1.680, 1.727, 1.773, 1.820, 1.867, 1.913, 1.960, 2.007, 2.053, 2.100, 2.147, 2.193, 2.240, 2.287, 2.333, 2.380, 2.427, 2.473, 2.520, 2.567, 2.613, 2.660, 2.707, 2.753, 2.800, 2.847, 2.893, 2.940, 2.987, 3.033, 3.080, 3.127, 3.173, 3.220, 3.267, 3.313, 3.360, 3.407, 3.453, 3.500, 3.547, 3.593, 3.640, 3.687, 3.733, 3.780, 3.827, 3.873, 3.920, 3.967, 4.013, 4.060, 4.107, 4.153, 4.200, 4.247, 4.293, 4.340, 4.387, 4.433, 4.480, 4.527, 4.573, 4.620, 4.667, 4.713, 4.760, 4.807, 4.853, 4.900, 4.947, 4.993, 5.040, 5.087, 5.133, 5.180, 5.227, 5.273, 5.320, 5.367, 5.413, 5.460, 5.507, 5.553, 5.600, 5.647, 5.693, 5.740, 5.787, 5.833, 5.880, 5.927, 5.973, 6.020, 6.067, 6.113, 6.160, 6.207, 6.253, 6.300, 6.347, 6.393, 6.440, 6.487, 6.533, 6.580, 6.627, 6.673, 6.720, 6.767, 6.813, 6.860, 6.907, 6.953, 7.000, 7.047, 7.093, 7.140, 7.187, 7.233, 7.280, 7.327, 7.373, 7.420, 7.467, 7.513, 7.560, 7.607, 7.653, 7.700, 7.747, 7.793, 7.840, 7.887, 7.933, 7.980, 8.027, 8.073, 8.120, 8.167, 8.213, 8.260, 8.307, 8.353, 8.400, 8.447, 8.493, 8.540, 8.587, 8.633, 8.680, 8.727, 8.773, 8.820, 8.867, 8.913, 8.960, 9.007, 9.053, 9.100, 9.147, 9.193, 9.240, 9.287, 9.333, 9.380, 9.427, 9.473, 9.520, 9.567, 9.613, 9.660, 9.707, 9.753, 9.800, 9.847, 9.893, 9.940, 9.987, 10.033, 10.080, 10.127, 10.173, 10.220, 10.267, 10.313, 10.360, 10.407, 10.453, 10.500, 10.547, 10.593, 10.640, 10.687, 10.733, 10.780, 10.827, 10.873, 10.920, 10.967, 11.013, 11.060, 11.107, 11.153, 11.200, 11.247, 11.293, 11.340, 11.387, 11.433, 11.480, 11.527, 11.573, 11.620, 11.667, 11.713, 11.760, 11.807, 11.853, 11.900, 11.947, 11.993, 12.040, 12.087, 12.133, 12.180, 12.227, 12.273, 12.320, 12.367, 12.413, 12.460, 12.507, 12.553, 12.600, 12.647, 12.693, 12.740, 12.787, 12.833, 12.880, 12.927, 12.973, 13.020, 13.067, 13.113, 13.160, 13.207, 13.253, 13.300, 13.347, 13.393, 13.440, 13.487, 13.533, 13.580, 13.627, 13.673, 13.720, 13.767, 13.813, 13.860, 13.907, 13.953],
      datasets: [
        {
          label: 'Valor A',
          data: [1.00000, 0.99980, 0.99885, 0.99790, 0.99694, 0.99597, 0.99499, 0.99401, 0.99301, 0.99201, 0.99100, 0.98998, 0.98896, 0.98792, 0.98687, 0.98582, 0.98475, 0.98368, 0.98259, 0.98150, 0.98040, 0.97928, 0.97816, 0.97703, 0.97589, 0.97473, 0.97357, 0.97239, 0.97121, 0.97001, 0.96881, 0.96759, 0.96636, 0.96512, 0.96387, 0.96261, 0.96134, 0.96006, 0.95876, 0.95745, 0.95613, 0.95480, 0.95345, 0.95209, 0.95072, 0.94934, 0.94794, 0.94653, 0.94511, 0.94368, 0.94223, 0.94076, 0.93929, 0.93780, 0.93629, 0.93477, 0.93324, 0.93169, 0.93013, 0.92855, 0.92696, 0.92535, 0.92373, 0.92209, 0.92044, 0.91877, 0.91708, 0.91538, 0.91366, 0.91193, 0.91017, 0.90840, 0.90662, 0.90481, 0.90299, 0.90115, 0.89930, 0.89742, 0.89553, 0.89362, 0.89169, 0.88974, 0.88778, 0.88579, 0.88379, 0.88176, 0.87972, 0.87766, 0.87558, 0.87348, 0.87136, 0.86922, 0.86706, 0.86488, 0.86268, 0.86046, 0.85822, 0.85594, 0.85355, 0.85105, 0.84843, 0.84569, 0.84284, 0.83988, 0.83679, 0.83360, 0.83029, 0.82686, 0.82332, 0.81967, 0.81590, 0.81201, 0.80802, 0.80391, 0.79969, 0.79536, 0.79092, 0.78637, 0.78170, 0.77693, 0.77204, 0.76705, 0.76196, 0.75675, 0.75144, 0.74603, 0.74052, 0.73490, 0.72918, 0.72336, 0.71744, 0.71142, 0.70530, 0.69909, 0.69278, 0.68638, 0.67989, 0.67331, 0.66664, 0.65988, 0.65303, 0.64610, 0.63909, 0.63199, 0.62482, 0.61757, 0.61024, 0.60284, 0.59537, 0.58783, 0.58023, 0.57256, 0.56483, 0.55704, 0.54920, 0.54130, 0.53335, 0.52536, 0.51732, 0.50923, 0.50111, 0.49295, 0.48475, 0.47653, 0.46828, 0.46001, 0.45172, 0.44341, 0.43509, 0.42676, 0.41842, 0.41008, 0.40175, 0.39342, 0.38511, 0.37682, 0.36854, 0.36029, 0.35206, 0.34386, 0.33570, 0.32758, 0.31950, 0.31147, 0.30349, 0.29557, 0.28771, 0.27991, 0.27218, 0.26452, 0.25693, 0.24942, 0.24199, 0.23465, 0.22740, 0.22024, 0.21317, 0.20620, 0.19933, 0.19257, 0.18592, 0.17938, 0.17295, 0.16664, 0.16045, 0.15439, 0.14845, 0.14264, 0.13697, 0.13143, 0.12602, 0.12075, 0.11562, 0.11063, 0.10578, 0.10107, 0.09650, 0.09207, 0.08778, 0.08363, 0.07962, 0.07575, 0.07201, 0.06841, 0.06494, 0.06161, 0.05841, 0.05534, 0.05239, 0.04957, 0.04687, 0.04430, 0.04184, 0.03950, 0.03727, 0.03515, 0.03313, 0.03121, 0.02940, 0.02768, 0.02604, 0.02450, 0.02303, 0.02165, 0.02033, 0.01908, 0.01790, 0.01679, 0.01573, 0.01474, 0.01379, 0.01290, 0.01207, 0.01128, 0.01054, 0.00985, 0.00921, 0.00860, 0.00803, 0.00749, 0.00699, 0.00653, 0.00609, 0.00568, 0.00529, 0.00493, 0.00460, 0.00428, 0.00399, 0.00371, 0.00346, 0.00322, 0.00299, 0.00279, 0.00259, 0.00241, 0.00224, 0.00208, 0.00193, 0.00179, 0.00166, 0.00154, 0.00143, 0.00132, 0.00123, 0.00113, 0.00105, 0.00097, 0.00089, 0.00082, 0.00076, 0.00070, 0.00064, 0.00059, 0.00054, 0.00049, 0.00045, 0.00041, 0.00037, 0.00034],
          lineTension: 0,
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 1)',
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: 'rgba(255, 99, 132, 1)',
          pointRadius: 2,
          pointHoverRadius: 0,
          borderWidth: 0
        },
        {
          label: 'Valor B',
          data: [0.00034, 0.00037, 0.00041, 0.00045, 0.00049, 0.00054, 0.00059, 0.00064, 0.00070, 0.00076, 0.00082, 0.00089, 0.00097, 0.00105, 0.00113, 0.00123, 0.00132, 0.00143, 0.00154, 0.00166, 0.00179, 0.00193, 0.00208, 0.00224, 0.00241, 0.00259, 0.00279, 0.00299, 0.00322, 0.00346, 0.00371, 0.00399, 0.00428, 0.00460, 0.00493, 0.00529, 0.00568, 0.00609, 0.00653, 0.00699, 0.00749, 0.00803, 0.00860, 0.00921, 0.00985, 0.01054, 0.01128, 0.01207, 0.01290, 0.01379, 0.01474, 0.01573, 0.01679, 0.01790, 0.01908, 0.02033, 0.02165, 0.02303, 0.02450, 0.02604, 0.02768, 0.02940, 0.03121, 0.03313, 0.03515, 0.03727, 0.03950, 0.04184, 0.04430, 0.04687, 0.04957, 0.05239, 0.05534, 0.05841, 0.06161, 0.06494, 0.06841, 0.07201, 0.07575, 0.07962, 0.08363, 0.08778, 0.09207, 0.09650, 0.10107, 0.10578, 0.11063, 0.11562, 0.12075, 0.12602, 0.13143, 0.13697, 0.14264, 0.14845, 0.15439, 0.16045, 0.16664, 0.17295, 0.17938, 0.18592, 0.19257, 0.19933, 0.20620, 0.21317, 0.22024, 0.22740, 0.23465, 0.24199, 0.24942, 0.25693, 0.26452, 0.27218, 0.27991, 0.28771, 0.29557, 0.30349, 0.31147, 0.31950, 0.32758, 0.33570, 0.34386, 0.35206, 0.36029, 0.36854, 0.37682, 0.38511, 0.39342, 0.40175, 0.41008, 0.41842, 0.42676, 0.43509, 0.44341, 0.45172, 0.46001, 0.46828, 0.47653, 0.48475, 0.49295, 0.50111, 0.50923, 0.51732, 0.52536, 0.53335, 0.54130, 0.54920, 0.55704, 0.56483, 0.57256, 0.58023, 0.58783, 0.59537, 0.60284, 0.61024, 0.61757, 0.62482, 0.63199, 0.63909, 0.64610, 0.65303, 0.65988, 0.66664, 0.67331, 0.67989, 0.68638, 0.69278, 0.69909, 0.70530, 0.71142, 0.71744, 0.72336, 0.72918, 0.73490, 0.74052, 0.74603, 0.75144, 0.75675, 0.76196, 0.76705, 0.77204, 0.77693, 0.78170, 0.78637, 0.79092, 0.79536, 0.79969, 0.80391, 0.80802, 0.81201, 0.81590, 0.81967, 0.82332, 0.82686, 0.83029, 0.83360, 0.83679, 0.83988, 0.84284, 0.84569, 0.84843, 0.85105, 0.85355, 0.85594, 0.85822, 0.86046, 0.86268, 0.86488, 0.86706, 0.86922, 0.87136, 0.87348, 0.87558, 0.87766, 0.87972, 0.88176, 0.88379, 0.88579, 0.88778, 0.88974, 0.89169, 0.89362, 0.89553, 0.89742, 0.89930, 0.90115, 0.90299, 0.90481, 0.90662, 0.90840, 0.91017, 0.91193, 0.91366, 0.91538, 0.91708, 0.91877, 0.92044, 0.92209, 0.92373, 0.92535, 0.92696, 0.92855, 0.93013, 0.93169, 0.93324, 0.93477, 0.93629, 0.93780, 0.93929, 0.94076, 0.94223, 0.94368, 0.94511, 0.94653, 0.94794, 0.94934, 0.95072, 0.95209, 0.95345, 0.95480, 0.95613, 0.95745, 0.95876, 0.96006, 0.96134, 0.96261, 0.96387, 0.96512, 0.96636, 0.96759, 0.96881, 0.97001, 0.97121, 0.97239, 0.97357, 0.97473, 0.97589, 0.97703, 0.97816, 0.97928, 0.98040, 0.98150, 0.98259, 0.98368, 0.98475, 0.98582, 0.98687, 0.98792, 0.98896, 0.98998, 0.99100, 0.99201, 0.99301, 0.99401, 0.99499, 0.99597, 0.99694, 0.99790, 0.99885, 0.99980, 1.00000],
          lineTension: 0,
          fill: false,
          backgroundColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointRadius: 2,
          pointHoverRadius: 0,
          borderWidth: 0
        }
      ]
    },
    options: {      
      tooltips: {
        mode: 'index',
        intersect: false
      },
      scales: {
        xAxes: [{
          display: true,
          align: "end",
          type: "category",          
          scaleLabel: {
            display: true,
            labelString: 'ph'            
          },          
          ticks: {
            maxTicksLimit: 15,
            maxRotation: 0,
            minRotation: 0,
            padding: -5
          }
        }]
      }
    }
  });


  const verticalLinePlugin = {
    id: 'verticalLine',
    afterDraw: function (chart) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.tooltipPosition().x;
        const topY = chart.scales['y-axis-0'].top;
        const bottomY = chart.scales['y-axis-0'].bottom;
  
        // Draw the vertical line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#07C';
        ctx.stroke();
        ctx.restore();
      }
    }
  };
  
  // Register the plugin
  Chart.plugins.register(verticalLinePlugin);
  