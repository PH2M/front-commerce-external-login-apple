import configService from "server/core/config/configService";
import { getCurrentShopConfig } from "server/core/config/getShopConfig";
import appleConfigProvider from "./config/appleConfigProvider";
import { registerExternalLoginProvider } from "auth-external-login/server/providers";
import AppleProvider from "./AppleProvider";
import fs from "fs";
import path from "path";

configService.append(appleConfigProvider);

const makeAppleProvider = (request, externalLoginHandler, callbackUrl) => {
  const providerConfig = request.config.apple;
  if (
    !providerConfig.clientId ||
    !providerConfig.teamId ||
    !providerConfig.keyId ||
    !fs.existsSync(path.join(process.cwd(), ".externalLoginAppleAuthKey.p8"))
  ) {
    throw new Error(
      `Apple provider is not properly configured. clientId, teamId and keyId are required!`
    );
  }
  const shopUrl = getCurrentShopConfig(request.config).url;
  return new AppleProvider(externalLoginHandler, providerConfig, {
    shopUrl,
    callbackUrl,
  });
};

registerExternalLoginProvider("apple", makeAppleProvider);
export default {};
