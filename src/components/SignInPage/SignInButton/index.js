import React from "react";
import Link from "next/link";
import * as ROUTES from "../../../../constants/routes";
import useTranslation from "../../../hooks/useTranslation";

export default function SignInButton() {
  const { locale, t } = useTranslation();
  return (
    <Link href={ROUTES.SIGN_IN.href} as={ROUTES.SIGN_IN.as({ locale })}>
      <a className="btn btn-neutral btn-icon">
        {" "}
        <span className="btn-inner--icon">
          <i className="fa fa-key mr-2" />
        </span>
        <span className="nav-link-inner--text">{t("headerSignIn")}</span>
      </a>
    </Link>
  );
}
