import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { AUTO_LANG } from './constants'
import { ArrowIcon } from './components/Icons.tsx'
import { LanguageSelector } from './components/LanguageSelector.tsx'
import { SectionType } from './types.d.tsx'
import { TextArea } from './components/TextArea.tsx'

const App = () => {
  const { fromLang, toLang, fromText, result, interchangeLang, setFromLang, setToLang, setFromText, setResult } = useStore()


  return (
    <Container fluid>
      <h1>Traductor epico de Anette</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
            type={SectionType.From}
            value={fromLang}
            onChange={setFromLang} />
            
              <TextArea 
              placeholder='Introducir texto...'
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}

              />
          </Stack>
        </Col>

        <Col>
          <Button variant="link" disabled={fromLang === AUTO_LANG} onClick={interchangeLang}> <ArrowIcon /> </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
            type={SectionType.To}
            value={toLang}
            onChange={setToLang} />

              <TextArea 
              placeholder='Traduccion...'
              type={SectionType.To}
              value={result}
              onChange={setResult}
              />
          </Stack>
        </Col>

      </Row>

    </Container>
  )
}

export default App
