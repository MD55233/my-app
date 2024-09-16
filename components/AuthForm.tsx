'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import CustmonInput from './CustmonInput';
import { authFormSchema } from '@/lib/utils'; // Make sure this function returns the correct schema

import {
  Form
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { getLoggedInUser, signUp, signIn } from '@/lib/actions/user.actions'; // Make sure these functions are correctly implemented and imported

// Determine the form schema based on the type
const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use the authFormSchema function to get the schema based on the type
  const schema = authFormSchema(type);

  // 1. Define your form
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema), 
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define your submit handler
  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log('Submitted Data:', data); 

  
    try {
      if(type === 'sign-up') {
        const newUser = await signUp(data); // Fixed function call
        setUser(newUser);
      }
 
        if(type === 'sign-in') {
           const response = await signIn({
           email: data.email,
           password: data.password,
          });
       if (response) router.push('/'); // Assuming you want to redirect after successful sign-in
      }

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form mx-4 md:mx-auto md:max-w-md">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <div className="w-32 h-32 max-xl:w-24 max-xl:h-24 p-0 m-0 inline-block">
            <Image
              src="/icons/fairyglowlogo.svg"
              width={128}
              height={128}
              alt="FairyGlow logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-grey-900">
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'}
          </h1>
          <p className="text-16 font-normal text-grey-600">
            {user
              ? 'Link your account to get started'
              : 'Please enter your details'}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          {/* Plaid Link or other additional content when the user is logged in */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustmonInput 
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustmonInput 
                      control={form.control}
                      name="lastName" 
                      label="Last Name"
                      placeholder="Enter your last name"
                    />

                  </div>
                <CustmonInput
                control={form.control}
                name="username"
                label="Username"
                placeholder="Enter your username"
              />
                  <CustmonInput
                    control={form.control}
                    name="referralUsername"
                    label="Referral Username"
                    placeholder="Enter your referral username"
                  />
                </>
              )}

              <CustmonInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />

              <CustmonInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      {/* Replace with a proper loading spinner if needed */}
                      <span className="animate-spin">🔄</span> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in'
                    ? 'Sign In'
                    : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
