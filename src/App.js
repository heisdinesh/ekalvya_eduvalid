import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Checklist from './checklist';
// import ChecklistItem from './checklistItem';
import { LandingPage} from './pages';
import {Course, HackathonListItem}  from './components';
import {react_data} from "./data/react_data"


const App = () => {
  return (
    <div className="bg-gradient-to-r from-pinky to-bluey">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hackathons" element={<HackathonListItem />} />
          {/* <Route path="/course" element={<CourseList />} > */}
          <Route path="/react" element={<Course checkListItems="react" checkListProgress="reactProgress" data={react_data} />} />
          {/* </Route> */}
        </Routes>
      </Router>

    </div>
   
  );
}

export default App;
