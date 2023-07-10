import React, { useState, useCallback } from "react"
import styled, { css } from "styled-components"
import { Carousel } from "react-responsive-carousel"
import { darken } from "polished"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Images as ImagesIcon } from "styled-icons/fa-solid/Images"
import { GithubAlt as GithubIcon } from "styled-icons/fa-brands/GithubAlt"
import { ExternalLinkSquareAlt as ExternalLinkIcon } from "styled-icons/fa-solid/ExternalLinkSquareAlt"

import Layout from "../components/Layout"
import Modal from "../components/Modal"
import Container from "../components/Container"
import { theme, mixins } from "../styles"

const { space, palette } = theme

/* Override default react-responsive-carousel styles */
const carouselCss = css`
  .carousel .slide {
    background-color: ${palette.black};
  }
  .carousel .carousel-status {
    right: 10px;
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    margin: 0 20px;
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: ${palette.gray};
  }
`

const Project = styled.div`
  :not(:last-child) {
    margin-bottom: ${space.xxxLarge};
  }

  > header {
    position: relative;
    border: 1px solid ${palette.blue};

    > h1 {
      padding: ${space.small} ${space.medium};
    }

    .socials {
      position: absolute;
      top: 0;
      right: 0;

      ${mixins.flexRowCenter};
      height: 100%;

      > a {
        height: 100%;
        ${mixins.inlineLink};
        ${mixins.flexColCenter};

        border-left: 1px dotted ${palette.blue};
        padding: 0 ${space.large};
        transition: ${theme.transition};

        > svg {
          color: ${palette.lightGray};
        }
        &:hover,
        &:focus,
        &:active {
          background-color: ${darken(0.333, palette.blue)};
          > svg {
            color: ${palette.white};
          }
        }
      }
    }
  }

  > footer {
    ${mixins.flexRowCenter};
    justify-content: space-between;
  }
`

export const ImagesButton = styled.button`
  display: block;
  margin-right: -${space.small};
  ${mixins.iconButton};
`

const renderImages = images =>
  images.map((image, index) => {
    return (
      <Img
        key={image.childImageSharp.fluid.src}
        fluid={image.childImageSharp.fluid}
        style={{ height: "600px" }}
        imgStyle={{ objectFit: "contain", padding: "50px" }}
        alt="Project Image"
      />
    )
  })

const ProjectsPage = () => {
  const [projectIndex, setProjectIndex] = useState(-1)
  const { projects } = useStaticQuery(query)
  const closeModal = useCallback(event => setProjectIndex(-1), [])
  const handleImagesButtonClick = index => event => setProjectIndex(index)

  return (
    <Layout>
      <Container>
        <p>
          These are some of the projects I have worked on. I think it is an important practice to
          tinker around and try new things seperate from your job to stay sharp and up-to-date.
        </p>
        <div>
          {projects.edges.map((edge, index) => {
            const { node } = edge
            const { frontmatter, html } = node
            const { title, date, technologies, url, github, images, order } = frontmatter

            return (
              <Project key={title}>
                <header>
                  <h1>{title}</h1>
                  <div className="socials">
                    {github && (
                      <a rel="noreferrer noopener" target="_blank" href={github}>
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {url && (
                      <a rel="noreferrer noopener" target="_blank" href={url}>
                        <ExternalLinkIcon size={18.75} />
                      </a>
                    )}
                  </div>
                </header>
                <main>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                  <time dateTime={date}>- {date}</time>
                </main>
                <footer>
                  <small>{technologies.join(", ")}</small>
                  {images && (
                    <ImagesButton onClick={handleImagesButtonClick(index)}>
                      <ImagesIcon size={20} />
                    </ImagesButton>
                  )}
                </footer>
              </Project>
            )
          })}
        </div>
      </Container>
      <Modal open={projectIndex > -1} onClose={closeModal}>
        {projectIndex > -1 && (
          <Carousel css={carouselCss} showArrows showIndicators showThumbs={false}>
            {renderImages(projects.edges[projectIndex].node.frontmatter.images)}
          </Carousel>
        )}
      </Modal>
    </Layout>
  )
}

const query = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            technologies
            url
            github
            images {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            order
          }
          html
        }
      }
    }
  }
`

export default ProjectsPage
