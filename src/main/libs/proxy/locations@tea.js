var widget = new widgets.Widget({
	"name": "路径规则",
	"code": "locations@tea",
	"author": "TeaWeb",
	"version": "0.0.1"
});

widget.run = function () {
	var chart = new charts.HTMLChart();
	chart.options.name = "路径规则<em>（一些特殊的路径配置）</em>";
	chart.options.columns = 1;

	var locations = context.server.locations;
	if (locations.length == 0) {
		chart.html = "<p class='grey'><i class='icon folder'></i>暂时还没有定义路径规则</p>";
	} else {
		chart.html = "<style type='text/css'> \
		.locations-box .label { \
			padding: 2px; \
			margin-left: 8px; \
		} \
		.locations-box p { \
		    display: inline-block; \
		    margin-left: 0.5em; \
		    margin-right: 0.5em; \
		    border: 1px #ddd solid; \
		    border-radius: 4px; \
		    padding: 3px; \
        } \
		</style>";
		chart.html += "<div class=\"locations-box\">";
		for (var i = 0; i < locations.length; i++) {
			var location = locations[i];
			chart.html += "<p><a href='/proxy/locations/detail?server=" + context.server.filename + "&locationId=" + location.id + "'><i class='icon folder'></i> " + location.pattern + "</a>";
			if (location.root.length > 0) {
				chart.html += "<span class='ui label tiny'>root</span>";
			}
			if (location.cachePolicy.length > 0) {
				chart.html += "<span class='ui label tiny'>cache</span>";
			}
			if (location.fastcgi.length > 0) {
				chart.html += "<span class='ui label tiny'>fastcgi</span>";
			}
			if (location.rewrite.length > 0) {
				chart.html += "<span class='ui label tiny'>rewrite</span>";
			}
			if (location.websocket != null) {
                chart.html += "<span class='ui label tiny'>websocket</span>";
            }
			chart.html += "</p>";
		}
		chart.html += "</div>";
	}

	chart.render();
};
