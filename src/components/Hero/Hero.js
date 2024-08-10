import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Xin Chao,
        </SectionTitle>
        <SectionText>
          {" "}
          I'm Ivan Teo, high school student, competitive programmer, social
          activist. Currently I am studying at Hanoi - Amsterdam school. I have
          a hobby of collecting insects
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/not_exist.txt";
          }}
        >
          My CV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
