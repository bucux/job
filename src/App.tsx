

import './App.css'
import Header from './comps/header'
import Footer from './comps/footer'
import Jobs from './comps/jobs'

function App() {


  return (
    <div className='app-cont1'>
      <Header title='The Job Board'/>
      <Jobs/>
      <Footer nom= 'Ving'/>
    </div>
  )
}

export default App
