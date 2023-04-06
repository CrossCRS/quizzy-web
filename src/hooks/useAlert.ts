import { useCallback, useState } from 'react';

import { AlertType } from '../components/core/Alert';

export interface AlertOptions {
  duration?: number,
  type?: AlertType
}

function useAlert() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<AlertType>('info');
  const [isVisible, setIsVisible] = useState(false);
  
  const show = useCallback((msg: string, options: AlertOptions = {}) => {
    const { duration = 3000, type = 'info' } = options;

    setMessage(msg);
    setMessageType(type);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, duration);
  }, []);

  return { show, message, isVisible, messageType };
}

export default useAlert;