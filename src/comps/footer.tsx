



import './css/footer.css'

export default function Footer({nom} : {nom: string}) {
  return (
    <div id='footer-cont1'>
      <p>Made with <strong>React</strong> at le <strong>Reacteur</strong> by <strong>{nom}</strong></p>
    </div>
  )
}