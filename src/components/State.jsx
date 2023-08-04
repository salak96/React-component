/* eslint-disable react/prop-types */
import {  useState } from 'react';
import Button from './Button';

function State() {
    const [judul, setJudul] = useState('React');


    const handleChangeJudul = () => {
        setJudul(judul === 'React' ? 'React Native' : 'React');
    };
    return (
        <div className='bg-slate-500 text-center align-center gap-2'>
            <h1>Belajar {judul}</h1>
            <hr />
            <Button className='bg-green-600 hover:bg-blue-700' onClick={handleChangeJudul}>React</Button>
            <hr />
            <Button className='bg-blue-300 hover:bg-blue-700' onClick={handleChangeJudul}>React Native</Button>
        </div>
    );
}

export default State;
