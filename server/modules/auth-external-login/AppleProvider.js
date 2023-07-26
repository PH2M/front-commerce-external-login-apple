import { Passport } from "passport";
import fs from "fs";
import AppleStrategy from "passport-apple";
import jwt from "jsonwebtoken";
import MissingInformationError from "auth-external-login/server/errors/MissingInformationError";
import ExternalLoginUser from "auth-external-login/server/domain/ExternalLoginUser";
import LoginProviderBase from "auth-external-login/server/providers/LoginProviderBase";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

export default class AppleProvider extends LoginProviderBase {
  requestLoginMiddleware(req, res, next) {
    const shopPathname = new URL(this.shopUrl).pathname;

    const callbackBaseUrl =
      isDev && this.providerConfig.developmentBaseCallbackUrl
        ? this.providerConfig.developmentBaseCallbackUrl + shopPathname
        : this.shopUrl;

    // @ts-ignore
    const callbackURL = `${callbackBaseUrl}${this.callbackUrl}`;

    const passportAuthenticator = new Passport();

    passportAuthenticator.use(
      new AppleStrategy(
        {
          clientID: this.providerConfig.clientId,
          teamID: this.providerConfig.teamId,
          keyID: this.providerConfig.keyId,
          callbackURL,
          privateKeyString: fs
            .readFileSync(
              path.join(process.cwd(), ".externalLoginAppleAuthKey.p8")
            )
            .toString(),
        },
        (req, accessToken, refreshToken, idToken, profile, cb) => {
          const userInfo = jwt.decode(idToken);

          if (!userInfo.email) {
            cb(new MissingInformationError());
          } else {
            cb(
              null,
              new ExternalLoginUser(
                userInfo.email,
                this.providerConfig.defaultFirstname ?? "_",
                this.providerConfig.defaultLastname ?? "_"
              )
            );
          }
        }
      )
    );

    passportAuthenticator.authenticate("apple", {
      failureRedirect: `${shopPathname}/login`,
      session: false,
    })(req, res, next);
  }
}
