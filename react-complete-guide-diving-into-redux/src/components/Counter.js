import classes from "./Counter.module.css";

// FUNCTIONAL IMPORTS
import { useSelector, useDispatch } from "react-redux";


// FUNCTIONAL cOUNTER COMPONENT
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  
  const increaseHandler = () => {
    dispatch({type: "increase", amount: 5})
  }
  
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// FUNCTIONAL EXPORT
 export default Counter;





// CLASS-BASED IMPORTS
// import { connect } from "react-redux";
// import { Component } from "react";

// CLASS-BASED cOUNTER COMPONENT
// class classCounter extends Component {
  //   classIncrementHandler() {
    //     this.props.increment();
    //   }
    
    //   classDecrementHandler() {
      //     this.props.decrement();
      //   }
      
      //   classToggleCounterHandler() {}
      
      //   render() {
        //     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.classIncrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.classDecrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.classToggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// CLASS-BASED EXPORT
// export default connect(mapStateToProps, mapDispatchToProps)(classCounter);

