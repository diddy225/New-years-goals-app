import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../css/dateCard.css'

const DateCard = (props) => {
  let selectReading = props.index  === props.day ? null : props.reading
  let selectCoding =  props.index  === props.day ? null : props.coding
  let selectFitness = props.index  === props.day ? null : props.fitness
  let selectFamily =  props.index  === props.day ? null : props.family
  return (
    <div>
      <div className="numberBox">{props.day}</div>
      <div className="containerGrid">
      <div onClick={() => props.select(props.index, "reading")} className={ selectReading ? "iconBox book active" : "iconBox book"}><Icon name="book" size="big" /></div>
      <div onClick={() => props.select(props.index, "coding")} className={ selectCoding ? "iconBox book active" : "iconBox book"}><Icon name="code" size="big"/></div>
      <div onClick={() => props.select(props.index, "fitness")} className={ selectFitness ? "iconBox book active" : "iconBox book"}><Icon name="stopwatch" size="big"/></div>
      <div onClick={() => props.select(props.index, "family")} className={ selectFamily ? "iconBox book active" : "iconBox book"}><Icon name="home" size="big"/></div>
    </div>
    </div>
  )
}

export default DateCard