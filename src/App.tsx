import {createSignal} from 'solid-js'
import {FaSolidArrowRight} from 'solid-icons/fa'
import {evaluate} from 'nlcalclib'
import './app.css'
import '@fontsource/schibsted-grotesk'
import '@fontsource/schibsted-grotesk/700.css'
import {TextField, TextFieldInput} from './components/ui/text-field.tsx'
import {Button} from './components/ui/button.tsx'
import {Card, CardContent} from './components/ui/card.tsx'

function App() {
  const [input, setInput] = createSignal('')
  const [output, setOutput] = createSignal(' ')

  function calculate() {
    setOutput(evaluate(input()) || ' ')
  }

  return (
    <>
      <div class={'mx-auto max-w-2xl px-4 w-full h-full flex flex-col items-start justify-center gap-2'}>
        <h1 class={'font-bold text-3xl'}>Calculate</h1>
        <div class={'w-full grid grid-cols-[1fr_2.5rem] gap-2'}>
          <TextField value={input()} onChange={setInput} class={'w-full'} onKeyDown={(e) => {
            if (e.key === 'Enter') calculate()
          }}>
            <TextFieldInput placeholder={'Enter expression...'} />
          </TextField>
          <Button onClick={calculate}>
            <FaSolidArrowRight />
          </Button>
        </div>
        <Card class={'min-h-10 w-full'}>
          <CardContent class={'p-3 h-12'}>
            {output()}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default App
