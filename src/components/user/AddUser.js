import Card from "../ui/Card";
import './AddUser.css';
import Button from "../ui/Button";
import React, { useState, useRef } from "react";
import ErrorMessage from "../ui/ErrorMesage";
// import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef(); //ref (Refrences)
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const AddUserHandler = (event) =>{
        event.preventDefault(); //do not want the form to submit automatically
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(+enteredUserAge!== '' && +enteredUserAge >=0 && enteredUserName !== ''){ //+ here will make sure a number is entered though expecting a String
            props.onAddUser(enteredUserName,enteredUserAge);
            nameInputRef.current.value='';
            ageInputRef.current.value=''; // Should ONLY be done when resetting elements on input as this is DOM manipulation
        }
        else{
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            })
        }
    };

    const errorHandler = () =>{
        setError(null);
    }

  return(
      <React.Fragment>
        {error && <ErrorMessage title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className='input'>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="name">Name</label>
                <input 
                    id='name' 
                    type='text' 
                    ref={nameInputRef}
                ></input>
                <label htmlFor="age">Age</label>
                <input 
                    id='age' 
                    type='number' 
                    ref={ageInputRef}
                ></input>
                <Button type='submit'>Add User</Button>
            </form>
         </Card>
      </React.Fragment>
    )  
};
export default AddUser;