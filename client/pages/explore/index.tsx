import React from 'react';
import WhiteButton from 'components/Button/WhiteButton';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Tabs from 'components/Tabs';

const Container = styled.div`
  ${tw`flex flex-col justify-center text-center items-center mx-auto text-white`}
  max-width: 640px;
`;

const CreateContainer = styled.div`
  ${tw`flex flex-col justify-center text-center mt-8 items-center mx-auto text-white`}
  max-width:640px;

  button {
    width: 300px;
  }
`;

const Hero = styled.div`
  background-color: rgb(15, 1, 94);
  background-image: radial-gradient(
    at 50% 100%,
    rgba(123, 22, 255, 0.75),
    rgb(15, 1, 94)
  );
`;

export default function ExplorePage() {
  return (
    <div className="w-full">
      <Hero className="text-white text-center py-20">
        <Container>
          <h2 className="font-bold text-white text-3xl">Find a community</h2>
          <p className="text-white mb-5">
            Try searching for topics like “crypto” or for products like “React”
          </p>
          <input
            type="text"
            placeholder="Search for communities or topics..."
            className="px-10 py-3 rounded"
          />

          <CreateContainer>
            <h3 className="font-bold text-xl mb-2">
              Create your own community
            </h3>
            <p className="mb-5">
              Building communitiese on Spectrum is easy and free!
            </p>
            <WhiteButton to="/new/community">Create a community</WhiteButton>
          </CreateContainer>
        </Container>
      </Hero>

      <Tabs
        options={[
          { key: 'top', name: 'Top Communities' },
          { key: 'design', name: 'Design' },
          { key: 'web', name: 'Web development' },
          { key: 'tech', name: 'Tech' },
          { key: 'life', name: 'Life' },
        ]}
        current="top"
        fullwidth
      ></Tabs>

      <div className="px-2 py-3">Community list</div>
    </div>
  );
}
