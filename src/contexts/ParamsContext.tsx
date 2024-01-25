import React, { createContext, useContext } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { WEEK_VIEW } from "../constants";
import { getToday, toDateParam } from "../utils";

type ParamsContextValue = {
  dateParam: string;
  setDateParam: (date: string) => void;
  viewParam: string;
  setViewParam: (view: string) => void;
};

const ParamsContext = createContext<ParamsContextValue>(
  {} as ParamsContextValue
);

export const ParamsProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [dateParam, setDateParam] = useQueryParam("date", StringParam);
  const [viewParam, setViewParam] = useQueryParam("view", StringParam);

  return (
    <ParamsContext.Provider
      value={{
        dateParam: dateParam ?? toDateParam(getToday()),
        setDateParam,
        viewParam: viewParam ?? WEEK_VIEW,
        setViewParam,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
};

export const useParamsContext = (): ParamsContextValue =>
  useContext(ParamsContext);
