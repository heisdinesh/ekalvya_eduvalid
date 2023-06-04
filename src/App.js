import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { LandingPage ,Curcuilum} from './pages';
import Hackathons from './pages/Hackathons';


const App = () => {
  return (
    <div className="bg-gradient-to-r from-pinky to-bluey">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/react" element={<Curcuilum />} />
          <Route path="/hackathons" element={<Hackathons />} />

        </Routes>
      </Router>

    </div>
    // <div>
    //   <h1>Checklist</h1>
    //   <Checklist>
    //     <ChecklistItem item="Task 1" isChecked={true} />
    //     <ChecklistItem item="Task 2" isChecked={false} />
    //     {/* Add more checklist items */}
    //   </Checklist>
    // </div>
  );
}

export default App;
