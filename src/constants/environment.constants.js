export const SERVER_PORT = 8080;
export const HOST =
  process.env.NODE_ENV === "production"
    ? window.location.host
    : `localhost:${SERVER_PORT}`;
