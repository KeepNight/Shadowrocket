let headers = $request.headers;
const randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');
headers['X-Forwarded-For'] = randomIp();
$done({headers});
