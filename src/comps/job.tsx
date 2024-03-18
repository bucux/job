
import './css/job.css'

type jobType = {
  className: string,
  title: string,
  contractType: string,
  country: string,
  city: string
}

export default function Job({className, title, contractType, country, city}: jobType) {
  return (
    <div className='job-cont1' style={{ borderColor: className }}>
      <h2>{title}</h2>
      <div className='job-cont2'>
        <p>{contractType}</p>
        <p>-</p>
        <p>{country}</p>
        <p>-</p>
        <p>{city}</p>
      </div>
    </div>
  )
}
