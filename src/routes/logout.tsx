import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

function LogoutPage() {
  const navigate = useNavigate();

  const auth = useAuth();
  auth.clearData?.();
  navigate('/');

  return (
    <></>
  );
}

export default LogoutPage;
