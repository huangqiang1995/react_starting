import React from 'react';
import {setFilter} from '../actions';
import {connect} from 'react-redux';
import {FilterTypes} from '../../constants.js';
import '../style.css';
const Filter = ({filter,onSetFilter})=>{
  return (
    <div className="filters">
      <span className={filter === FilterTypes.ALL ? 'filter active' : 'filter' } onClick={()=>onSetFilter(FilterTypes.ALL)}>{FilterTypes.ALL}</span>
      <span className={filter === FilterTypes.COMPLETED ? 'filter active' : 'filter' } onClick={()=>onSetFilter(FilterTypes.COMPLETED)}>{FilterTypes.COMPLETED}</span>
      <span className={filter === FilterTypes.UNCOMPLETED ? 'filter active' : 'filter' }onClick={()=>onSetFilter(FilterTypes.UNCOMPLETED)}>{FilterTypes.UNCOMPLETED}</span>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {filter:state.filter}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onSetFilter:(filterType)=>{
      dispatch(setFilter(filterType))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);