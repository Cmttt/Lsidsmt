	var data = [
	['Blazers', 'Bulls', 2],
	['Blazers', 'Pistons', 1],
	['Bulls', 'Blazers', 4],
	['Bulls', 'Jazz', 8],
	['Bulls', 'Lakers', 4],
	['Bulls', 'Sonics', 4],
	['Bulls', 'Suns', 4],
	['Cavaliers', 'Warriors', 7],
	['Celtics', 'Lakers', 15],
	['Celtics', 'Rockets', 8],
	['Heat', 'Mavericks', 6],
	['Heat', 'Sonics', 4],
	['Heat', 'Spurs', 5],
	['Jazz', 'Bulls', 4],
	['Knicks', 'Rockets', 3],
	['Knicks', 'Spurs', 1],
	['Lakers', 'Bulls', 1],
	['Lakers', 'Celtics', 17],
	['Lakers', 'Magic', 4],
	['Lakers', 'Nets', 4],
	['Lakers', 'Pacers', 4],
	['Lakers', 'Pistons', 5],
	['Lakers', 'Sixers', 12],
	['Magic', 'Lakers', 1],
	['Mavericks', 'Heat', 6],
	['Nets', 'Spurs', 2],
	['Pacers', 'Lakers', 2],
	['Pistons', 'Blazers', 4],
	['Pistons', 'Lakers', 11],
	['Pistons', 'Spurs', 3],
	['Rockets', 'Celtics', 4],
	['Rockets', 'Knicks', 4],
	['Rockets', 'Magic', 4],
	['Sixers', 'Lakers', 9],
	['Sonics', 'Bulls', 2],
	['Sonics', 'Heat', 2],
	['Spurs', 'Cavaliers', 4],
	['Spurs', 'Heat', 6],
	['Spurs', 'Knicks', 4],
	['Spurs', 'Nets', 4],
	['Spurs', 'Pistons', 4],
	['Suns', 'Bulls', 2],
	['Warriors', 'Cavaliers', 11]
	];
	var colors = {
	"Blazers":       "#da4480"
	,"Bulls":        "#5ab449"
	,"Cavaliers":    "#7f5acd"
	,"Heat":         "#aab740"
	,"Jazz":         "#ce58c0"
	,"Knicks":       "#50a26e"
	,"Lakers":       "#d1434b"
	,"Magic":        "#45c0bc"
	,"Mavericks":    "#ce5929"
	,"Nets":         "#4e7bda"
	,"Pacers":       "#d49d3c"
	,"Pistons":      "#6660a3"
	,"Rockets":      "#7b853c"
	,"Sixers":       "#b58dde"
	,"Sonics":       "#97622e"
	,"Spurs":        "#609dd6"
	,"Suns":         "#e29074"
	,"Warriors":     "#9c4b88"
	};
	var sortOrder =[
	'Blazers',
	'Bulls',
	'Cavaliers',
	'Celtics',
	'Heat',
	'Jazz',
	'Knicks',
	'Lakers',
	'Magic',
	'Mavericks',
	'Nets',
	'Pacers',
	'Pistons',
	'Rockets',
	'Sixers',
	'Sonics',
	'Spurs',
	'Suns',
	'Warriors'
	];
	function sort(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)); }
	var ch = viz.ch().data(data)
	      .padding(.01)
	      .sort(sort)
	      .innerRadius(230)
	      .outerRadius(250)
	      .duration(1000)
	      .chordOpacity(0.3)
	      .labelPadding(.03)
	      .fill(function(d){ return colors[d];});
	var width=1200, height=1100;
	var svg = d3.select("div.w3-container menu w3-padding-48 w3-card").append("svg").attr("height",height).attr("width",width);
	svg.append("g").attr("transform", "translate(600,550)").call(ch);
	// adjust height of frame in bl.ocks.org
	d3.select(self.frameElement).style("height", height+"px").style("width", width+"px");
        