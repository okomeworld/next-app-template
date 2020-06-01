import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from '@emotion/styled';
import tw from 'twin.macro';

type Props = {
  title?: string;
};

const Header = styled.header`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`}
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <nav tw="w-full block flex-grow">
        <Link href="/">
          <a tw="block mt-4 text-teal-200 hover:text-white mr-4">Home</a>
        </Link>
        <Link href="/about">
          <a tw="block mt-4 text-teal-200 hover:text-white mr-4">About</a>
        </Link>
        <Link href="/users">
          <a tw="block mt-4 text-teal-200 hover:text-white mr-4">Users List</a>
        </Link>
        <a
          tw="block mt-4 text-teal-200 hover:text-white mr-4"
          href="/api/users"
        >
          Users API
        </a>
      </nav>
    </Header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
