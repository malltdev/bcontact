/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, createContext } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}
interface PropsListContacts {
  linkWhatsapp: string;
  linkCallTo: string;
  linkTelegram: string;
  linkEmail: string;
}
interface AppContextProps {
  error: boolean;
  isOpen: boolean;
  bgColor: string;
  listContacts: PropsListContacts;
  handleClickButton: () => void;
  setButtonColor: () => void;
}

export const AppContext = createContext<AppContextProps>({
  error: false,
  isOpen: false,
  bgColor: "",
  listContacts: {
    linkWhatsapp: "",
    linkCallTo: "",
    linkTelegram: "",
    linkEmail: "",
  },
  handleClickButton: () => {},
  setButtonColor: () => {},
});

export function AppProvider({ children }: AppProviderProps) {
  const [error, setError] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [listContacts, setListContacts] = useState({
    linkWhatsapp: "",
    linkCallTo: "",
    linkTelegram: "",
    linkEmail: "",
  });
  const rootElement = document.getElementById("BContact");

  useEffect(() => {
    const linkWhatsapp = rootElement?.getAttribute("data-whatsapp") || "";
    const linkCallTo = rootElement?.getAttribute("data-callto") || "";
    const linkTelegram = rootElement?.getAttribute("data-telegram") || "";
    const linkEmail = rootElement?.getAttribute("data-email") || "";

    const checkLinkWhatsapp = linkWhatsapp.match(/\d+/g);
    const checkLinkCallTo = linkWhatsapp.match(/\d+/g);
    const checkLinkTelegram = linkTelegram.match(
      "^(?=.{5,32}$)(?!.*__)(?!^(telegram|admin|support))[a-z][a-z0-9_]*[a-z0-9]$"
    );
    const checkLinkEmail = linkEmail.match(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    const checkErrorExists = [
      checkLinkWhatsapp,
      checkLinkCallTo,
      checkLinkTelegram,
      checkLinkEmail,
    ].includes(null);
    if (checkErrorExists) {
      setError(!error);
    }

    setListContacts({
      linkWhatsapp,
      linkCallTo,
      linkTelegram,
      linkEmail,
    });
  }, []);

  useEffect(() => {
    const dataColor = rootElement?.getAttribute("data-color") || "";
    if (dataColor) {
      setBgColor(dataColor);
      return;
    }
    setBgColor("#8D00FF");
  }, []);

  const handleClickButton = () => {
    setIsOpen(!isOpen);
  };

  const setButtonColor = () => {
    setBgColor(bgColor);
  };

  return (
    <AppContext.Provider
      value={{
        handleClickButton,
        error,
        isOpen,
        bgColor,
        setButtonColor,
        listContacts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
