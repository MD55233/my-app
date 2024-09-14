'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// shadcn form import
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustmonInput from './CustmonInput'
import { authFormSchema } from '@/lib/utils'

const formSchema = z.object({
  username: z.string().min(1).max(50),
})

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      username: "",
      password: ''
    },
  })

  function onSubmit(values: z.infer<typeof authFormSchema>) {
    console.log(values)
  }

  return (
    <section className="auth-form mx-4 md:mx-auto md:max-w-md"> {/* Add margins */}
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
          {/* Plaid Link */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustmonInput
                control={form.control}
                name="username"
                label="Username"
                placeholder="Enter your username"
              />
              <CustmonInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <Button type="submit" className="form-btn">
                Submit
              </Button>
            </form>
          </Form>
        </>
      )}
    </section>
  )
}

export default AuthForm
