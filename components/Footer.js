import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <WaveBackground>
        <ContentWrapper>
          <LinksWrapper>
            <LinksGroup>
              <Title>Contact</Title>
              <LinkItem>Call Us</LinkItem>
              <LinkItem>+251 91 152 2626</LinkItem>
              <LinkItem>Bole Medhanialem,MorningStar Mall,1st Floor 12B</LinkItem>
              <LinkItem></LinkItem>
            </LinksGroup>
            <LinksGroup>
              <Title>HELP</Title>
              <LinkItem>FAQ</LinkItem>
              <LinkItem>Accessibility</LinkItem>
            </LinksGroup>

               </LinksWrapper>
          <NewsletterWrapper>
            <NewsletterText>
             Contact US
            </NewsletterText>
            <NewsletterForm>
              <EmailInput placeholder="Your Email Address" />
              <SubscribeButton>Subscribe</SubscribeButton>
            </NewsletterForm>
            <SocialIcons>
              <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
              <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
              <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
              <SocialIcon href="https://t.me/+QttKtmHHUj-c72fY"><i className="fab fa-telegram"></i></SocialIcon>
            </SocialIcons>
          </NewsletterWrapper>
        </ContentWrapper>
        <BottomBar>
          <FooterText>© 2024 Nat Computers. All Rights Reserved</FooterText>
          <PolicyLinks>
            <PolicyLink href="#">Terms of Service</PolicyLink>
            <PolicyLink href="#">Privacy Policy</PolicyLink>
          </PolicyLinks>
        </BottomBar>
      </WaveBackground>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: black;
  color: red;
  margin-top: 20px;

`;

const WaveBackground = styled.div`
  padding: 40px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinksGroup = styled.div`
  margin: 0 20px;
  min-width: 150px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const LinkItem = styled.a`
  display: block;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const NewsletterWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NewsletterText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const NewsletterForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EmailInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: none;
  flex: 1;
  margin-right: 10px;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: #00453d;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #d0a030;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;

const SocialIcon = styled.a`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #f0c040;
  }
`;

const BottomBar = styled.div`
  padding: 20px 0;
  border-top: 1px solid #00453d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterText = styled.p`
  font-size: 14px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const PolicyLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const PolicyLink = styled.a`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
