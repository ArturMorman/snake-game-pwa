import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import App from '../components/snake/App'


const IndexPage = () => (
  <Layout>

    <div className={`game`} >

      {/* <div
        style={{
          position: 'absolute',
          left: '4px',
          top: '4px',
          width: '100vw',
          height: '100vh',
          maxHeight: '100vh',
          zIndex: '0'
        }}
      >
        <StaticImage
          src="../assets/images/snake-real.jpg"
          loading="eager"
          width={1200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{
            marginBottom: `var(--space-3)`,
            opacity: '0.88',
            // filter: 'grayscale(100%)'
            filter: 'brightness(33%)',
            lineHeight: '0',
            minHeight: '100%'
          }}
        />
      </div> */}


      <div className={`appWrap`} >
        <App />
      </div>

    </div>

  </Layout>
)

export default IndexPage