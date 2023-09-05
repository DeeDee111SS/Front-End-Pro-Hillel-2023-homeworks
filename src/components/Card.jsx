import React from 'react';

class Card extends React.Component{
    render () {
        return (
            // <div>
            //     <div class="btn-group font-monospace" role="group">
            //         <button type="button" class="btn btn-outline-success">+</button>
            //         <button type="button" class="btn btn-outline-danger">-</button>
            //     </div>
            // </div>

<div>
<div class="btn-group font-monospace" role="group">
  <button type="button" class="btn btn-outline-success">+</button>
  <button type="button" class="btn btn-outline-danger">-</button>
</div>
<div class="list-group mt-2">
  <button type="button" class="list-group-item list-group-item-action">2</button>
  <button type="button" class="list-group-item list-group-item-action">1</button>
  <button type="button" class="list-group-item list-group-item-action">2</button>
  <button type="button" class="list-group-item list-group-item-action">1</button>
</div>
</div>
        );
    }    
};

// function Card (){
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">Some quick example text to build on the card</p>
//                 <button type="button" className="btn btn-primary">Go somewhere</button>
//             </div>
//         </div>
//     );
// };

export default Card;