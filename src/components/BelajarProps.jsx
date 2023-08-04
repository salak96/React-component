import { useState } from 'react';
import Button from './Button';

/* eslint-disable react/prop-types */
function BelajarProps() {
    const [judul, setJudul] = useState('React');

    const handleChangeJudul = () => {
        setJudul(judul === 'React' ? 'React Native' : 'React');
    };
    return (
        <div className='flex-column justify-center text-center col-span-12'>
            <h1>Belajar {judul}</h1>
            <Button className='bg-green-600 hover:bg-blue-700' onClick={handleChangeJudul}>
                React
            </Button>
            <hr />
            <Button className='bg-blue-300 hover:bg-blue-700' onClick={handleChangeJudul}>
                React Native
            </Button>
        </div>
    );
}

export default BelajarProps;
