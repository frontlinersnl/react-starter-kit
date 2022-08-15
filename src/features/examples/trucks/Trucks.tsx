import { useOidcAccessToken } from "@axa-fr/react-oidc";
import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Config } from "../../../infrastructure/config";

type Props = {};

export const Trucks: FunctionComponent<Props> = () => {
  const [trucks, setTrucks] = useState(null);
  const [translate] = useTranslation();
  const { accessToken } = useOidcAccessToken();

  useEffect(() => {
    const { fake } = Config.services;
    fetch(`${fake.root}/${fake.trucks}`, {
      // fetch's way of adding headers. Not required to access the api... but :shrug:
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTrucks(data);
      });
  }, [accessToken]);
  return (
    <>
      <h1>{translate("nav.trucks")} page</h1>
      <div data-testid="trucksResult">
        {trucks ? <pre>{JSON.stringify(trucks, null, 2)}</pre> : <h2>loading...</h2>}
      </div>
    </>
  );
};
