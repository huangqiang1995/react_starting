import React,{ Component } from 'react';

import ClickChild from './ClickChild.js';

class ClickParent extends Component {
  
  render(){
    return(
      <div>
        <ClickChild caption="First" initValue={0} />
        <ClickChild caption="Second" initValue={10} />
        <ClickChild caption="Third" initValue={20} />
      </div>
    )
  }
}

export default ClickParent;