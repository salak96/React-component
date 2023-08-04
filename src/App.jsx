import './App.css';
import BelajarProps from './components/BelajarProps';
import Button from './components/Button';

// import Button from './components/Button';
import Mahasiswa from './components/Mahasiswa';
import Modal from './components/Modal';
import State from './components/State';
import Tombol from './components/Tombol';
function App() {
    return (
        <div className='bg-slate-500 flex-col  items-center justify-center h-screen w-full text-center'>
            {/* <Button className='bg-red-600 hover:bg-blue-700' onClick={() => console.log('Register')} type='submit' text='Register' />
            <Button className='bg-green-600 hover:bg-blue-700' onClick={() => console.log('sign up')} type='button' text='Sign up' />
            <Button className='bg-black hover:bg-red-700' onClick={() => console.log('sign in')} type='button' text='Github' /> */}
            <div className='justify-center flex text-center'>
                <Mahasiswa />
            </div>
            <div className='flex justify-center gap-10 mt-10 text-center text-white'>
                <div>
                    <BelajarProps text='Belajar alert & props' />
                    <Button text='click me' onClick={() => alert('Yess allright !!!')} />
                </div>
                <State text='Belajar UseSte'></State>
                <Tombol pesan='Allert'>{'Tombol'}</Tombol>
                <Modal text='Ini modal Klik'></Modal>
            </div>
        </div>
    );
}

export default App;
