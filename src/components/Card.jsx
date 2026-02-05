import Products from "./Product"
import './Card.css'

const Card=({data})=>{
    return(
        <div className="card-container">
         {
            data.map((pvcdata)=>(
               <div className="card" key={pvcdata.id}>
                <img src={pvcdata.image} alt="" />
                <h2>{pvcdata.name}</h2>
                <p>${pvcdata.price}</p>
                <p>{pvcdata.rate}</p>
                <span>{pvcdata.description}</span>
               </div>
            ))
         }
        </div>
    )
}

export default Card;