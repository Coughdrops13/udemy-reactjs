import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";


const AvailableMeals = () => {
  let loadedMeals = [];
  fetch("https://react-http-95836-default-rtdb.firebaseio.com/meals.json")
  .catch((err) => {
    console.log("ERROR", err.message);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    
    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      })
    }
    console.log('LOADEDMEALS:', loadedMeals);

    return loadedMeals;
    
  })
  .catch((err) => {
    console.log("ERROR", err.message);
  });
  
  console.log("LOADEDMEALS 2:", loadedMeals);

  const mealsList = loadedMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
    
    

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
