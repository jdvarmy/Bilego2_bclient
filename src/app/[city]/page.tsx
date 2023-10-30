import React from 'react';

import { serverFetcher } from '@/helpers/fetchers/serverFetcher';
import { getGlobalProps } from '@/helpers/hof/getGlobalProps';
import { AvailableCities, City, CityPagePropsType, defaultEventsFetchCountForCityScreen } from '@/screens/City/City';
import { ISlide } from '@/screens/SingleEvent/type';

const getStaticProps = getGlobalProps(async (props: { params: { city: AvailableCities } }) => {
  const data = { count: defaultEventsFetchCountForCityScreen, c: props.params.city };

  const promises: Promise<any>[] = [
    serverFetcher.get<ISlide[]>({ url: `c/slider`, data }),
    serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data, filter: { weekends: 1 } } }),
    serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data } }),
    serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data, filter: { popular: 1 } } }),
  ];

  const [slides, weekend, nearest, popular] = await Promise.all(promises);

  return { ...props, slides, events: { weekend, nearest, popular } };
});

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.values(AvailableCities).map(item => ({ city: item }));
}

export async function generateMetadata() {
  return { title: `Home | Bilego` };
}

export default async function CityPage(props: { params: { city: AvailableCities } }) {
  const data = await getStaticProps(props);

  return <City {...(data as unknown as CityPagePropsType)} />;
}
