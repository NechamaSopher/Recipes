import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import path from 'path';

import { trackAdClosed } from '../../utils/tracking-events';
import './Ad.css';

const Ad = (props) => {
  const [closed, setClosed] = useState(null);
  const [lastPart, setLastPart] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentPath = window.location.pathname;
    setLastPart(path.basename(currentPath));
  }, [location.pathname])
  
  const hendleCloseAd = () => {
    setClosed(true);
    trackAdClosed(props.type);
  }
    return (
      <div id={props.type} 
        className={`ad ${props.class} ${closed || lastPart === 'dashboard' ? 'hidden' : '' }`}>
        <CloseIcon className='close' onClick={() => hendleCloseAd() }></CloseIcon>
      </div>
    );
  }
  
export default Ad;