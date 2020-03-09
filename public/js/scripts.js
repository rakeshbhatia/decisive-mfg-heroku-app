var range1;
var range2;
var range3;
var range4;
var range5;
var range6;
var range7;
var range8;
var range9;
var range10;

function BuildChart(datasets) {
  var radarChart = echarts.init(document.getElementById('radar-chart'));

  var myData = [];
  var myColors = ['rgba(255, 0, 0, 0.3)', 'rgba(128, 0, 128, 0.3)', 'rgba(255, 255, 0, 0.3)', 'rgba(0, 255, 0, 0.3)', 'rgba(0, 128, 255, 0.3)'];

  for (var i = 0; i < datasets.length; i++) {
    var temp = {
      value: datasets[i].slice(1, 11),
      name: datasets[i][0],
      symbol: 'circle',
      areaStyle: {
        color: myColors[i]
      },
      lineStyle: {
        color: myColors[i]
      },
      itemStyle: {
        color: myColors[i]
      }
    };
    myData.push(temp);
  }

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
        data: myData
      }
    ]
  };


  if (option && typeof option === 'object') {
    radarChart.setOption(option, true);
  }

  return radarChart;
};

$.fn.dataTable.ext.search.push(
  function( settings, data, dataIndex ) {
    var min = parseFloat(range1.slider( 'values', 0 ));
    var max = parseFloat(range1.slider( 'values', 1 ));
    var col = parseFloat( data[1] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range2.slider( 'values', 0 ));
    var max = parseFloat(range2.slider( 'values', 1 ));
    var col = parseFloat( data[2] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range3.slider( 'values', 0 ));
    var max = parseFloat(range3.slider( 'values', 1 ));
    var col = parseFloat( data[3] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range4.slider( 'values', 0 ));
    var max = parseFloat(range4.slider( 'values', 1 ));
    var col = parseFloat( data[4] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range5.slider( 'values', 0 ));
    var max = parseFloat(range5.slider( 'values', 1 ));
    var col = parseFloat( data[5] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range6.slider( 'values', 0 ));
    var max = parseFloat(range6.slider( 'values', 1 ));
    var col = parseFloat( data[6] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range7.slider( 'values', 0 ));
    var max = parseFloat(range7.slider( 'values', 1 ));
    var col = parseFloat( data[7] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range8.slider( 'values', 0 ));
    var max = parseFloat(range8.slider( 'values', 1 ));
    var col = parseFloat( data[8] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range9.slider( 'values', 0 ));
    var max = parseFloat(range9.slider( 'values', 1 ));
    var col = parseFloat( data[9] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
  function( settings, data, dataIndex ) {
    var min = parseFloat(range10.slider( 'values', 0 ));
    var max = parseFloat(range10.slider( 'values', 1 ));
    var col = parseFloat( data[10] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  }
);

$(document).ready(function() {
  range1 = $( '#range1' );
  range2 = $( '#range2' );
  range3 = $( '#range3' );
  range4 = $( '#range4' );
  range5 = $( '#range5' );
  range6 = $( '#range6' );
  range7 = $( '#range7' );
  range8 = $( '#range8' );
  range9 = $( '#range9' );
  range10 = $( '#range10' );

  var liveRange1 = $( '#liveRange1' );
  var liveRange2 = $( '#liveRange2' );
  var liveRange3 = $( '#liveRange3' );
  var liveRange4 = $( '#liveRange4' );
  var liveRange5 = $( '#liveRange5' );
  var liveRange6 = $( '#liveRange6' );
  var liveRange7 = $( '#liveRange7' );
  var liveRange8 = $( '#liveRange8' );
  var liveRange9 = $( '#liveRange9' );
  var liveRange10 = $( '#liveRange10' );

  range1.slider({
    range: true,
    min: 0,
    max: 25,
    step: 1,
    values: [ 0, 25 ],
    slide: function( event, ui ) {
      liveRange1.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range2.slider({
    range: true,
    min: 0,
    max: 200,
    step: 10,
    values: [ 0, 200 ],
    slide: function( event, ui ) {
      liveRange2.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range3.slider({
    range: true,
    min: 0,
    max: 5000,
    step: 250,
    values: [ 0, 5000 ],
    slide: function( event, ui ) {
      liveRange3.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range4.slider({
    range: true,
    min: 0,
    max: 2500,
    step: 125,
    values: [ 0, 2500 ],
    slide: function( event, ui ) {
      liveRange4.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range5.slider({
    range: true,
    min: 0,
    max: 500,
    step: 25,
    values: [ 0, 500 ],
    slide: function( event, ui ) {
      liveRange5.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range6.slider({
    range: true,
    min: 0,
    max: 3500,
    step: 175,
    values: [ 0, 3500 ],
    slide: function( event, ui ) {
      liveRange6.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range7.slider({
    range: true,
    min: 0,
    max: 500,
    step: 25,
    values: [ 0, 500 ],
    slide: function( event, ui ) {
      liveRange7.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range8.slider({
    range: true,
    min: 0,
    max: 40,
    step: 2,
    values: [ 0, 40 ],
    slide: function( event, ui ) {
      liveRange8.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range9.slider({
    range: true,
    min: 0,
    max: 2,
    step: 0.1,
    values: [ 0, 2 ],
    slide: function( event, ui ) {
      liveRange9.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });
  range10.slider({
    range: true,
    min: 0,
    max: 0.00025,
    step: 0.00001,
    values: [ 0, 0.00025 ],
    slide: function( event, ui ) {
      liveRange10.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
    stop: function( event, ui ) {
      table.draw();
    }
  });

  liveRange1.val(range1.slider( 'values', 0 ) + " - " + range1.slider( 'values', 1 ) );
  liveRange2.val(range2.slider( 'values', 0 ) + " - " + range2.slider( 'values', 1 ) );
  liveRange3.val(range3.slider( 'values', 0 ) + " - " + range3.slider( 'values', 1 ) );
  liveRange4.val(range4.slider( 'values', 0 ) + " - " + range4.slider( 'values', 1 ) );
  liveRange5.val(range5.slider( 'values', 0 ) + " - " + range5.slider( 'values', 1 ) );
  liveRange6.val(range6.slider( 'values', 0 ) + " - " + range6.slider( 'values', 1 ) );
  liveRange7.val(range7.slider( 'values', 0 ) + " - " + range7.slider( 'values', 1 ) );
  liveRange8.val(range8.slider( 'values', 0 ) + " - " + range8.slider( 'values', 1 ) );
  liveRange9.val(range9.slider( 'values', 0 ) + " - " + range9.slider( 'values', 1 ) );
  liveRange10.val(range10.slider( 'values', 0 ) + " - " + range10.slider( 'values', 1 ) );

  var table = $( '#sort-table' ).DataTable({
    dom: 'Bfrtip',
    buttons: [
      {
        text: 'Plot selected materials',
        action: function ( e, dt, node, config ) {
          var selectedData = dt.rows({selected: true}).data().toArray();
          var selectedRows = [];
          for (var i = 0; i < selectedData.length; i++) {
            var currentRow = [selectedData[i][0], selectedData[i][1], selectedData[i][2], selectedData[i][3], selectedData[i][4], selectedData[i][5], selectedData[i][6], selectedData[i][7], selectedData[i][8], selectedData[i][9], selectedData[i][10]];
            selectedRows.push(currentRow);
          }
          var myRadarChart = BuildChart(selectedRows);
        }
      }
    ],
    columnDefs: [
      {
        targets: 0,
        checkboxes: {
          selectRow: true
        }
      }
    ],
    rowId: 'extn',
    select: {
      info: true,
      style: 'multi',
      blurable: true
    },
    order: [[ 1, 'asc' ]],
    bPaginate: true,
    bFilter: true,
  });

  table.on('select', function(e, dt, type, ix) {
    var selected = dt.rows({selected: true});
    if ( selected.count() > 5 ) {
      dt.rows(ix).deselect();
    }
  });

  $('#sort-table tbody').on('click', 'tr', function(){
    $(this).toggleClass('selected');
    var pos = table.row(this).index();
    var row = table.row(pos).data();
  });
});