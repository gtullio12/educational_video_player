/**
 * Removes repitition for calling APIs
 */
const api = {
  get: (endpoint) =>
    fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
    }),
  post: (endpoint, body) =>
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: body && JSON.stringify(body)
    }),
};

export { api };
