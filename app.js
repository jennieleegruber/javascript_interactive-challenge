///Use d3 to read in sample.json data

var test = d3.json("samples.json").then((importedData) => {
    var data = importedData;
    var testers = data.names;
    var x_values = data.samples[0].otu_ids.slice(0,10);
    var y_values = data.samples[0].sample_values.slice(0,10);
    // console.log(data);
    console.log(x_values);
    console.log(y_values)
    });

///create a horizontal bar chart to display the first test_users belly button biodiversity 
    var trace1 = {
        x: [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977],
        y: [163, 126, 113, 78, 71, 51, 50, 47, 40, 40],
        types: "bar"
    };

    var data = [trace1];

    var layout = {
        xaxis: { title: "City" },
    }

    var layout = {
        yaxis: x_values,
        xaxis: [40, 80, 120, 160, 200],
      };

    Plotly.newPlot("plot", data, layout);

//// populate the dropdown menu for the horizontal bar chart
/// define the dropdown object and the data fro the dropdown
var dropdownElement = d3.select("#selDataset");
var dropdownData = data.names;

///create an event handler 
dropdownElement.on("click", runEnter);

///create a function to allow the user to select a tester
dropdownElement.onclick = function(event) {
    if (!event.target.matches('.col-md-2')) {
      var dropdownOptions = document.getElementsByClassName("testers");
      var i;
      for (i = 0; i < testers.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  ///create a bubble chart that displays each sample
  var trace2 = {
    x: [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977],
    y: [163, 126, 113, 78, 71, 51, 50, 47, 40, 40],
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace2];
  
  var layout = {
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('myDiv', data, layout);

  //// Display the sample metadata 
  var DemoDisplay = d3.select("#sample-metadata");
  var DemoData = data.meta_data[0];

  DemoDisplay.on("submit", function);

  




    


      
      



