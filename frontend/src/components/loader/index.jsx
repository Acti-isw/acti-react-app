import HashLoader from 'react-spinners/HashLoader';
import './style.css';

function Loader({ color = '#292d38', size = 200 }) {
    return (
        <div className="loading">
            <HashLoader color={color} size={size} />
        </div>
    );
}

export default Loader;
