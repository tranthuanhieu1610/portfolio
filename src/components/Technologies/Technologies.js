import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { Skills } from "./Skills";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have extensive experience working with a variety of technologiesr. I've
      developed and maintained multiple projects using these technologies.
    </SectionText>
    <List>
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
