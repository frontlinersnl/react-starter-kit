import { useOidcAccessToken } from "@axa-fr/react-oidc";
import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {};

export const Tenders: FunctionComponent<Props> = () => {
  const [tenders, setTenders] = useState(null);
  const [translate] = useTranslation();
  const { accessToken } = useOidcAccessToken();

  useEffect(() => {
    // this uses the CORS proxy in our webpack setup
    // tendersguru is mapped to "https://tenders.guru" in setupProxy.js
    // it will strip the tendersguru part, so the full url will be: https://tenders.guru/api/ro/tenders
    fetch("tendersguru/api/ro/tenders", {
      // fetch's way of adding headers. Not required to access the api... but :shrug:
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTenders(data);
      });
  }, [accessToken]);
  return (
    <>
      <h1>{translate("nav.tenders")}</h1>
      {tenders ? <pre>{JSON.stringify(tenders, null, 2)}</pre> : <h2>loading...</h2>}
    </>
  );
};
