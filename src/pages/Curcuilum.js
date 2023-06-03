import React, { useState, useEffect } from 'react';
import ChecklistItem from '../checklistItem';
// import ChecklistItem from '../checklistItem';
import Leaderboard from '../components/Leaderboard';

const Curcuilum = () => {
    const List=[
        {id:0,item : "React Components", isChecked:false,link:"https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind"},
        {id:1,item : "React Sates", isChecked:false,link:"https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind"},
        {id:2,item : "Routing", isChecked:false,link:"https://youtu.be/nDGA3km5He4"},
        {id:3,item : "Virtual DOM", isChecked:false,link:"https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind"},
        {id:4,item : "Fetching Data", isChecked:false,link:"https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind"},
        {id:5,item : "Page Navigation", isChecked:false,link:"https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind"},
        {id:6,item : "React Hooks", isChecked:false,link:"https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind"},
        {id:7,item : "Redux", isChecked:false,link:"https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind"},
    ]
    const [items, setItems] = useState(List);
    useEffect(() => {
      try {
        const storedItems = JSON.parse(localStorage.getItem('checklistItems'));
  
        if (storedItems) {
          setItems(storedItems);
          console.log("getting from local storage")
        }
      } catch (error) {
        console.error('Error loading checklist items from local storage:', error);
      }
    }, []);
  
    useEffect(() => {
      try {
        localStorage.setItem('checklistItems', JSON.stringify(items));
        console.log("set in local storage")
      } catch (error) {
        console.error('Error saving checklist items to local storage:', error);
      }
    }, [items]);
  
    const handleCheck = (id) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        }
        return item;
      });
      setItems(updatedItems);
    };
  
    const progress = (items.filter((item) => item.isChecked).length / items.length) * 100;
  
    useEffect(() => {
      try {
        localStorage.setItem('checklistProgress', progress.toFixed(2));
      } catch (error) {
        console.error('Error saving checklist progress to local storage:', error);
      }
    }, [progress]);
  
    return (
     <div className='px-8 pt-4 rounded-lg bg-gradient-to-r from-pinky to-bluey '>
        <div className="text-4xl font-bold text-center">React Curiculum</div>
        <div className="flex ml-8 pt-4 justify-between gap-6">
        <div className="shadow-md p-4 mt-8  w-9/12 bg-bpink">
        <h2>Progress: {progress.toFixed(2)}%</h2>
        <div className='h-2 w-full bg-gray-300 rounded-lg mb-4 mt-2'>
            <div
                style={{ width: `${progress.toFixed(2)}%`}}
                className={`h-full bg-green-400`}>
            </div>
        </div>
        
       {items.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item.item}
            isChecked={item.isChecked}
            link={item.link}
            onCheck={() => handleCheck(item.id)}
          />
        ))}
      </div>
      <div className="h-32 w-11/12 flex-5  px-8 pt-4 mt-8 flex flex-col gap-32">
        <div className="h-32 w-11/12 flex-5 bg-bpink px-8 pt-4 mt-8 shadow-md">
          <div>
          <p>"Every expert was once a beginner. Don't be afraid to start learning React, because with each step forward, you are one step closer to becoming an expert."</p>
          </div>
          {/* <div className="h-32 w-6/12  bg-bpink px-8 pt-4 mt-64 ml-32 shadow-md ">
            <p className="text-xl bg-bluee py-2 px-4 text-center font-semibold">#FUN FACT</p>
            <p className="text-md text-center">React is not a Framework</p>
          </div> */}
            <div>
        <Leaderboard className="bg-gradient-to-r from-pinky to-bluey mb-12" />
      </div>
        </div>
      </div>
        </div>
     </div>
    );
  };

export default Curcuilum