import React, { useContext } from "react";
import { Lang } from "../types/Lang";
// import { LangContext } from "./LangContext";
import { DispatchContext, StateContext } from "./Store";

type Props = {};

export const LangSelector: React.FC<Props> = () => {
  // const { lang, setLang } = useContext(LangContext);
  const dispatch = useContext(DispatchContext);
  const { lang } = useContext(StateContext);

  return (
    <select
      value={lang}
      onChange={(event) => {
        // setLang(event.target.value as Lang);
        dispatch({
          type: "setLang",
          payload: event.target.value as Lang,
        });
      }}
    >
      <option value={Lang.EN}>English</option>
      <option value={Lang.UA}>Українська</option>
    </select>
  );
};
