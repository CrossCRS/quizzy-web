import React, { ChangeEvent, FormEvent, useState } from 'react';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Alert from '../components/core/Alert';
import Button from '../components/core/Button';
import TextInput from '../components/core/TextInput';
import TextLink from '../components/core/TextLink';
import useAlert from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import axiosInstance from '../services/axiosInstance';

function Login() {
  const [inputs, setInputs] = useState({ email: null, password: null });
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  
  const alert = useAlert();
  const auth = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    axiosInstance.post('/auth/login', inputs).then((r) => {
      if (!r.data.result) {
        alert.show('Invalid email or password', { type: 'error' });
        setIsSending(false);
      } else {
        auth.setData?.(r.data.token, r.data.username);
        navigate('/');
      }
      console.log(r.data);
    });
  };

  const handleChange = (e: ChangeEvent) => {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  return (
    <div className='max-w-md mx-auto'>
      <Alert absolute type={alert.messageType} visible={alert.isVisible}>
        {alert.message}
      </Alert>
      <h1 className='text-gray-400 text-center m-0 mb-8'>Log in</h1>
      
      <Box border className='p-8 md:p-12'>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <TextInput placeholder='Email' name='email' onChange={handleChange} />
          <TextInput type='password' placeholder='Password' name='password' onChange={handleChange} />
          <div className='flex flex-col items-center'>
            <Button color='emerald' className='w-full' type='submit' disabled={isSending}>
              {isSending ? <FontAwesomeIcon icon={faSpinner} size='lg' pulse /> : 'Log in'}
            </Button>
            <TextLink light nohover to='/passwordreset'>Forgot your password?</TextLink>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Login;
