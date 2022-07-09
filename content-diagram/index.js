/**
 * ---------------------------------------
 * This ContentDiagram was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * 
 * Author: John Jairo Madrid Carvajal
 * ---------------------------------------
 */

 am4core.useTheme(am4themes_animated);

// Create chart
var chart = am4core.create("chartdiv", am4plugins_venn.VennDiagram);

// save the image
// const btnDisplay = document.querySelector("#btnDisplay");
// const btnDownload = document.querySelector("#btnDownload");
// const imgConverted = document.querySelector("#imgConverted");
// const myCanvas = document.querySelector("#myCanvas");
// const ctx = myCanvas.getContext("2d");

// Create and configure series
var series = chart.series.push(new am4plugins_venn.VennSeries())
series.dataFields.category = "name";
series.dataFields.value = "value";
series.dataFields.intersections = "sets";
series.slices.template.fillOpacity = 0.5;

 series.data = [
  // The outer circles corresponding to the sciences 
   { name: "Cognitive psychology", value: 120},
   { name: "Neuroscience", value: 120},
   { name: "Artificial intelligence and robotics", value: 120},
   { name: "Cognitive science and linguistics", value: 120},

  // Features of cognition
   { name: "Perception", value: 50, sets: ["Cognitive psychology", "Neuroscience"]},
   { name: "Language", value: 50, sets: ["Neuroscience", "Artificial intelligence and robotics"]},
   { name: "Reasoning", value: 50, sets: ["Artificial intelligence and robotics", "Cognitive science and linguistics"] },
   { name: "Memory", value: 50, sets: ["Cognitive psychology", "Cognitive science and linguistics"]},

   { name: "Emotion", value: 50, sets: ["Cognitive psychology", "Neuroscience", "Artificial intelligence and robotics"]},
   { name: "Self-regulation", value: 50, sets: ["Cognitive psychology", "Cognitive science and linguistics", "Neuroscience" ]},
   { name: "Social cognition", value: 50, sets: ["Cognitive psychology", "Cognitive science and linguistics", "Artificial intelligence and robotics"] },
  //  This is still not there but I think is a good idea
   { name: "Decision making", value: 50, sets: ["Cognitive science and linguistics", "Artificial intelligence and robotics", "Neuroscience"]},
   
  // The center 
   { name: "Embodied Cognition", value: 20, sets: ["Cognitive psychology", "Neuroscience", "Artificial intelligence and robotics", "Cognitive science and linguistics"] },

 ];

 // Enable exporting the image


// Enable export
chart.exporting.menu = new am4core.ExportMenu(useRetine = false, useWebFonts = true);

