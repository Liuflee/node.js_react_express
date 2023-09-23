import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANG } from './constants'
import { ArrowIcon } from './components/Icons.tsx'
import { LanguageSelector } from './components/LanguageSelector.tsx'
import { SectionType } from './types.d.tsx'

const App = () => {
  const { fromLang, toLang, interchangeLang, setFromLang, setToLang } = useStore()


  return (
    <Container fluid>
      <h1>Traductor epico de Anette</h1>
      <Row>
        <Col>
          <LanguageSelector 
          type={SectionType.From}
          value={fromLang}
          onChange={setFromLang} />
          {fromLang}
        </Col>

        <Col>
          <Button variant="link" disabled={fromLang === AUTO_LANG} onClick={interchangeLang}> <ArrowIcon /> </Button>
        </Col>

        <Col>
          <LanguageSelector
          type={SectionType.To}
          value={toLang}
          onChange={setToLang} />
          {toLang}
        </Col>

      </Row>

    </Container>
  )
}

export default App
