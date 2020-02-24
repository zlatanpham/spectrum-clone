import React from 'react';
import SingleColumnLayout from 'components/Layout/SingleColumnLayout';
import { withAuthSync } from 'utils/auth';

function NewCommunity() {
  return <SingleColumnLayout>Create Community</SingleColumnLayout>;
}

export default withAuthSync(NewCommunity);
