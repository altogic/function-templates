const { createClient } = require("altogic");

/*
  req variable has:
    ids - endpoint path id parameters object
            {
              userId: '624b52783c77af658ac14ea2', 
              productId: '6151be8581f301001aa73c3c'
            }

    query - reqeust query string parameters
            {
              username: 'user123', 
              tags: ['tag1', 'tag2']
            }
    
    headers - request headers object 
            {
              token: 'tk_23423...', 
              'content-type': 'application/json'
            }

    appParams - App parameters object
            {
              param1: 123, 
              param2: true, 
              param3: 'text value'
            }

    client - request callers device type and IP information, 
            {
              ip: '100.123.45.66', 
              deviceType: 'desktop'
            }

    session - session of the user making the request
              {
                userId: "62602c378415c0a0519102aa",
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYyNjAyYzM3ODQxNWMwYTA1MTkxMDJiNiIsInVzZXJJZCI6IjYyNjAyYzM3ODQxNWMwYTA1MTkxMDJhYSIsInV1aWQiOiI2NmMxM2JhZS1iOGE1LTQ1NDItOWJkZC0zYmE4NTAwZTU2NjUiLCJpYXQiOjE2NjM2ODYxNTB9.LAbzFnk59Ix8z-6Wkcd3Gz49FWnswtvuGFCqG-AX5fU",
                creationDtm: "2022-09-20T15:02:30.331Z",
                userAgent: {
                  family: "Chrome",
                  major: "105",
                  minor: "0",
                  patch: "0",
                  device: {
                    family: "Other",
                    major: "0",
                    minor: "0",
                    patch: "0",
                  },
                  os: {
                    family: "Mac OS X",
                    major: "10",
                    minor: "15",
                    patch: "7",
                  },
                },
                accessGroupKeys: ['admin', 'member'],
              }

    appInfo - contextual information about the app and the environment 
              {
                appName: "Practice App",
                environmentName: "Development",
                environmentType: "trial",
                apiBaseUrl: "https://c1-na.altogic.com/e:62602c378415c0a0519102b6",
                executionStartDtm: "2022-09-20T15:02:30.325Z",
              }

    body - request body JSON object

  res variable has:
    send(text, status) - Function to return text response. Status code defaults to 200
    json(object, status) - Function to return JSON response. Status code defaults to 200

  If an exception is thrown, a response with code 500 is returned.
*/

const ENV_URL = "<my app environment url>";
const CLIENT_KEY = "<my app client key>";

module.exports = async function (req, res) {
	// Create a client for interacting with your backend app
	// You need to provide environment url and client key as input parameters
	const altogic = createClient(ENV_URL, CLIENT_KEY);

	res.json({
		quote: "Hello world!",
	});
};
