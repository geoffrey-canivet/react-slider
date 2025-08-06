import {useState} from 'react';

const Slider = () => {

    const [value, setValue] = useState(0);

    return (
        <div>
            Mon app {value}
        </div>
    );
};

export default Slider;