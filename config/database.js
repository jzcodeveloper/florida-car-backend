module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI"),
        ssl: { rejectUnauthorized: false },
      },
      options: {
        ssl: true,
        authenticationDatabase: "",
        useUnifiedTopology: true,
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 60000,
          createTimeoutMillis: 60000,
          acquireTimeoutMillis: 60000,
        },
      },
    },
  },
});
