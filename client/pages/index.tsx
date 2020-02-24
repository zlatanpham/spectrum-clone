import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import 'styles/index.css';

import { withApollo } from '../apollo/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { User } from '../types/schema';
import {
  showSuccessNotification,
  showErrorNotification,
} from 'utils/notifications';
import { withAuthSync } from 'utils/auth';

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`;

interface Data {
  users: User[];
}

const Title = styled.h1`
  ${tw`mb-10 bg-gray-800 text-purple-400`}
  font-size: 50px;
`;

const Index = () => {
  const { data, error, loading } = useQuery<Data>(GET_USERS);

  if (error) {
    return <div>Error!!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const { users } = data;
    return (
      <div>
        <Title>Title</Title>
        <ul>
          {users.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
        <button onClick={() => showSuccessNotification('Post success!')}>
          Show success notification
        </button>
        <button onClick={() => showErrorNotification('Post error!')}>
          Show error notification
        </button>
      </div>
    );
  }

  return null;
};

export default withApollo(withAuthSync(Index));
