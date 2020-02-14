import { tint, hexa } from '../globals';
import { styled } from '@storybook/theming';
import tw from 'tailwind.macro';
import Link from 'next/link';
import { createGlobalStyle } from 'styled-components';

export const A = styled.a`
  ${tw`flex items-center flex-none`}
`;

export const StyledLink = styled(Link)`
  ${tw`flex items-center flex-none`}
`;

export const ButtonGlobalStyle = createGlobalStyle`

.btn {
    font-size: 16px;
    ${tw`font-semibold flex items-center justify-center cursor-pointer flex-none leading-tight text-white bg-gray-100`}
    border-radius: 32px;
    padding: 10px 16px;
    opacity: 1;
    transition: box-shadow 0.2s ease-in-out;
    .icon:not(:first-child):not(:last-child) {
        ${tw`mr-4`}
    }
    &:hover {
        ${tw`bg-gray-300`}
    }
    &:focus {
        box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #EBECED;
        transition: box-shadow 0.2s ease-in-out;
        outline: none;
    }

  &:active {
    box-shadow: 0 0 0 2px #FFFFFF,
      0 0 0 4px ${tint('#EBECED', -24)};
    transition: box-shadow 0.2s ease-in-out;
  }
}
    
    .btn--disabled {
        opacity: 0.6;
       ${tw`cursor-not-allowed`}
    }
    .btn--small {
        font-size: 15px;
        padding: 6px 12px;
    }
  .btn--white-icon {
    ${tw`bg-transparent p-0 text-secondary p-0`}
    .icon {
      ${tw`mr-0`}
    }
  }

  .btn--primary {
    ${tw`bg-primary text-white`}
    background-image: ${`linear-gradient(to bottom, #7B16FF, ${tint(
      '#7B16FF',
      -8,
    )})`};
    border: 1px solid ${tint('#7B16FF', -8)};
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
        ${tw`text-white`}
      border: 1px solid ${tint('#7B16FF', -16)};
      background: ${tint('#7B16FF', -8)};
    }
    &:focus {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px ${hexa('#7B16FF', 0.24)};
    }
    &:active {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px ${hexa('#7B16FF', 0.64)};
    }
  }

  .btn--white {
    ${tw`bg-white text-gray-700 border-0`}

    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      ${tw`bg-white text-secondary border-0`}
    }
    &:focus {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#FFFFFF', 0.24)};
    }
    &:active {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#FFFFFF', 0.64)};
    }
  }

  .btn--outline {
    ${tw`bg-transparent`}
    border: 1px solid #EBECED;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      ${tw`bg-transparent `}
      border: 1px solid ${tint('#EBECED', -8)};
    }
    &:focus {
      box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #EBECED;
      transition: box-shadow 0.2s ease-in-out;
    }
    &:active {
      box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px ${tint('#EBECED', -24)};
      transition: box-shadow 0.2s ease-in-out;
    }
  }

  .btn--primary-outline {
    ${tw`bg-transparent text-primary`}
    border: 1px solid #7B16FF;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      background: ${hexa('#7B16FF', 0.04)};
      border: 1px solid ${tint('#7B16FF', -8)};
      color: ${tint('#7B16FF', -8)};
    }
    &:focus {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#7B16FF', 0.16)};
    }
    &:active {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#7B16FF', 0.48)};
    }
  }

  .btn--white-outine {
    ${tw`bg-transparent text-white`}
    border: 1px solid ${'#FFFFFF'};
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      ${tw`text-white`}
      background: ${hexa('#FFFFFF', 0.04)};
      border: 1px solid ${'#FFFFFF'};
    }
    &:focus {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px ${hexa('#FFFFFF', 0.16)};
    }
    &:active {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px ${hexa('#FFFFFF', 0.48)};
    }
  }

  .btn--warn-hover-outline {
    &:hover {
        ${tw`bg-red-200 text-white`}
      border: 1px solid ${'#E22F2F'};
    }
    &:active {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px ${hexa('#E22F2F', 0.48)};
    }
  }

  .btn--text {
    ${tw`border-0`}
    &:hover {
      ${tw`border-0 bg-transparent`}
    }
    &:focus {
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #ebeced;
      transition: box-shadow 0.2s ease-in-out;
    }
    &:active {
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${tint('#EBECED', -24)};
      transition: box-shadow 0.2s ease-in-out;
    }
  }

  .btn--facebook {
    ${tw`bg-blue-dark`}
    background-image: none;
    border: 1px solid ${tint('#3B5998', -8)};
    &:hover {
      border: 1px solid ${tint('#3B5998', -16)};
      background: ${tint('#3B5998', -8)};
    }
    &:focus {
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#3B5998', 0.24)};
    }
    &:active {
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#3B5998', 0.64)};
    }
  }

  .btn--twitter {
    ${tw`bg-blue-700`}
    background-image: none;
    border: 1px solid ${tint('#00ACED', -8)};
    &:hover {
      border: 1px solid ${tint('#00ACED', -16)};
      background: ${tint('#00ACED', -8)};
    }
    &:focus {
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#00ACED', 0.24)};
    }
    &:active {
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${hexa('#00ACED', 0.64)};
    }
  }
`;
