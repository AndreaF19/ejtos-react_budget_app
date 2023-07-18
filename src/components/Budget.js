
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, setBudget  } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ <input
                        min = "2000" max="20000" step="10"
                        type='number'
                        id='budget'
                        
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
</span>
        </div>
    );
};
export default Budget;