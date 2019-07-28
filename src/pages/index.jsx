import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Nelson.
        </BigTitle>
        <Subtitle>A portuguese Electrical Engineer living in Porto.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>My Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="MOSANO"
            link="https://www.mosano.eu"
            bg="linear-gradient(to right, #1E22AA 0%, #E31C79 100%)"
          >
            This project is my goal dream. With the help of two talented
            developers I have co-founded MOSANO, a web & mobile development
            company. In MOSANO I work as Business Developer, helping other
            companies achive their goals trough technology enablers.
          </ProjectCard>
          <ProjectCard
            title="TakeEat"
            link="https://app.take-eat.pt/"
            bg="linear-gradient(to right, #fee1b2 0%, #ED1E79 100%)"
          >
            This my recent project, that came to life due too our everyday
            problem to order food from neighbourhood takeaways. I will place
            more info about this project, stay tuned.
          </ProjectCard>
          <ProjectCard
            title="RealtimeAds"
            link="https://www.realtimeads.net"
            bg="linear-gradient(to right, #00C6D2 0%, #1E22AA 100%)"
          >
            RealTimeAds was platform that we envisioned that it could turn out
            to be the next trend in Programmatic Digital out of Home. However
            due to technologies restrictions and lack of time, we had to put
            this project on hold for while.
          </ProjectCard>
          <ProjectCard
            title="Perfumes365"
            link="https://perfumes365.pt"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Working as technological advisor for Perfumes365, where I also help
            maitain the e-commerce platform.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Nelson Novais" />
          <AboutSub>
            Hardworking. Professional. Ambitious. Benfica Fan.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Born and raised in a portuguese small town, Fafe, my love for
          technology started when I first saw Terminator 2 at ate age of 8.
          Since then I have always been fascinated about robots and technology
          and general. From young age I decided that I wanted to be an enginner,
          and at age of 19 I moved to Porto, to study Electrical & Computer
          Engineering at Instituto Superior de Engenharia do Porto. After my
          graduation I started working as Field support Engineer in a Portuguese
          Startup, where I have learned a lot about dealing with customers and
          technical challenges. Then I realize that my goals were to have my own
          company and with the help of talented & good friends I founded MOSANO,
          a web and mobile application development company. With 5+ in the Tech
          field (aka nerd), I work now as business developer and bit as
          executive officer, however I don't like to be seen as chief of
          (something), I prefer to be seen as someone which can help you to get
          a reliable and honest answer for your everyday technical/business
          challenges.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:nnovais@mosano.eu">Hi</a> or find me on other
            platforms:{" "}
            <a href="https://www.linkedin.com/in/nelson-novais/">LinkedIn</a> &{" "}
            <a href="https://angel.co/nelson-novais">AngelCo</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Nelson Novais.{" "}
          <a href="https://github.com/nelsonnovais/nelsonnovais.com">
            GitHub Repository
          </a>
          . Powered by <a href="https://www.mosano.eu">MOSANO</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index
