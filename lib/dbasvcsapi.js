class ApiException {
	constructor(message) {
		this.message = message
		this.name = 'ApiException'
	}
}

ApiException.prototype.toString = function() {
	return `${this.name}: "${this.message}"`;
}

export async function getDbaServicesAccounts(url, adminKey) {
	if (!adminKey || adminKey && adminKey == "") {
		throw new ApiException("admin key from environment variable DBASVCSAPI_ADMIN_KEY is required")
	}
	if (!url || url && url == "") {
		throw new ApiException("url from environment variable DBASVCSAPI_URL is required")
	}
	// fetch post data from an external API endpoint
	const res = await fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json',
		  'X-Auth-Token': adminKey,
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	  });

	if (!res.ok) {
		throw new ApiException(`request to get accounts failed: ${res.statusText}`)
	}

	const data = await res.json()
	return data
}