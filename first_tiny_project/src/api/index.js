function getBaseUrl() {
  if (__DEV__) {
    return 'http://192.168.0.101:3000/';
  } else {
    return 'http://206.189.145.11/';
  }
}

export function postApi(url, params) {
  return fetch(getBaseUrl() + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(response => response.json())
    .catch(error => {});
}
