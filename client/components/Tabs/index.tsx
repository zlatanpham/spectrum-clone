import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface TabOption {
  name: string;
  key: string;
}
export interface TabsProps {
  className?: string;
  fullwidth?: boolean;
  wrapperWidth?: string;
  children?:
    | React.ReactElement<TabPaneProps>
    | React.ReactElement<TabPaneProps>[];
  current: string;
  options: TabOption[];
  onTabClick?: (tabKey: string) => void;
}

const TabRow = styled.div`
  ${tw`flex w-full border-b border-gray-300 bg-white`}
`;

const StyledTab = styled.div<{ isActive: boolean }>`
  ${tw`bg-white text-center p-4 font-semibold`}
  flex-grow: 1;
  flex-basis: 0;
  transition: all 0.2s ease;
  box-shadow: ${props =>
    props.isActive ? 'rgb(36, 41, 46) 0px -2px 0px inset' : 'none'};
  ${props => (props.isActive ? tw`text-secondary` : tw`text-gray-500`)}
  &:hover {
    ${tw`bg-gray-100 text-secondary`}
    box-shadow: ${props =>
      props.isActive
        ? 'rgb(36, 41, 46) 0px -2px 0px inset'
        : 'rgb(36, 41, 46) 0px -2px 0px inset'};
    color: rgb(36, 41, 46);
    cursor: pointer;
  }
`;

const Tabs = ({
  children,
  options,
  current,
  onTabClick,
  fullwidth = false,
  wrapperWidth = '300px',
  className = '',
}: TabsProps) => {
  const [tab, setTab] = useState(current);

  const renderChild = (Array.isArray(children)
    ? children
    : React.Children.toArray(children)
  )
    .map(child => child)
    .filter(child => {
      if (!child) {
        return false;
      }

      const {
        props: { name },
      } = child;

      return tab === name;
    })[0];

  const tabsRender = options.map(({ name, key }) => (
    <StyledTab
      key={key}
      isActive={key === tab}
      onClick={e => {
        e.preventDefault();
        setTab(key);
        onTabClick && onTabClick(key);
      }}
    >
      {name}
    </StyledTab>
  ));

  return (
    <>
      <TabRow className={className}>
        {fullwidth ? (
          tabsRender
        ) : (
          <div className="flex" style={{ width: wrapperWidth }}>
            {tabsRender}
          </div>
        )}
      </TabRow>
      <>{renderChild}</>
    </>
  );
};

export interface TabPaneProps {
  name: string;
  render: React.ReactNode;
}

Tabs.TabPane = ({ render }: TabPaneProps) => {
  return <>{render}</>;
};

export default Tabs;
