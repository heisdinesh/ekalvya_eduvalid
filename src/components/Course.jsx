import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
import Leaderboard from "./Leaderboard";

const Course = ({ checkListItems, checkListProgress, data }) => {
  const [items, setItems] = useState([]);
  console.log(data);

  useEffect(() => {
    if (localStorage.getItem(`${checkListItems}`) == null) {
      setItems(data);
    }
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(`${checkListItems}`));
    localStorage.setItem(`${checkListItems}`, JSON.stringify(items));
    if (storedItems && storedItems.length > 0) {
      setItems(storedItems);
      console.log("getting from local storage");
      console.log(storedItems);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(`${checkListItems}`, JSON.stringify(items));
      console.log("set in local storage");
    } catch (error) {
      console.error("Error saving checklist items to local storage:", error);
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

  const progress =
    (items.filter((item) => item.isChecked).length / items.length) * 100;

  useEffect(() => {
    try {
      localStorage.setItem(`${checkListProgress}`, progress.toFixed(2));
    } catch (error) {
      console.error("Error saving checklist progress to local storage:", error);
    }
  }, [progress]);

  return (
    <div className="px-8 pt-4 rounded-lg bg-gradient-to-r from-pinky to-bluey h-screen">
      <div className="text-4xl font-bold text-center">React Curriculum</div>
      <div className="flex ml-8 pt-4 justify-between gap-6">
        <div className="shadow-md p-4 mt-9 w-9/12 bg-bpink">
          <h2>Progress: {progress.toFixed(2)}%</h2>
          <div className="h-2 w-full bg-gray-300 rounded-lg mb-4 mt-2">
            <div
              style={{ width: `${progress.toFixed(2)}%` }}
              className={`h-full bg-green-400`}
            ></div>
          </div>

          {items.map((item) => (
            <CourseItem
              key={item.id}
              item={item.item}
              isChecked={item.isChecked}
              link={item.link}
              onCheck={() => handleCheck(item.id)}
            />
          ))}
        </div>
        <div className="h-32 w-11/12 flex-5 px-8 pt-1 mt-1 flex flex-col gap-32">
          <div className="h-32 w-11/12 flex-5 bg-bpink px-8 pt-4 mt-8 shadow-md">
            <div>
              <p>
                "Every expert was once a beginner. Don't be afraid to start
                learning React, because with each step forward, you are one step
                closer to becoming an expert."
              </p>
            </div>
            <div>
              <Leaderboard
                progress={progress}
                className="bg-gradient-to-r from-pinky to-bluey mb-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
