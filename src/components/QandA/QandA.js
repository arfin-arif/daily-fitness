import React from 'react';

const QandA = () => {
    return (
        <div className='questions'>
            <div>
                <h3>How Does React Work</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h3>Differences between props and state </h3>
                <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h3>Uses of useEffect  without data load</h3>
                <p>useEffect inside the component lets us access the count state variable (or any props) right from the effectThe useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.</p>
            </div>
        </div>
    );
};

export default QandA;