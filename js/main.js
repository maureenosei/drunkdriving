// DataTables

$(document).ready(function () {
  $("#data-table").DataTable({
    ajax: "data/datatables.json",
    columns: [
      { data: "State" },
      { data: "twelve" },
      { data: "fourteen" },
      { data: "Ages 21-34, twelve" },
      { data: "Ages 21-34, fourteen" },
      { data: "Ages 35+, twelve" },
      { data: "Ages 35+, fourteen" },
    ],
  });
});

// Document Ready Function

$(document).ready(function () {
  console.log("ready");
  $.ajax({
    type: "GET",
    url: "data/data.json",
    dataType: "json",
    success: function (json) {
      console.log("success");
    },
  });

  loadData();
});

function loadData() {
  $.getJSON("data/data.json", function (states) {
    console.log(states);
    parseData(states);
  });
}

function parseData(states) {
  //Honeycomb USA Chart
  Highcharts.chart("highchart", {
    chart: {
      type: "tilemap",
      inverted: true,
      height: "80%",
    },

    accessibility: {
      description:
        "A tile map represents U.S. states Drunk Driving Mortality Rates in 2012 & 2014. The hexagonal tiles are positioned to geographically echo the map of the USA. A color-coded legend states the morality rates as below 2.00 (green), 2.00 to 4.00 (yellow), 4.00 to 6.00 (orange) and above 6.00 (red). The chart is interactive, and the individual state data points are displayed upon hovering.",
      screenReaderSection: {
        beforeChartFormat:
          "<h5>{chartTitle}</h5>" +
          "<div>{chartSubtitle}</div>" +
          "<div>{chartLongdesc}</div>" +
          "<div>{viewTableButton}</div>",
      },
      point: {
        valueDescriptionFormat: "{index}. {xDescription}, {point.value}.",
      },
    },

    title: {
      text: "U.S. states Drunk Driving Mortality Rates in 2012 & 2014",
    },

    subtitle: {
      text: 'Source:<a href="https://data.gov">Data.gov</a>',
    },

    xAxis: {
      visible: false,
    },

    yAxis: {
      visible: false,
    },

    colorAxis: {
      dataClasses: [
        {
          from: 0,
          to: 2,
          color: "#92FC7F",
          name: "< 2.00",
        },
        {
          from: 2,
          to: 4,
          color: "#FCFA7F",
          name: "2.00 - 4.00",
        },
        {
          from: 4,
          to: 6,
          color: "#FFCD76",
          name: "4.00 - 6.00",
        },
        {
          from: 6,
          color: "#FF715D",
          name: "> 6.00",
        },
      ],
    },

    tooltip: {
      headerFormat: "",
      pointFormat:
        "The mortality rate in <b>{point.name}</b> was <b>{point.value}</b> in <b>2012</b> and <b>{point.value1}</b> in <b>2014</b>",
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.hc-a2}",
          color: "#000000",
          style: {
            textOutline: false,
          },
        },
      },
    },

    series: [
      {
        name: "",
        data: [
          {
            "hc-a2": "AL",
            name: "Alabama",
            region: "South",
            x: 6,
            y: 7,
            value: states[15].twelve,
            value1: states[15].fourteen,
          },
          {
            "hc-a2": "AK",
            name: "Alaska",
            region: "West",
            x: 0,
            y: 0,
            value: "unknown",
            value1: states[27].fourteen,
          },
          {
            "hc-a2": "AZ",
            name: "Arizona",
            region: "West",
            x: 5,
            y: 3,
            value: states[25].twelve,
            value1: states[25].fourteen,
          },
          {
            "hc-a2": "AR",
            name: "Arkansas",
            region: "South",
            x: 5,
            y: 6,
            value: states[45].twelve,
            value1: states[45].fourteen,
          },
          {
            "hc-a2": "CA",
            name: "California",
            region: "West",
            x: 5,
            y: 2,
            value: states[17].twelve,
            value1: states[17].fourteen,
          },
          {
            "hc-a2": "CO",
            name: "Colorado",
            region: "West",
            x: 4,
            y: 3,
            value: states[14].twelve,
            value1: states[14].fourteen,
          },
          {
            "hc-a2": "CT",
            name: "Connecticut",
            region: "Northeast",
            x: 3,
            y: 11,
            value: states[0].twelve,
            value1: states[0].fourteen,
          },
          {
            "hc-a2": "DE",
            name: "Delaware",
            region: "South",
            x: 4,
            y: 9,
            value: states[42].twelve,
            value1: states[42].fourteen,
          },
          {
            "hc-a2": "DC",
            name: "District of Columbia",
            region: "South",
            x: 4,
            y: 10,
            value: "unknown",
            value1: "unknown",
          },
          {
            "hc-a2": "FL",
            name: "Florida",
            region: "South",
            x: 8,
            y: 8,
            value: states[44].twelve,
            value1: states[44].fourteen,
          },
          {
            "hc-a2": "GA",
            name: "Georgia",
            region: "South",
            x: 7,
            y: 8,
            value: states[10].twelve,
            value1: states[10].fourteen,
          },
          {
            "hc-a2": "HI",
            name: "Hawaii",
            region: "West",
            x: 8,
            y: 0,
            value: states[23].twelve,
            value1: states[23].fourteen,
          },
          {
            "hc-a2": "ID",
            name: "Idaho",
            region: "West",
            x: 3,
            y: 2,
            value: states[18].twelve,
            value1: states[18].fourteen,
          },
          {
            "hc-a2": "IL",
            name: "Illinois",
            region: "Midwest",
            x: 3,
            y: 6,
            value: states[30].twelve,
            value1: states[30].fourteen,
          },
          {
            "hc-a2": "IN",
            name: "Indiana",
            region: "Midwest",
            x: 3,
            y: 7,
            value: states[32].twelve,
            value1: states[32].fourteen,
          },
          {
            "hc-a2": "IA",
            name: "Iowa",
            region: "Midwest",
            x: 3,
            y: 5,
            value: states[6].twelve,
            value1: states[6].fourteen,
          },
          {
            "hc-a2": "KS",
            name: "Kansas",
            region: "Midwest",
            x: 5,
            y: 5,
            value: states[43].twelve,
            value1: states[43].fourteen,
          },
          {
            "hc-a2": "KY",
            name: "Kentucky",
            region: "South",
            x: 4,
            y: 6,
            value: states[1].twelve,
            value1: states[1].fourteen,
          },
          {
            "hc-a2": "LA",
            name: "Louisiana",
            region: "South",
            x: 6,
            y: 5,
            value: states[7].twelve,
            value1: states[7].fourteen,
          },
          {
            "hc-a2": "ME",
            name: "Maine",
            region: "Northeast",
            x: 0,
            y: 11,
            value: states[12].twelve,
            value1: states[12].fourteen,
          },
          {
            "hc-a2": "MD",
            name: "Maryland",
            region: "South",
            x: 4,
            y: 8,
            value: states[16].twelve,
            value1: states[16].fourteen,
          },
          {
            "hc-a2": "MA",
            name: "Massachusetts",
            region: "Northeast",
            x: 2,
            y: 10,
            value: states[35].twelve,
            value1: states[35].fourteen,
          },
          {
            "hc-a2": "MI",
            name: "Michigan",
            region: "Midwest",
            x: 2,
            y: 7,
            value: states[48].twelve,
            value1: states[48].fourteen,
          },
          {
            "hc-a2": "MN",
            name: "Minnesota",
            region: "Midwest",
            x: 2,
            y: 4,
            value: states[46].twelve,
            value1: states[46].fourteen,
          },
          {
            "hc-a2": "MS",
            name: "Mississippi",
            region: "South",
            x: 6,
            y: 6,
            value: states[13].twelve,
            value1: states[13].fourteen,
          },
          {
            "hc-a2": "MO",
            name: "Missouri",
            region: "Midwest",
            x: 4,
            y: 5,
            value: states[9].twelve,
            value1: states[9].fourteen,
          },
          {
            "hc-a2": "MT",
            name: "Montana",
            region: "West",
            x: 2,
            y: 2,
            value: states[36].twelve,
            value1: states[36].fourteen,
          },
          {
            "hc-a2": "NE",
            name: "Nebraska",
            region: "Midwest",
            x: 4,
            y: 4,
            value: states[34].twelve,
            value1: states[34].fourteen,
          },
          {
            "hc-a2": "NV",
            name: "Nevada",
            region: "West",
            x: 4,
            y: 2,
            value: states[50].twelve,
            value1: states[50].fourteen,
          },
          {
            "hc-a2": "NH",
            name: "New Hampshire",
            region: "Northeast",
            x: 1,
            y: 11,
            value: states[45].twelve,
            value1: states[45].fourteen,
          },
          {
            "hc-a2": "NJ",
            name: "New Jersey",
            region: "Northeast",
            x: 3,
            y: 10,
            value: states[38].twelve,
            value1: states[38].fourteen,
          },
          {
            "hc-a2": "NM",
            name: "New Mexico",
            region: "West",
            x: 6,
            y: 3,
            value: states[37].twelve,
            value1: states[37].fourteen,
          },
          {
            "hc-a2": "NY",
            name: "New York",
            region: "Northeast",
            x: 2,
            y: 9,
            value: states[29].twelve,
            value1: states[29].fourteen,
          },
          {
            "hc-a2": "NC",
            name: "North Carolina",
            region: "South",
            x: 5,
            y: 9,
            value: states[40].twelve,
            value1: states[40].fourteen,
          },
          {
            "hc-a2": "ND",
            name: "North Dakota",
            region: "Midwest",
            x: 2,
            y: 3,
            value: states[20].twelve,
            value1: states[20].fourteen,
          },
          {
            "hc-a2": "OH",
            name: "Ohio",
            region: "Midwest",
            x: 3,
            y: 8,
            value: states[41].twelve,
            value1: states[41].fourteen,
          },
          {
            "hc-a2": "OK",
            name: "Oklahoma",
            region: "South",
            x: 6,
            y: 4,
            value: states[3].twelve,
            value1: states[3].fourteen,
          },
          {
            "hc-a2": "OR",
            name: "Oregon",
            region: "West",
            x: 4,
            y: 1,
            value: states[22].twelve,
            value1: states[22].fourteen,
          },
          {
            "hc-a2": "PA",
            name: "Pennsylvania",
            region: "Northeast",
            x: 3,
            y: 9,
            value: states[24].twelve,
            value1: states[24].fourteen,
          },
          {
            "hc-a2": "RI",
            name: "Rhode Island",
            region: "Northeast",
            x: 2,
            y: 11,
            value: states[49].twelve,
            value1: states[49].fourteen,
          },
          {
            "hc-a2": "SC",
            name: "South Carolina",
            region: "South",
            x: 6,
            y: 8,
            value: states[31].twelve,
            value1: states[31].fourteen,
          },
          {
            "hc-a2": "SD",
            name: "South Dakota",
            region: "Midwest",
            x: 3,
            y: 4,
            value: states[2].twelve,
            value1: states[2].fourteen,
          },
          {
            "hc-a2": "TN",
            name: "Tennessee",
            region: "South",
            x: 5,
            y: 7,
            value: states[8].twelve,
            value1: states[8].fourteen,
          },
          {
            "hc-a2": "TX",
            name: "Texas",
            region: "South",
            x: 7,
            y: 4,
            value: states[11].twelve,
            value1: states[11].fourteen,
          },
          {
            "hc-a2": "UT",
            name: "Utah",
            region: "West",
            x: 5,
            y: 4,
            value: states[33].twelve,
            value1: states[33].fourteen,
          },
          {
            "hc-a2": "VT",
            name: "Vermont",
            region: "Northeast",
            x: 1,
            y: 10,
            value: states[19].twelve,
            value1: "unknown",
          },
          {
            "hc-a2": "VA",
            name: "Virginia",
            region: "South",
            x: 5,
            y: 8,
            value: states[5].twelve,
            value1: states[5].fourteen,
          },
          {
            "hc-a2": "WA",
            name: "Washington",
            region: "West",
            x: 2,
            y: 1,
            value: states[26].twelve,
            value1: states[26].fourteen,
          },
          {
            "hc-a2": "WV",
            name: "West Virginia",
            region: "South",
            x: 4,
            y: 7,
            value: states[4].twelve,
            value1: states[4].fourteen,
          },
          {
            "hc-a2": "WI",
            name: "Wisconsin",
            region: "Midwest",
            x: 2,
            y: 5,
            value: states[21].twelve,
            value1: states[21].fourteen,
          },
          {
            "hc-a2": "WY",
            name: "Wyoming",
            region: "West",
            x: 3,
            y: 3,
            value: states[39].twelve,
            value1: states[39].fourteen,
          },
        ],
      },
    ],
  });

  //end of highcharts
}

// Downwards sloping line chart
var chart = c3.generate({
  bindto: "#chart",
  data: {
    url: "/data/data1.csv",
  },

  axis: {
    x: {
      type: "category",
      categories: ["2012", "2013", "2014"],
      label: {
        // ADD
        text: "Year",
        position: "outer-middle",
      },
    },
    y: {
      label: {
        // ADD
        text: "Number of Deaths",
        position: "outer-middle",
      },
      tick: {
        format: d3.format(","),
        //                format: function (d) { return "$" + d; }
      },
    },
  },
});

//BAR COMPARISONS

var chart = c3.generate({
  bindto: "#north",

  data: {
    url: "/data/lawful.csv",
    type: "bar",
    colors: {
      2012: "#AAB7B8",
      2014: "#58D68D",
    },
  },
  axis: {
    x: {
      type: "category",
      categories: ["MD", "OH", "MO", "WV", "SC"],
      label: {
        // ADD
        text: "State",
        position: "outer-middle",
      },
    },
    y: {
      label: {
        // ADD
        text: "Mortality Rate",
        position: "outer-middle",
      },
    },
  },
});

var chart = c3.generate({
  bindto: "#south",
  data: {
    url: "/data/unlawful.csv",
    type: "bar",
    colors: {
      2012: "#AAB7B8",
      2014: "#EC7063",
    },
  },
  axis: {
    x: {
      type: "category",
      categories: ["OR", "NH", "CT", "CO", "VA"],
      label: {
        // ADD
        text: "State",
        position: "outer-middle",
      },
    },
    y: {
      label: {
        text: "Mortality Rate",
        position: "outer-middle",
      },
    },
  },
});
