import { AxiosResponse } from 'axios';

import { axiosApi } from '@/shared/helpers/fetchers/axiosApi';
import { ApiSide } from '@/shared/helpers/fetchers/enums';

const api = axiosApi(ApiSide.server);

export const serverFetcher = {
  get: async <R>(...props: Parameters<typeof api.get>): Promise<R> => {
    const { data } = (await api.get<R>(...props)) as AxiosResponse<R>;
    return data;
  },
};