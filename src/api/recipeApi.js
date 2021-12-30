import axios from "axios";

export async function getMeasurementOptions() {
	let data = {
		headers: {
			"Content-Type": "application/json",
			// "Access-Control-Allow-Origin": "*",
		},
		url: "http://143.198.146.144/codeigniter/index.php/recipes/MeasurementOptions",
		method: "get",
	};

	return axios(data)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
}

export async function createMeasurementOption(label, value) {
	let postData = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		url: "http://143.198.146.144/codeigniter/index.php/recipes/MeasurementOptions",
		method: "post",
		data: {
			Label: label,
			Value: value,
		},
	};

	// ...
	// Header set Access-Control-Allow-Origin "*"
	// ...

	// 	<Directory /var/www/>
	// Header add Access-Control-Allow-Origin "*"
	// Header add Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"
	// </Directory>

	//TRAVERSY
	// RewriteEngine on
	// RewriteCond $1 !^(index\.php|assets|images|js|css|uploads|favicon.png)
	// RewriteCond %(REQUEST_FILENAME) !-f
	// RewriteCond %(REQUEST_FILENAME) !-d
	// RewriteRule ^(.*)$ ./index.php/$1 [L]

	return axios(postData)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
}
