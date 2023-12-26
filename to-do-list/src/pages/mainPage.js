import React, { useState } from 'react';
import Header from '../components/header';
import "./mainPageStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiTrash, BiCheck } from 'react-icons/bi';
import { Button } from 'bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const MainPage = () => {

    const [value, onChange] = useState(new Date());

   return (
    <React.StrictMode>
   <Header title='Plan Your Day'></Header>
     <div style={{textAlign: 'left', clear: 'left',marginBottom: '25px', marginTop: '10px'}}>         
         <h1>Today's Tasks</h1>
     </div>
     <div className="d-flex flex-column">
        {/** below is the example of how the tasks will look */}
        <ul className='tasks'>
            <li>Task 1: Description, Name, Date, Priority
                <div className='icone-wrapper'>
                    <BiCheck className="check"></BiCheck>
                    <BiTrash className="trash"></BiTrash>
                </div>
            </li>
            <li style={{backgroundColor: 'lightcoral'}}>Task 2: Description, Name, Date, Priority
                <div className='icone-wrapper'>
                    <BiCheck className="check"></BiCheck>
                    <BiTrash className="trash"></BiTrash>
                </div>
            </li>
        </ul>
        <button className="add-task" {/* onClick={} */...Button}>Add Task</button>
     </div>
     <div div style={{textAlign: 'left', clear: 'left',marginBottom: '25px', marginTop: '10px'}}>
        <h1>This Weeks Tasks</h1>
     </div>
     <div className="d-flex flex-column">
        {/** below is the example of how the tasks will look priority level i
         * color coded to keep things simple */}
        <ul className='tasks'>
            <li>Task 1: Description, Name, Date, Priority
                <div className='icone-wrapper'>
                    <BiCheck className="check"></BiCheck>
                    <BiTrash className="trash"></BiTrash>
                </div>
            </li>
            <li style={{backgroundColor: 'lightcoral'}}>Task 2: Description, Name, Date, Priority
                <div className='icone-wrapper'>
                    <BiCheck className="check"></BiCheck>
                    <BiTrash className="trash"></BiTrash>
                </div>
            </li>
        </ul>
    </div>
    <div className='calender-container'>
        <Calendar onChange={onChange} value={value} />
    </div>
   </React.StrictMode>
   )
}

export default MainPage;