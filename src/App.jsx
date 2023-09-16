import { useState } from 'react'
import sentence from "./db/sentence.json"
import { getRandom } from './utils/getRandom'
import ChangePhrase from './components/ChangePhrase'
import Buton from './components/Buton'
import './App.css'

import planeta1 from "./assets/planeta1.png"
import planeta2 from "./assets/planeta2.png"
import planeta3 from "./assets/planeta3.png"
import planeta4 from "./assets/planeta4.png"




const arrayImg = ["spc1","spc2","spc3","spc4"]
const arrayPla = [planeta1, planeta2, planeta3, planeta4]

function App() {
  const [pharses, setPharses] = useState(getRandom(sentence))
  const [image, setImage] = useState (getRandom(arrayImg));
  const [planet, setPlanet] = useState (getRandom(arrayPla))



  const handleChange = () => {
  setPharses(getRandom(sentence));
  setImage(getRandom(arrayImg));
  setPlanet(getRandom(arrayPla));
  }

return (
    <main className={`phrase__container ${image}`}>
      <h1>INFOGALAX</h1>
      <ChangePhrase phrases={pharses.phrase} author={pharses.author}/>
      <Buton handleChange={handleChange}/>
      {<img src={planet} />}
    </main>
  )
}

export default App
