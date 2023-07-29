import './App.css';
import Button from './assets/components/Button';

function App() {
    return (
        <div className='bg-slate-500 flex items-center justify-center h-screen gap-3'>
            <Button className='bg-red-600 hover:bg-blue-700' onClick={() => console.log('Register')} type='submit' text='Register' />
            <Button className='bg-green-600 hover:bg-blue-700' onClick={() => console.log('sign up')} type='button' text='Sign up' />
            <Button className='bg-black hover:bg-red-700' onClick={() => console.log('sign in')} type='button' text='Github' />
        </div>
    );
}

export default App;
