const configProvider = {
  name: "apple",
  schema: () => ({
    apple: {
      clientId: {
        doc: "Apple Id",
        format: String,
        env: "FRONT_COMMERCE_APPLE_CLIENT_ID",
        default: "",
      },
      teamId: {
        doc: "Apple Team ID",
        format: String,
        env: "FRONT_COMMERCE_APPLE_CLIENT_TEAM_ID",
        default: "",
      },
      keyId: {
        doc: "Key ID",
        format: String,
        env: "FRONT_COMMERCE_APPLE_KEY_ID",
        default: "",
      },
      defaultFirstname: {
        doc: "Default firstname",
        format: String,
        env: "FRONT_COMMERCE_APPLE_DEFAULT_FIRSTNAME",
        default: "",
      },
      defaultLastname: {
        doc: "Default lastname",
        format: String,
        env: "FRONT_COMMERCE_APPLE_DEFAULT_LASTNAME",
        default: "",
      },
      developmentBaseCallbackUrl: {
        doc: "The callback url to use in the dev environment. No trailing slashes",
        format: String,
        env: "FRONT_COMMERCE_APPLE_DEVELOPMENT_BASE_CALLBACK_URL",
        default: "",
      },
    },
  }),
};

export default configProvider;
