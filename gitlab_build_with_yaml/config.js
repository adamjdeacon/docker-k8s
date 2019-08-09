const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://learn.hasura.io",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://mango.enigma.tech/wp-content/uploads/2018/11/m-new.png",
		"logoLink": "https://mango-solutions.com",
		"title": "Data Science Radar FAQ's",
		"githubUrl": "https://github.com/jabedford/faqs",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "Data Science Radar", "link": "https://mango-solutions.com"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Data Science Radar FAQ's",
		"description": "Documentation for Data Science Radar ",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
};

module.exports = config;