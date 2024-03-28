import React, { Component } from 'react';

class Counter extends Component {
  state ={ 
      count:0
    
  };
  
    render() { 
        return (<React.Fragment>
            <div>
                <span>{this.state.count}</span><br/>
                <span>{this.formatcount()}</span>
            </div>
            <button>Increment</button>
            </React.Fragment>
        );
    }
    formatcount()
  {
      const {count} = this.state;

      return count === 0 ?"Zero":count;
  }
}
 
export default Counter;