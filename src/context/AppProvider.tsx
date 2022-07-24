/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, createContext } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext({
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
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [listContacts, setListContacts] = useState({
    linkWhatsapp: "",
    linkCallTo: "",
    linkTelegram: "",
    linkEmail: "",
  });
  const el = document.getElementById("BContact");

  useEffect(() => {
    const dataColor = el?.getAttribute("data-color") || "";
    if (dataColor) {
      setBgColor(dataColor);

      return;
    }
    setBgColor("#8D00FF");
  }, []);

  useEffect(() => {
    const linkWhatsapp = el?.getAttribute("data-whatsapp") || "";
    const linkCallTo = el?.getAttribute("data-callto") || "";
    const linkTelegram = el?.getAttribute("data-telegram") || "";
    const linkEmail = el?.getAttribute("data-email") || "";
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
