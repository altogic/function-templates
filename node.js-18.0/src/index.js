const { createClient } = require("altogic");

/*
  Please see README.md for detailed information about request input parameters

  req variable has the following values, please note that these values can change.
      ids - endpoint path id parameters object
      query - reqeust query string parameters
      headers - request headers object 
      appParams - App parameters object
      client - request callers device type and IP information, 
      session - session of the user making the request
      appInfo - contextual information about the app and the environment 
      files - array of file objects
      body - request body JSON object. This can be a single JSON object or an array of JSON objects.

  res variable has:
      send(text, status) - Function to return text response. Status code defaults to 200
      json(object, status) - Function to return JSON response. Status code defaults to 200

  If an exception is thrown, a response with code 500 is returned.
*/

/*
  In order to use the Altogic client library you need to create an app and a client key in Altogic. 
  Additionally, if you will be using the Authentication module of this library, you might need to do 
  additional configuration in your app settings. 
  
  As input to createClient you need to provide your environement base URL and client-key. You can create
  a new environment or access your app envUrl from the Environments view and create a new clientKey from 
  App Settings/Client library view in Altogic Designer.

  Please set ENV_URL and CLIENT_KEY values below if you plan to use Altogic Client library in this function.
*/
const ENV_URL = null;
const CLIENT_KEY = null;

module.exports = async function (req, res) {
	// Create a client for interacting with your backend app
	// You need to provide environment url and client key as input parameters
	let altogic;

	if (!ENV_URL || !CLIENT_KEY) {
		console.warn(
			"Client library environment URL and/or client key variables are not set. Unless these variables are set, the cloud function cannot use Altogic Client Library."
		);
	} else altogic = createClient(ENV_URL, CLIENT_KEY);

	res.json({
		quote: "Hello world!",
	});
};
