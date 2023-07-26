import React from "react";
import SignInButton from "./SignInButton";
import Icon from "theme/components/atoms/Icon";
import { defineMessages, useIntl } from "react-intl";
import { useShop } from "web/core/shop/ShopContext";

const messages = defineMessages({
  title: {
    id: "modules.ExternalLogin.Apple.signin",
    defaultMessage: "Sign in with Apple",
  },
});

const AppleSignIn = () => {
  const intl = useIntl();
  const shop = useShop();

  return (
    <SignInButton
      className="sign-in-button__apple"
      icon={<Icon icon="apple" title={intl.formatMessage(messages.title)} />}
      label={intl.formatMessage(messages.title)}
      to={`${shop.baseUrl}/external-login/apple`}
    />
  );
};

export default AppleSignIn;
