
var data = "/skills.csv"

function skills(data) {

	svg.selectAll("circle")
		.data(data)
		.enter
			.append('circle')

	svg.selectAll("circle")
		.data(data)
		.attr('r', function(d){ return d + 17 +'px';})
			.attr('cx', function(y, x){ return (103-(data.length/(x+0.2)))+'%';})
			.attr('cy', function(d){ return Math.abs(450-d*1.5) +'px';})
			.attr('class','bubble')
			.style('fill',function(d){ return colorGradient(100/d);})
			.style('opacity', function(d){ return d/120;});
	return svg;

	app.render = function(){
  svg = d3.select('#divsvg')
          .append('svg')
						.attr('class', ' col-md-12')
            .attr('height', '500px');
			};
}
