import React from 'react';
import IconGithub from 'components/icons/IconGithub';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button className="inline-flex items-center px-3 py-2 rounded-full text-white bg-secondary">
        <IconGithub className="mr-2" /> Log in with Github
      </button>
    </div>
  );
}
