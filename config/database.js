module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI" || ""),
        host: env("DATABASE_HOST", "127.0.0.1"),
        srv: env.bool("DATABASE_SRV", false),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "florida-car"),
        username: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
        ssl: { rejectUnauthorized: false },
      },
      options: {
        ssl: true,
        authenticationDatabase: "",
        useUnifiedTopology: true,
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
  },
});
