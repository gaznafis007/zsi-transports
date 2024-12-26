import React from 'react';

const Button = ({children}) => {
    return (
        <button className='bg-yellow-400 text-slate-900 hover:bg-slate-900 hover:text-yellow-400 px-4 py-2'>
            {children}
        </button>
    );
};

export default Button;