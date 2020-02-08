import React from 'react';
import { withAuthSync } from 'utils/auth';

function UsersPage() {
  return <div>User Page</div>;
}

export default withAuthSync(UsersPage);
