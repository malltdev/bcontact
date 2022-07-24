import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppProvider";
import Credits from "./Credits";

const ContainerList = styled.div`
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;

  li {
    list-style: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #000;
    padding-bottom: 30px;
  }
`;

const Container = styled.div`
  position: relative;
  top: -80px;
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
                <a href={`https://wa.me/${linkWhatsapp}`} title="Whatsapp">
                  Whatsapp
                </a>
              </li>
            )}
            {linkCallTo && (
              <li>
                <a href={`callto:${linkCallTo}`} title="Ligar">
                  Ligar
                </a>
              </li>
            )}
            {linkTelegram && <li>Telegram {linkTelegram}</li>}
            {linkEmail && (
              <a href={`mailto:${linkEmail}`} title="Email">
                Email
              </a>
            )}
          </ContainerList>
          <Credits />
        </Container>
      )}
    </div>
  );
}

export default ContactList;
