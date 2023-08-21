import { GetStaticProps } from 'next';

import { getStaticPropsWithGlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

export default function OfferPage() {
  return <>OfferPage</>;
}

export const getStaticProps: GetStaticProps = getStaticPropsWithGlobalProps(props => {
  return { props, revalidate: 60 };
});