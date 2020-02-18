import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Select, { OptionItem } from 'components/Select';
import IconMarkdown from 'components/icons/IconMarkdown';
import PrimaryButton from 'components/Button/PrimaryButton';
import IconPhoto from 'components/icons/IconPhoto';
import TransparentButton from 'components/Button/TransparentButton';
import Tabs from 'components/Tabs';
import { useRouter } from 'next/router';

const { TabPane } = Tabs;

const Container = styled.div`
  ${tw`fixed inset-0 flex justify-center`}
  background: rgba(0, 0, 0, 0.24);
`;

const Body = styled.div`
  ${tw`bg-white h-screen`}
  z-index: 9995;
  box-shadow: rgba(0, 0, 0, 0.08) -4px 0px 12px,
    rgba(0, 0, 0, 0.08) 4px 0px 12px;
  background: rgb(250, 250, 250);
  width: 100%;
  max-width: 1424px;
`;

const Header = styled.header`
  ${tw`flex items-center py-2 pr-2 pl-3 bg-gray-200 border border-b`}
  height:48px;
`;

const FormContent = styled.div`
  height: calc(100vh - 48px - 56px);
`;

const Footer = styled.footer`
  ${tw`flex items-center justify-between py-2 px-3 bg-gray-200 border border-t`}
  height:56px;
`;

const communityOptions: OptionItem[] = [
  { name: 'Choose a community', value: '' },
  { name: 'React', value: 'react' },
  { name: 'Sketch', value: 'sketch' },
];

export default function NewPost() {
  const [community, setCommunity] = useState('');
  const { back } = useRouter();
  return (
    <Container>
      <div className="absolute inset-0" onClick={() => back()}></div>
      <Body>
        <Header>
          <div>
            <span className="text-sm font-medium">Post to:</span>
            <Select
              options={communityOptions}
              scheme="purple"
              value={community}
              onChange={setCommunity}
            />
          </div>
        </Header>
        <FormContent>
          <Tabs
            current="write"
            options={[
              { key: 'write', name: 'Write' },
              { key: 'preview', name: 'Preview' },
            ]}
            fullwidth
          >
            <TabPane
              name="write"
              render={<div className="p-5">Write</div>}
            ></TabPane>
            <TabPane
              name="preview"
              render={<div className="p-5">Preview</div>}
            ></TabPane>
          </Tabs>
        </FormContent>
        <Footer>
          <a
            className="inline-flex text-gray items-center"
            href="https://guides.github.com/features/mastering-markdown/"
            target="_blank"
            rel="noopener"
          >
            <IconPhoto />
            <IconMarkdown className="ml-1" />
          </a>
          <div className="flex items-center">
            <TransparentButton className="mr-1" onClick={() => back()}>
              Cancel
            </TransparentButton>
            <PrimaryButton>Publish</PrimaryButton>
          </div>
        </Footer>
      </Body>
    </Container>
  );
}
