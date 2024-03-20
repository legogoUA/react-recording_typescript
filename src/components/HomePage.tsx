import { useContext } from "react";
import { translate } from "../utils/translate";
// import { LangContext } from "./LangContext";
import { Counter } from "./Counter";
import { StateContext } from "./Store";

export const HomePage = () => (
  <div className="HomePage">
    <HomePageTitle />
    <HomePageContent />
    <Counter />
  </div>
);

const HomePageTitle = () => {
  const { lang } = useContext(StateContext);

  return <h1>{translate("homePage.title", lang)}</h1>;
};

const HomePageContent = () => {
  const { lang } = useContext(StateContext);

  return <section>{translate("homePage.content", lang)}</section>;
};
