import React from 'react';

class Practic extends React.Component{
    Abc = (a,b) => {
        alert(b.type);
    }
    render() {
        return(
            <button onMouseEnter={(y) =>this.Abc("hello react",y)}> click me</button>
        )
    }
}

export default Practic;