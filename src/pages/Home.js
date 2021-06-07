import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button, Input, UL, LI } from "../styledElements";
import { Layout } from "../layout";
import HeroImage from "../assets/images/illustration-working.svg";
// import

const HeroSection = styled.section`
  background-color: #fff;
  display: flex;
  img {
    width: 100%;
  }
`;
const MainSection = styled.main``;
const FeatureSection = styled.section``;

export default function App() {
  const [link, setLink] = useState("");
  const [shortenLink, setShortenLink] = useState([]);
  const [loading, setLoading] = useState(false);
  const getShortedLink = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      console.log(res);
      setShortenLink((previousList) => [...previousList, res.data.result]);
      setLink("");
      setLoading(false);
    } catch (error) {
      // Handle error
      console.error("error > ", error);
    }
  };
  return (
    <Layout>
      <HeroSection>
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <div>
          <img src={HeroImage} alt="" />
        </div>
      </HeroSection>
      <MainSection>
        <div>
          <Input value={link} onChange={(e) => setLink(e.target.value)} />
          <Button onClick={getShortedLink}>
            {loading ? "Shortening..." : "Shorten it!"}
          </Button>
        </div>
        <UL>
          {shortenLink.map((item) => (
            <LI key={item.code}>
              <span>{item.original_link}</span>
              <span>{item.full_short_link}</span>
              <Button>Copy</Button>
            </LI>
          ))}
        </UL>
      </MainSection>
      <FeatureSection></FeatureSection>
    </Layout>
  );
}
