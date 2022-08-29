import Layout, { Row, Main, Container } from 'components/layouts/WideStretched'
import Header from 'components/headers/Underline'
//import Image from 'next/image'

export default function Index() {
  return (
    <Layout className="text-gray-800 transition-colors duration-200 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <Row>
        <Container>
          <Header />
        </Container>
      </Row>
      <Main>
        <Container>
          <div className="py-9 sm:px-12 md:text-3xl">
            <div >
              Novel is a social ebook reader for Urbit ships and Pilots
              <br></br>
              <br></br>
              Hackers:
              <br></br>
              ~lomseg-laclut
              <br></br>
              "raygun"~dirmyn-raglun
              <br></br>
              ~hodreb-racdem
              <br></br>
              <br></br>
              <a
                href='web+urbitgraph://group/~lomseg-laclut/novel'
                className='font-bold underline'
              >
                Novel Group on Urbit
              </a>
            </div>
          </div>
        </Container>
      </Main>
      <Row className="text-gray-800 bg-gray-400 border-t border-gray-300">
        <Container>
          Assembly 2022 Hackathon
        </Container>
      </Row>
    </Layout>
  )
}
