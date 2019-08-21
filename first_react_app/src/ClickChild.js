import React,{ Component  } from 'react';
import PropTypes from 'prop-types';
 
class ClickChild extends Component {
  
  constructor(props){
    super(props);
    this.onClickIncBtn = this.onClickIncBtn.bind(this);
    this.onClickDecBtn = this.onClickDecBtn.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.state = {
      count : props.initValue || 0
    } 
  }
  onClickIncBtn(){
    this.updateCount(true);
  }
  onClickDecBtn(){
    this.updateCount(false);    
  }
  
  updateCount(isInc){
    const previousValue = this.state.count;
    const newValue = isInc?previousValue+1:previousValue-1;
    this.setState({count:newValue});
    this.props.onUpdate(newValue,previousValue);
  }

  componentWillMount(){
    console.log("enter componentWillMount "+this.props.caption)
  }

  componentDidMount(){
    console.log("enter componentDidMount "+this.props.caption)
  }

  componentWillReceiveProps(nextProps){//只要父组件重新渲染就会引发次钩子，不论props的值是否有变化
    console.log("enter componentWillReceiveProps "+this.props.caption)
  }

  shouldComponentUpdate(nextProps,nextState){
    return (this.props.caption !== nextProps.caption)  || (this.state.count !== nextState.count)
  }

  render(){
    console.log("enter render " + this.props.caption)
    const {caption} = this.props;
    return(
      <div>
        <button onClick={this.onClickIncBtn}>+</button>
        <button onClick={this.onClickDecBtn}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

ClickChild.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate:PropTypes.func
};

ClickChild.defaultProps = {
  initValue:0,
  onUpdate:f=>f
}

export default ClickChild;