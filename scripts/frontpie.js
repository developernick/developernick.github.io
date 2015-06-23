
   var pie = new d3pie($("#pieChart"), {
   	"header": {
   		"title": {
   			"text": "Skills",
   			"fontSize": 36,
   			"font": "open sans"
   		},
   		"subtitle": {
   			"color": "#999999",
   			"fontSize": 12,
   			"font": "open sans"
   		},
   		"location": "top-left",
   		"titleSubtitlePadding": 0
   	},
   	"footer": {
   		"color": "#999999",
   		"fontSize": 10,
   		"font": "open sans",
   		"location": "bottom-left"
   	},
   	"size": {
   		"canvasWidth": 590,
   		"pieOuterRadius": "90%"
   	},
   	"data": {
   		"smallSegmentGrouping": {
   			"enabled": true
   		},
   		"content": [
   			{
   				"label": "HTML",
   				"value": 20,
   				"color": "#104571"
   			},
   			{
   				"label": "Bootstrap",
   				"value": 6.5,
   				"color": "#4fa5ff"
   			},
   			{
   				"label": "Skeleton",
   				"value": 6.5,
   				"color": "#00b7fb"
   			},
   			{
   				"label": "CSS",
   				"value": 25,
   				"color": "#118d55"
   			},
   			{
   				"label": "LESS",
   				"value": 4,
   				"color": "#60d492"
   			},
   			{
   				"label": "SASS",
   				"value": 4,
   				"color": "#39d86a"
   			},
   			{
   				"label": "Javascript",
   				"value": 20,
   				"color": "#5c3a74"
   			},
   			{
   				"label": "JQuery",
   				"value": 10,
   				"color": "#663cd0"
   			},
   			{
   				"label": "Angular",
   				"value": 4,
   				"color": "#7a5fbd"
   			}
   		]
   	},
   	"labels": {
   		"outer": {
   			"format": "none",
   			"pieDistance": 15
   		},
   		"inner": {
   			"format": "label",
   			"hideWhenLessThanPercentage": 4
   		},
   		"mainLabel": {
   			"color": "#ffffff",
   			"fontSize": 13
   		},
   		"percentage": {
   			"color": "#ffffff",
   			"decimalPlaces": 0
   		},
   		"value": {
   			"color": "#adadad",
   			"fontSize": 11
   		},
   		"lines": {
   			"enabled": true
   		},
   		"truncation": {
   			"enabled": true
   		}
   	},
   	"tooltips": {
   		"enabled": true,
   		"type": "placeholder",
   		"string": "{label}: {value}, {percentage}%",
   		"styles": {
   			"fadeInSpeed": 310,
   			"backgroundOpacity": 0.23
   		}
   	},
   	"effects": {
   		"pullOutSegmentOnClick": {
   			"effect": "back",
   			"speed": 400,
   			"size": 8
   		}
   	},
   	"misc": {
   		"gradient": {
   			"enabled": true,
   			"percentage": 54
   		}
   	}
   });//end pie chart
