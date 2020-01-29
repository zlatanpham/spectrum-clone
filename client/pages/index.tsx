import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import ExampleComponent from 'components/ExampleComponent';

import 'styles/index.css';

import { withApollo } from '../apollo/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { User } from '../types/schema';

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
  ${tw`mb-10 bg-gray-900`}
  color: red;
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
      <ExampleComponent>
        <Title>Title</Title>
        <ul>
          {users.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
      </ExampleComponent>
    );
  }

  return null;
};

export default withApollo(Index);
