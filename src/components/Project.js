import React from "react";
import "../styles/Project.css"

function Project(props) {
    const image = require(`../images/${props.image}`)
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="img-container">
          <img alt={props.title} src={image} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }

  export default Project;


//   function FriendCard(props) {
//     return (
//       <div className="card">
//         <div className="img-container">
//           <img alt={props.name} src={props.image} />
//         </div>
//         <div className="content">
//           <ul>
//             <li>
//               <strong>Name:</strong> {props.name}
//             </li>
//             <li>
//               <strong>Occupation:</strong> {props.occupation}
//             </li>
//             <li>
//               <strong>Address:</strong> {props.location}
//             </li>
//           </ul>
//         </div>
//         <span className="remove" onClick={props.doRemove}>𝘅</span>
//       </div>
//     );
//   }