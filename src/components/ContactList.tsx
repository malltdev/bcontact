/* eslint-disable react/jsx-no-useless-fragment */
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppProvider";
import Credits from "./Credits";
import {
  WhatsappIcon,
  TelegramIcon,
  emailIcon,
  LigarIcon,
} from "../utils/IconsUrls";
import Error from "./Error";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  a {
    color: #000 !important;
    text-decoration: none;
    display: flex;

    align-items: center;
    i {
      display: flex;
      padding-right: 15px;
      justify-content: center;
      width: 21px;
    }
    &:hover {
      color: #393737 !important;
    }
  }
`;

const ContainerList = styled.div`
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 30px 10px 30px;
  //width: 114px;
  li {
    list-style: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #000;
    line-height: 40px;
    img {
      max-width: none;
    }
  }
`;

function ContactList() {
  const { listContacts, isOpen, error } = useContext(AppContext);
  const { linkWhatsapp, linkCallTo, linkTelegram, linkEmail } = listContacts;

  return (
    <>
      {isOpen && (
        <Container data-testid="container-contacts">
          {!error && (
            <>
              <ContainerList>
                {linkWhatsapp && (
                  <li>
                    <a
                      href={`https://wa.me/${linkWhatsapp}`}
                      target="_blank"
                      title="Whatsapp"
                      rel="noreferrer"
                    >
                      <i>
                        <img src={WhatsappIcon} alt="Icone Whatsapp" />
                      </i>
                      Whatsapp
                    </a>
                  </li>
                )}

                {linkTelegram && (
                  <li data-testid="list-contact">
                    <a
                      href={`https://t.me/${linkTelegram}`}
                      target="_blank"
                      title="Telegram"
                      rel="noreferrer"
                    >
                      <i>
                        <img src={TelegramIcon} alt="Icone Telegram" />
                      </i>
                      Telegram
                    </a>
                  </li>
                )}

                {linkEmail && (
                  <li data-testid="list-contact">
                    <a href={`mailto:${linkEmail}`} title="Email">
                      <i>
                        <img src={emailIcon} alt="Icone Email" />
                      </i>
                      Email
                    </a>
                  </li>
                )}

                {linkCallTo && (
                  <li data-testid="list-contact">
                    <a href={`tel:+${linkCallTo}`} title="Ligar">
                      <i>
                        <img src={LigarIcon} alt="Icone Ligar" />
                      </i>
                      Ligar
                    </a>
                  </li>
                )}
              </ContainerList>
            </>
          )}
          <Credits />
          {error && <Error message="ERRO! parâmetro(s) inválido(s)" />}
        </Container>
      )}
    </>
  );
}

export default ContactList;
