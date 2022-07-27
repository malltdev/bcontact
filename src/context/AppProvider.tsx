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
  isOpen: boolean;
  bgColor: string;
  listContacts: PropsListContacts;
  handleClickButton: () => void;
  setButtonColor: () => void;
}

export const AppContext = createContext<AppContextProps>({
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
    const dataColor = rootElement?.getAttribute("data-color") || "";
    if (dataColor) {
      setBgColor(dataColor);
      return;
    }
    setBgColor("#8D00FF");
  }, []);

  useEffect(() => {
    const linkWhatsapp = rootElement?.getAttribute("data-whatsapp") || "";
    const linkCallTo = rootElement?.getAttribute("data-callto") || "";
    const linkTelegram = rootElement?.getAttribute("data-telegram") || "";
    const linkEmail = rootElement?.getAttribute("data-email") || "";
    setListContacts({
      linkWhatsapp,
      linkCallTo,
      linkTelegram,
      linkEmail,
    });
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
