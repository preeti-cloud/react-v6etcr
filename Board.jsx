import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class Board extends Component {

renderSquare(i){
return (

  <Square value ={this.props.squares (i)}
  onClick = {() => this.props.onClick(i)}>

  </Square>
)
render
}

render(){
  return (
     <div>
         <div className ="border-row">
             {this.renderSquare(0)}
             {this.renderSquare(1)}
             {this.renderSquare(2)}
         </div>
         <div className="border-row">
             {this.renderSquare(0)}
             {this.renderSquare(1)}
             {this.renderSquare(2)}
         </div>
         <div className="border-row">
             {this.renderSquare(0)}
             {this.renderSquare(1)}
             {this.renderSquare(2)}
         </div> 
     </div>
  );
}
}