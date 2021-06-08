import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="project-wrapper__text-heading">What I Do</h2>
        </Fade>
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={450}
                distance="30px"
              >
                <Carousel>
                  <Carousel.Item>
                  <Card className="project-wrapper__card">
                    <Card.Img className="project-wrapper__image" src="https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Card.ImgOverlay>
                      <Card.Title className="project-wrapper__text-title"> {title || 'TENNIS'}</Card.Title>
                      <Card.Text className="project-wrapper__text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.ImgOverlay>  
                  </Card>  
                    {/*<Row>
                      <Col lg={6} sm={12}>
                        <div className="project-wrapper__text">
                          <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                          <div>
                            <p>
                              {info ||
                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                            </p>
                            <p className="mb-4">{info2 || ''}</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} sm={12}>
                        <div className="project-wrapper__image">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row>
                      <Col lg={6} sm={12}>
                        <div className="project-wrapper__text">
                          <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                          <div>
                            <p>
                              {info ||
                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                            </p>
                            <p className="mb-4">{info2 || ''}</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} sm={12}>
                        <div className="project-wrapper__image">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </Col>
                              </Row>*/}
                  </Carousel.Item>
                </Carousel>

                {/*<div className="project-wrapper__text">
                  <p>
                    {info ||
                    'Hello random person on the internet! I’m Aditi, an 18 year old from Bangalore, India. My pronouns are she/her and I’m an incoming freshman at New York University (NYU) studying Mathematics and Computer Science.'}
                  </p>
                  <p>
                    {info ||
                    'I enjoy working out, listening to music, reading and talking about random things, texting on Discord, baking, playing with color palettes, learning new things, and finding interesting and challenging things to do.'}
                  </p>
                  <p>
                    {info ||
                    'Oh I almost forgot, I also play tennis and am a recruited athlete at NYU.'}
                  </p>
                    </div>  */}
                {/*<CardDeck>
                  <Card>
                    <Card.Img className="project-wrapper__image" variant="top" src="https://images.unsplash.com/flagged/photo-1562500420-058592ecb489?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" />
                    <Card.Body>
                      <Card.Title className="project-wrapper__text-title"> {title || 'TENNIS'}</Card.Title>
                      <Card.Text className="project-wrapper__text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>  
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                          className="cta-btn cta-btn--projects"
                          href={url || '#!'}
                        >
                          See Live
                    </a>
                  </Card>
                  <Card>
                    <Card.Img className="project-wrapper__image" variant="top" src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=800" />
                    <Card.Body>
                      <Card.Title className="project-wrapper__text-title">{title || 'COLLEGE ADMISSIONS HELP'}</Card.Title>
                      <Card.Text className="project-wrapper__text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>  
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                          className="cta-btn cta-btn--projects"
                          href={url || '#!'}
                        >
                          See Live
                    </a>  
                  </Card>
                  <Card>
                    <Card.Img className="project-wrapper__image" variant="top" src="https://images.unsplash.com/photo-1508105859382-b487af436eff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
                    <Card.Body>
                      <Card.Title className="project-wrapper__text-title">{title || 'PROJECTS'}</Card.Title>
                      <Card.Text className="project-wrapper__text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                      </Card.Text>
                    </Card.Body>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                          className="cta-btn cta-btn--projects"
                          href={url || '#!'}
                        >
                          See Live
                    </a>
                  </Card>
                </CardDeck>
                {/*
                <CardDeck>
                  <Card border="secondary" style={{ width: '18rem' }}>
                    <div className="project-wrapper__image"> 
                      <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        > 
                          <div data-tilt className="rounded-circle">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </a> 
                    </div>

                    <div className="project-wrapper__text">
                      <Card.Body>
                        <Card.Title className="project-wrapper__text-title">{title || 'Tennis'}</Card.Title>
                        <Card.Text>
                          <p>
                            {info ||
                            "I've been playing tennis nationally for the past 8 years and I'm also a recruited athlete at NYU."}
                          </p>
                        </Card.Text>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            href={url || '#!'}
                          >
                            See Live
                        </a>
                      </Card.Body>
                    </div>
                  </Card>
                  <Card border="secondary" style={{ width: '18rem' }}>
                    <div className="project-wrapper__image">
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <div data-tilt className="rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </a>                     
                    </div> 
                    <div className="project-wrapper__text">
                      <Card.Body>
                        <Card.Title className="project-wrapper__text-title">{title || 'College Admissions Help'}</Card.Title>
                        <Card.Text>
                          <p>
                            {info ||
                            'As a successful graduate of the college application process, I like to help others in their application journeys by sharing my experience and a few tricks I learnt about admissions.'}
                          </p>
                        </Card.Text>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          See Live
                        </a>
                      </Card.Body>
                    </div>
                  </Card>
                  <Card border="secondary" style={{ width: '18rem' }}>
                    <div className="project-wrapper__image">
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        > 
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </a> 
                    </div>

                    <div className="project-wrapper__text"> 
                      <Card.Body>
                        <Card.Title className="project-wrapper__text-title">{title || 'Projects'}</Card.Title>
                        <Card.Text>
                          <p>
                            {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                          </p>
                        </Card.Text>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          See Live
                        </a>
                      </Card.Body>
                    </div>
                  </Card>
                </CardDeck> */}
              </Fade>
            );
          })}
        </div>
      </Container>
    </section>
        ); 
};

export default Projects;