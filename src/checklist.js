import React, { useState, useEffect } from 'react';
import ChecklistItem from './checklistItem';
import checklistData from './checklistData';


const Checklist = () => {
  const [items, setItems] = useState(checklistData);
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
    <div>
      <h2>Progress: {progress.toFixed(2)}%</h2>
      
     {items.map((item) => (
        <ChecklistItem
          key={item.id}
          item={item.item}
          isChecked={item.isChecked}
          onCheck={() => handleCheck(item.id)}
        />
      ))}
    </div>
  );
};

export default Checklist;
