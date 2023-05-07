import React from 'react';

interface IProps {
    color: string,
    handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpperCase: () => void;
    uppercase: boolean;
    resetText: () => void;
    count: () => void;
}


const Buttons: React.FC<IProps> = ({ color, handleColorChange, handleUpperCase, uppercase, resetText, count }) => {

    return (
        <React.Fragment>
            <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                <input type='color'
                    className='mx-3 btn'
                    value={color}
                    onChange={handleColorChange}
                />
                <button className='btn btn-success mx-3'
                    onClick={count}>Analyse</button>
                <button className='btn btn-primary btn'
                    onClick={handleUpperCase}>{uppercase === true ?
                        'Uppercase' :
                        'Lowercase'}
                </button>
                <button className='btn btn-danger mx-3 btn'
                    onClick={resetText}>Reset</button>
            </div>
        </React.Fragment>
    )
}

export default Buttons