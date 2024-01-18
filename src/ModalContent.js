
import React from 'react';
import './App.css';


class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStartClass: '07:00',
      timeEndClass: '07:45',
      commonHours: 3,
      currentDate: '',
      endDate: '',
      Tuesday: false,
      Wednesday: true,
      Thursday: false,
      Friday: false,
      Monday: false,
      Saturday: false,
      Sunday:false,
      hoursInDay: 0
    }

    this.changeTypeClock = this.changeTypeClock.bind(this);
    this.decreaseCommonHours = this.decreaseCommonHours.bind(this);
    this.increaseCommonHours = this.increaseCommonHours.bind(this);
    this.getCurrentDate = this.getCurrentDate.bind(this);
    this.selectFirstDaySet = this.selectFirstDaySet.bind(this);
    this.selectSecondDaySet = this.selectSecondDaySet.bind(this);
    this.selectTuesday = this.selectTuesday.bind(this);
    this.selectWednesday = this.selectWednesday.bind(this);
    this.selectThursday =  this.selectThursday.bind(this);
    this.selectFriday = this.selectFriday.bind(this);
    this.selectMonday = this.selectMonday.bind(this);
    this.selectSaturday = this.selectSaturday.bind(this);
    this.selectSunday = this.selectSunday.bind(this);
    this.changeBreak = this.changeBreak.bind(this);
    this.increasehoursInDay = this.increasehoursInDay.bind(this);
    this.decreasehoursInDay= this.decreasehoursInDay.bind(this);
  }

  componentDidMount() {
    let currentDate = this.getCurrentDate();
    console.log(currentDate);
    this.setState({currentDate: currentDate});
    let endDate = this.getCurrentDate(2);
    console.log(endDate);
    this.setState({endDate: endDate});
  }

  getCurrentDate (addDays, endDate) {
    let newDate = endDate?.length > 0 ? new Date(endDate): new Date();
    let newDay=newDate.getDate() + addDays;
    if(newDate.getDate() + addDays > 31) {
        newDay=1;
    }
    let date_raw = addDays > 0 ? newDay : newDate.getDate();
    let month_raw = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    var date, month
      
    if (date_raw<10)  {  date ="0"+date_raw.toString()} else {  date =date_raw.toString()}
    if (month_raw<10)  {  month ="0"+month_raw.toString()} else {  month =month_raw.toString()}


    return `${year}-${month}-${date}`
  } 

  changeTypeClock(event) {
    let value = event.target.value;

    if(value==="Академические") {
      this.setState({timeEndClass: '07:45'});
    }

    if(value==="Астрономические") {
      this.setState({timeEndClass: '08:00'});

      if(this.state.hoursInDay > 0) {
        this.setState({timeEndClass: '09:00'});
      }

    } 

  }

  decreaseCommonHours (event) {
     if(this.state.commonHours > 0) {
        this.setState(prevState =>{
         return{
              ...prevState,
              commonHours : prevState.commonHours - 1
         }
      });
    }

    event.preventDefault();
  }
  
  increaseCommonHours(event) {
      this.setState(prevState =>{
       return{
            ...prevState,
            commonHours : prevState.commonHours + 1
       }
    });

    let endDate = this.getCurrentDate(2, this.state.endDate);
    console.log(endDate);
    this.setState({endDate: endDate})

    event.preventDefault();
  }
  
  increasehoursInDay (event) {
    if(this.state.commonHours > 0){
        this.setState(prevState =>{
         return{
              ...prevState,
              hoursInDay : prevState.hoursInDay + 1
         }
      }
      );
    }

    if(this.state.commonHours === 0){
        this.setState(prevState =>{
         return{
              ...prevState,
              hoursInDay : prevState.hoursInDay + 1.5
         }
      }
      );
    }


    if(this.state.timeEndClass === '07:30') {
      this.setState({timeEndClass: '07:45'});
    } else {
      this.setState({timeEndClass: '07:30'});
    }
    event.preventDefault();
  }

  decreasehoursInDay (event) {
    if(this.state.hoursInDay > 0) {
        this.setState(prevState =>{
         return{
              ...prevState,
              hoursInDay : prevState.hoursInDay - 1
         }
      });

      if(this.state.timeEndClass === '07:30') {
        this.setState({timeEndClass: '07:45'});
      } else {
        this.setState({timeEndClass: '07:30'});
      }
    }
    event.preventDefault();
  }

  selectFirstDaySet(event) {
    this.setState({Monday: true});
    this.setState({Tuesday: false});
    this.setState({Wednesday: true});
    this.setState({Thursday: false});
    this.setState({Friday: true});
    this.setState({Saturday: false});
    this.setState({Sunday: false});

    let endDate = this.getCurrentDate(2, this.state.endDate);
    this.setState({endDate: endDate});

    event.preventDefault();
  }

  selectSecondDaySet(event) {
    this.setState({Monday: false});
    this.setState({Tuesday: true});
    this.setState({Wednesday: false});
    this.setState({Thursday: true});
    this.setState({Friday: false});
    this.setState({Saturday: false});
    this.setState({Sunday: false});

    let endDate = this.getCurrentDate(2, this.state.endDate);
    this.setState({endDate: endDate});

    event.preventDefault();
  }

  selectTuesday(event) {
     if(this.state.Tuesday === true) {
        this.setState({Tuesday: false});
     } else {
       this.setState({Tuesday: true});
       let endDate = this.getCurrentDate(2, this.state.endDate);
       this.setState({endDate: endDate})
     }

     event.preventDefault();
  }

  selectWednesday(event) {
     if(this.state.Wednesday === true) {
        this.setState({Wednesday: false});
     } else {
       this.setState({Wednesday: true});
       let endDate = this.getCurrentDate(2, this.state.endDate);
       this.setState({endDate: endDate})
     }

     event.preventDefault();
  }

  selectThursday(event) {
     if(this.state.Thursday === true) {
        this.setState({Thursday: false});
     } else {
       this.setState({Thursday: true});
       let endDate = this.getCurrentDate(2, this.state.endDate);
       this.setState({endDate: endDate})
     }

     event.preventDefault();
  }

   selectFriday(event) {
     if(this.state.Friday === true) {
        this.setState({Friday: false});
     } else {
       this.setState({Friday: true});
       let endDate = this.getCurrentDate(2, this.state.endDate);
       this.setState({endDate: endDate})
     }

     event.preventDefault();
  }
  
  selectMonday(event) {
     if(this.state.Monday === true) {
        this.setState({Monday: false});
     } else {
       this.setState({Monday: true});
       let endDate = this.getCurrentDate(2, this.state.endDate);
       this.setState({endDate: endDate})
     }

     event.preventDefault();
  }
  
  selectSaturday (event) {
     if(this.state.Saturday === true) {
        this.setState({Saturday: false});
     } else {
       this.setState({Saturday: true});
       let endDate = this.getCurrentDate(2, this.state.endDate);
       this.setState({endDate: endDate})
     }

     event.preventDefault();
  }
  selectSunday(event) {
     if(this.state.Sunday === true) {
        this.setState({Sunday: false});
     } else {
       this.setState({Sunday: true});
       let endDate = this.getCurrentDate(2, this.state.endDate);
       this.setState({endDate: endDate})
     }

     event.preventDefault();
  }

 changeBreak(event) {
  let value = event.target.value;

  if(value==='20 мин') {
    this.setState({timeEndClass: '07:45'});
  }
  
  if(value==='0 мин') {
    this.setState({timeEndClass: '07:00'});
  }

  if(value==='5 мин') {
    this.setState({timeEndClass: '07:05'});
  }

  if(value==='10 мин') {
    this.setState({timeEndClass: '07:10'});
  }

  if(value==='15 мин') {
    this.setState({timeEndClass: '07:15'});
  }

  if(value==='30 мин') {
    this.setState({timeEndClass: '07:30'});
  }

  event.preventDefault();
 }

  render() {
    return (
      <div className="App">
        <form>
          <p>
            <input type='text' value="Онлайн школа"/>
            <span className="colorOfTheGroupe">
              <select>
                <option></option>
              </select>
            </span>
          </p>
          <div className='row'>
            <select className="typeClock" onChange={this.changeTypeClock}>
                <option>Академические</option>
                <option>Астрономические</option>
            </select>
            <div className="commonHours">
              <button onClick={this.decreaseCommonHours}>-</button>
              <input type="text" value={this.state.commonHours}/>
              <span>всего часов</span>
              <button onClick={this.increaseCommonHours}>+</button>
            </div>
            <div className="timeClass dateClass">
              <input type="date"  onClick={this.changeStartDate} value={this.state.currentDate} />
              <span>до</span>
              <input type="date" onClick={this.changeEndDate} value={this.state.endDate} />
            </div>
          </div>
          <div className='row choiceDay'>
            <button onClick={this.selectFirstDaySet}>ПН/СР/ПТ</button>
            <button onClick={this.selectSecondDaySet}>ВТ/ЧТ</button>
            <button className={this.state.Monday ? "selected" : ""} onClick={this.selectMonday}>ПН</button>
            <button className={this.state.Tuesday ? "selected" : ""} onClick={this.selectTuesday} >ВТ</button>
            <button className={this.state.Wednesday ? "selected" : ""} onClick={this.selectWednesday}>СР</button>
            <button className={this.state.Thursday ? "selected" : ""} onClick={this.selectThursday}>ЧТ</button>
            <button className={this.state.Friday ? "selected" : ""} onClick={this.selectFriday}>ПТ</button>
            <button className={this.state.Saturday ? "selected" : ""} onClick={this.selectSaturday}>СБ</button>
            <button className={this.state.Sunday ? "selected" : ""} onClick={this.selectSunday}>ВС</button>
          </div>
          <div className='row'>
             <select className="typeClock" onChange={this.changeBreak}>
                <option>Без перерыва</option>
                <option>0 мин</option>
                <option>5 мин</option>
                <option>10 мин</option>
                <option>15 мин</option>
                <option>20 мин</option>
                <option>30 мин</option>
            </select>
            <div className="commonHours">
              <button onClick={this.decreasehoursInDay}>-</button>
              <input type="text" value={this.state.hoursInDay}/>
              <span>часов в день</span>
              <button onClick={this.increasehoursInDay}>+</button>
            </div>
            <div className="timeClass">
              <input type="text" value={this.state.timeStartClass} />
              <span>до</span>
              <input type="text" value={this.state.timeEndClass} />
            </div>
            
          </div>
          <div className='row'>
            <select className="choiceTeacher">
                <option>Выберите преподавателя на это время</option>
            </select>
            <select className="choiceClassRoom">
                <option>Аудитория</option>
            </select> 
          </div>
          <div className='row'>
            <div className="infoBox">
              Выбор преподавателя иаудитории не обязателен.
            </div>
          </div>
          <div className='actionBtn'>
            <button className='cancellation'>Отмена</button>
            <button className='addSchedule'>Добавить расписание</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalContent;