import './ErrorMessage.css'
import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';
import React from 'react';

const Backdrop = (props) => {
    return(
        <div className='backdrop' onClick={props.onConfirm}></div>
    );
};
const MessageOverlay = (props) => {
    return(
        <Card className='modal'>
           <header className='header'>
               <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>   
        </Card>
    );
};

const ErrorMessage = (props) => {
    return(
        //Using Fragments and 'Portals', move rendered HTML content somewhere else
        <React.Fragment> 
            {ReactDOM.createPortal(
                <Backdrop 
                    onConfirm={props.onConfirm}/>,
                    document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <MessageOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
        
    )
};
export default ErrorMessage;
