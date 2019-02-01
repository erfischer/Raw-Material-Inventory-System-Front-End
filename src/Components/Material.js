import React from 'react';

// export class Material extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>New Material</p>
//             </div>
//         )
//     }
// }

const material = (props) => {
    return (
        <div>
            <p>Material: {props.name}</p>
            <p>Amount: {props.amount}</p>
            <p>Amount Prepared: {props.amountPrepared}</p>
        </div>
    )
};

export default material;