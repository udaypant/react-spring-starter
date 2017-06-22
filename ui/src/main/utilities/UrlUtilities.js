export function findGetParameter(parameterName) {
    var result = null;
    var tmp = [];

    location.search
        .substr(1)
        .split('&')
        .forEach(function(item) {
            tmp = item.split('=');
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

export function wrapperFetch(url, headers = null, body = null, method = 'get') {
    if (!headers) {
        headers = {
            'Content-Type': 'application/json',
        };
    } else {
        headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : 'application/json';
    }

    return fetch(url, {
        method,
        headers,
        body: (method === 'post') ? JSON.stringify(body) : null,
    }).then((response) => {
        if ((response.status >= 200) || (response.status < 300)) {
            return response.json();
        } else {
            throw Error(response);
        }
    }).catch((ex) => {
        console.log('Failed to parse response.', ex);
    });
}
