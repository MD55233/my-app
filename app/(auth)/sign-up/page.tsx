import AuthForm from '@/components/AuthForm';
import React from 'react';

// Use a valid identifier name
const SignUp = () => {
  return (
    <section className="flex-center size-full max-smp:px-6"> 
    <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
