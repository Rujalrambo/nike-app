import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard 
        key={service.label} {...service}/>
      ))}

    </section>
  )
}

export default Services


// <div className="grid grid-cols-3 border-gray-950 p-22">
//   {services.map((service) => (
  //     <div key={service.label} className="flex flex-col items-center gap-2">
//       <img src={service.imgURL} alt={service.label} className="w-16 h-16" />
//       <h3 className="font-palanquin font-bold text-lg">{service.label}</h3>
//       <p className="font-montserrat text-sm text-center">{service.subtext}</p>
//     </div>
//   ))}
// </div>