
import { Smiley, Heart, Confetti } from '@phosphor-icons/react'
import './App.css'
function App() {
  

  return (
    <>
      <div>
        <div className='primeira'>
          <h1>Lara Ocker</h1>
        
        <h2>Você está sendo convidada para um momento de <span>"Musica,aventura e diversão"</span></h2>
        <h3>Como diria o grande filósofo Nícolas Netto </h3>
        <Smiley size={32} /> <Heart size={40} /> <Confetti size={32} />

        <h4>Você me daria mais essa chance?</h4>
        <div className='botoes'> <a href="https://wa.me/5548992151944?text=Sim,%20Vou!!"><button >SIM</button></a>  <a href="https://api.whatsapp.com/send?phone=5548992151944&text=Que%20pena%20amiguinho%21%2C%20n%C3%A3o%20vai%20rolar"><button>Não Vai rolar</button></a></div>
        </div>
      </div>
      
    </>
  )
}

export default App
