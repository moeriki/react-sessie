import React, { ReactElement } from 'react';

import { Counter } from './counter';

interface Props {
  name: string;
}

export function App({ name }: Props): ReactElement {
  return (
    <>
      <div>{`Hello ${name}!`}</div>
      <Counter />
    </>
  );
}
