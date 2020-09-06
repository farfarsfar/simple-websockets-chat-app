export const HOST =
  process.env.NODE_ENV === "production"
    ? window.location.host
    : "localhost:8080";
