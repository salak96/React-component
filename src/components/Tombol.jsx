import Button from './Button';

/* eslint-disable react/prop-types */
const Tombol = (props) => {
    const handleClick = () => {
        alert(props.pesan);
    };

    return (
        <div>
            <Button className='bg-red-600 hover:bg-blue-700' onClick={handleClick}>
                {props.children}
            </Button>
        </div>
    );
};

export default Tombol;
