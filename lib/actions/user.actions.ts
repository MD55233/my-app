'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { Client, Account } from "node-appwrite";

interface signInProps {
  email: string;
  password: string;
}

interface SignUpParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Sign in function
export const signIn = async ({email, password}: signInProps) => {
  try {
    const { account } = await createSessionClient();  // Use createSessionClient for sign-in

    const response = await account.createEmailPasswordSession(email, password);


    return parseStringify(response);
  } catch (error: any) {
    console.error('Error in signIn:', error.message);
    throw new Error('Failed to sign in. Please check your credentials.');
  }
};

// Sign up function
export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();

    // Create a new user account
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    // Create a session for the new user
    const session = await account.createEmailPasswordSession(email, password);

    // Set cookies for the session
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error: any) {
    console.error('Error in signUp:', error.message);
    throw new Error('Failed to sign up. Please try again later.');
  }
};

// Function to get logged-in user
export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user);
  } catch (error) {
    console.error('Error in getLoggedInUser:', error);
    return null;
  }
}
