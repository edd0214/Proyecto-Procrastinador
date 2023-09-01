import React from 'react';
import './EmptyTodos.css'


function EmptyTodos() {

    return(
        <button className="btn" type="button">
            <strong>AQUÍ NO HAY NADA ._.</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </button>


    );
}

export {EmptyTodos};