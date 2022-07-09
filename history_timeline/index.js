/**
 * ---------------------------------------
 * This Sankey Diagram on the history of embodied cognition
 * was created using amCharts 4.
 * Author: John Madrid
 *
 * For more information visit:
 * https://www.amcharts.com/
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.SankeyDiagram);

// creating the data for the diagram
chart.data = [
    { from: "Philosophical traditions", to: "Rationalism", value: 0.06 },
    { from: "Philosophical traditions", to: "Empiricism", value: 0.06 },
    { from: "Philosophical traditions", to: "Phenomenology", value: 0.06 },
    { from: "Cartesian dualism", to: "Representationalist", value: 0.05 },
    { from: "Representationalist", to: "Computationalism", value: 0.05 },
    { from: "Computationalism", to: "Connectionism", value: 0.03 },
    { from: "Connectionism", to: "Embodied cognition", value: 0.02 },
    { from: "Empiricism", to: "American naturalism", value: 0.1 },
    { from: "American naturalism", to: "Ecological psychology", value: 0.06 },
    { from: "American naturalism", to: "Sensorimotor contingencies", value: 0.06},
    { from: "Rationalism", to: "Cartesian dualism", value: 0.05 },
    { from: "Ecological psychology", to: "Enactivism", value: 0.06},
    { from: "Ecological psychology", to: "Embodied cognition", value: 0.06},
    { from: "Phenomenology", to: "Ecological psychology", value: 0.05},
    { from: "Phenomenology", to: "Enactivism", value: 0.05 },
    { from: "Ecological psychology", to: "Sensorimotor contingencies", value: 0.06 },
    { from: "Sensorimotor contingencies", to: "Embodied cognition", value: 0.17 },
    { from: "Enactivism", to: "Embodied cognition", value: 0.1 },
];
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";

var nodeTemplate = chart.nodes.template;
nodeTemplate.width = 145;
nodeTemplate.strokeWidth = 2;
// optional parameters
// nodeTemplate.stroke = am4core.color("#921717");
// nodeTemplate.nameLabel.label.fontWeight = "bold";

// Wrapping name labels inside nodes instead of truncating
chart.nodes.template.nameLabel.label.truncate = false;
chart.nodes.template.nameLabel.label.wrap = true;

// place label name inside node
nodeTemplate.nameLabel.adapter.add("locationX", function(location, target) {
  switch (target.parent.level) {
    case 1:
      return 0;
    case 2:
      return 0;
    default:
      return 0;
  }
});
