import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import moment from 'moment'
import DateCard from './DateCard'
import '../css/calendar.css'
//import Header from './Header'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      today: moment(),
      currentMonth: moment().month(),
      currentYear: moment().year(),
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      activeList: null
    }
  }

  componentDidMount() {
    const lastDay = this.state.today.daysInMonth()
    const statusList = []
    for (let i = 1; i <= lastDay; i++) {
      statusList.push(
        {
          day: i,
          reading: false,
          coding: false,
          fitness: false,
          family: false
        }
      )
    }
    this.setState({activeList: statusList})
  };
  //need to figure out how to map obj True false to each ele.**********YOU STOPPED HERE!!!!!**********.
  handleSelect = (index, goal) => {
    const { activeList } = this.state
    this.setState(state => {
        state.activeList.map((item, j) => {
        return activeList[index][goal] = !activeList[index][goal]
      });
      return {
        activeList
      }
    })
  }
  

  handleNext = () => {
    const { currentMonth, currentYear } = this.state
    this.setState({
      currentYear: (currentMonth === 11) ? currentYear + 1 : currentYear,
      currentMonth: (currentMonth + 1) % 12
    })
  }

  handlePrev = () => {
    const { currentMonth, currentYear } = this.state
    this.setState({
      currentYear: (currentMonth === 0) ? currentYear - 1 : currentYear,
      currentMonth: (currentMonth === 0) ? 11 : currentMonth - 1
    })
  }

  getDayOfWeek = (year, month) => {
    const { today } = this.state;
    const emptyDays = []
    const firstDay = today.year(year).month(month).startOf('month').day(); // Gets the first day (Mon...Fri..Sun)

    for(let i = 0; i < 6; i++){ 
      for(let j = 0; j < 7; j++) { //picks the first day of the week.
        if( i === 0 && j < firstDay) {
          emptyDays.push(j);
        }       
      }
    }
    return emptyDays
  }

  getDaysInMonth = (year, month) => {
    const { today } = this.state;
    const daysInMonth = []
    const lastDayInMonth = today.year(year).month(month).daysInMonth(); // Gets the total number of days in the month
    for( let i = 1; i <= lastDayInMonth; i++ ){
      daysInMonth.push(i)
    }
    return daysInMonth
  }

  render() {
    const {currentMonth, currentYear, daysOfWeek, today, activeList} = this.state;
    
    const dayNames = daysOfWeek.map((name, i) => {
      return <div key={i} className="weekdays">{name}</div>
    })
    const monthStart = this.getDayOfWeek(currentYear, currentMonth).map((i) => {
      return <div key={i}></div>
    })
    const daysInMonth = this.getDaysInMonth(currentYear, currentMonth).map((day, i) => {
      return (<DateCard 
                key={day} 
                day={day} 
                index={i} 
                select={this.handleSelect}
                reading={!activeList ? null : activeList[i].reading} 
                coding={!activeList ? null : activeList[i].coding}
                fitness={!activeList ? null : activeList[i].fitness}
                family={!activeList ? null : activeList[i].family}
                />
              )
    })
    return (
      <div className="ui container">
        <header className="header">
          <Icon name="angle left" size="big" onClick={this.handlePrev} />
          <p className="month-name">{today.format('MMMM')} {today.format('YYYY')}</p>
          <Icon name="angle right" size="big" onClick={this.handleNext} />
        </header>
        <div className="calendar-main">
          {dayNames}
          {monthStart}
          {daysInMonth}
        </div>
      </div>
    )
  }
}

export default Calendar