'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import {
  useTheme,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import '@/app/globals.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const components = {
  Header() {
    return (
      <div className="flex justify-center p-6">
        <img
          src="/Coursodigo.png"
          alt="Coursodigo"
          className="w-16 h-16 rounded"
        />
      </div>
    );
  },

  Footer() {
    return (
      <p className="text-xs text-center text-gray-800 dark:text-gray-100 mt-6">
        &copy; All Rights Reserved – Coursódigo
      </p>
    );
  },

  SignIn: {
    Header() {
      return (
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-4">
          Sign in to your account
        </h2>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();
      return (
        <div className="text-center mt-4">
          <button
            onClick={toForgotPassword}
            className="text-md text-blue-500 dark:text-white hover:underline hover:cursor-pointer"
          >
            Forgot your password?
          </button>
        </div>
      );
    },
  },

  SignUp: {
    Header() {
      return (
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-4">
          Create a new account
        </h2>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <div className="text-center mt-4">
          <button
            onClick={toSignIn}
            className="text-md text-blue-500 dark:text-white hover:underline hover:cursor-pointer"
          >
            Back to Sign In
          </button>
        </div>
      );
    },
  },

  ConfirmSignUp: {
    Header() {
      return (
        <h2 className="text-xl font-semibold text-center mb-2">
          Enter Confirmation Code
        </h2>
      );
    },
    Footer() {
      return <p className="text-sm text-center text-gray-500 dark:text-gray-50 mt-4">Check your email for the code.</p>;
    },
  },

  ForgotPassword: {
    Header() {
      return (
        <h2 className="text-xl font-semibold text-center mb-2">
          Reset Your Password
        </h2>
      );
    },
    Footer() {
      return <p className="text-sm text-center text-gray-500 dark:text-gray-50 mt-4">We'll send a reset link to your email.</p>;
    },
  },

  ConfirmResetPassword: {
    Header() {
      return (
        <h2 className="text-xl font-semibold text-center mb-2">
          Confirm New Password
        </h2>
      );
    },
    Footer() {
      return <p className="text-sm text-center text-gray-500 dark:text-gray-50 mt-4">Almost done!</p>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    username: {
      label: 'Email',
      placeholder: 'Enter your email address',
    },
    password: {
      label: 'Password',
      placeholder: 'Choose a strong password',
    },
    confirm_password: {
      label: 'Confirm Password',
      placeholder: 'Re-enter your password',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      label: 'Confirmation Code',
      placeholder: '123456',
    },
    confirm_password: {
      label: 'New Password',
      placeholder: 'Enter new password',
    },
  },
};

function RedirectOnLogin({ user }: { user?: any }) {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  return <></>;
}

export default function Signup() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-[#E76F51] p-8 rounded-lg shadow-md">
        <Authenticator formFields={formFields} components={components}>
          {({ user }) => <RedirectOnLogin user={user} />}
        </Authenticator>
      </div>
    </div>
  );
}