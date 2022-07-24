import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppProvider";
import Credits from "./Credits";
import WhatsappIcon from "../icons/whatsapp.svg";
import TelegramIcon from "../icons/telegram.svg";
import emailIcon from "../icons/email.svg";
import LigarIcon from "../icons/ligar.svg";

const ContainerList = styled.div`
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 30px 10px 30px;

  li {
    list-style: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #000;
    line-height: 40px;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0px;
  width: 174px;
  padding: 20px;

  a {
    color: #000;
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
      color: #393737;
    }
  }
`;

function ContactList() {
  const { listContacts, isOpen } = useContext(AppContext);
  const { linkWhatsapp, linkCallTo, linkTelegram, linkEmail } = listContacts;

  return (
    <div>
      {isOpen && (
        <Container>
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
              <li>
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
              <li>
                <a href={`mailto:${linkEmail}`} title="Email">
                  <i>
                    <img src={emailIcon} alt="Icone Email" />
                  </i>
                  Email
                </a>
              </li>
            )}

            {linkCallTo && (
              <li>
                <a href={`tel:${linkCallTo}`} title="Ligar">
                  <i>
                    <img src={LigarIcon} alt="Icone Ligar" />
                  </i>
                  Ligar
                </a>
              </li>
            )}
          </ContainerList>
          <Credits />
        </Container>
      )}
    </div>
  );
}

export default ContactList;
