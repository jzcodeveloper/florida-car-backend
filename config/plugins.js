module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey:
        "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",
    },
    settings: {
      defaultFrom: "floridacar785@gmail.com",
      defaultReplyTo: "floridacar785@gmail.com",
    },
  },
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  // ...
});
