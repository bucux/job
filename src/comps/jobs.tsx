
import Job from "./job";
import './css/jobs.css'

export default function Jobs() {

  const tab = [
    {
      className: 'red',
      title: 'Full Time Sales Associate - Sydney Boutique',
      contractType: 'CDI',
      country: 'Australie',
      city: 'Sydney'
    },
    {
      className: 'green',
      title: 'Agent de sécurité - Pantin',
      contractType: 'CDI',
      country: 'France',
      city: 'Pantin'
    },
    {
      className: 'yellow',
      title: "Responsable d'atelier H/F",
      contractType: 'CDD',
      country: 'France',
      city: 'Paris'
    },
    {
      className: 'blue',
      title: 'Chef de projets',
      contractType: 'CDD',
      country: 'France',
      city: 'Paris'
    },
    {
      className: 'pink',
      title: 'Développeur React.js',
      contractType: 'CDI',
      country: 'France',
      city: 'Paris'
    },
    {
      className: 'red',
      title: 'Sales Associated Stockolm',
      contractType: 'CDI',
      country: 'Suède',
      city: 'Stokholm'
    },
    {
      className: 'green',
      title: 'Vendeur/se Crans Montana',
      contractType: 'CDI',
      country: 'Suisse',
      city: 'Crans-Montana'
    },
    {
      className: 'red',
      title: 'CRM Data Quality Analyst',
      contractType: 'CDI',
      country: 'USA',
      city: 'New York'
    },
    {
      className: 'blue',
      title: 'Infirmier H/F',
      contractType: 'CDI',
      country: 'France',
      city: 'Pantin'
    },

  ]

  return (
    <div className="jobs-cont1">
      {tab.map((item, index)=>(
        <div key={index}>
          <Job 
            className={item.className} 
            title={item.title}
            contractType={item.contractType}
            country={item.country}
            city={item.city}
          />
        </div>
      ))}
    </div>
  )
}
