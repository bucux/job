

import './css/header.css'

export default function Header({title} : {title: string}) {
  return (
    <div id='header-cont1'>
      <h1>
        {title}
      </h1>
    </div>
  )
}
