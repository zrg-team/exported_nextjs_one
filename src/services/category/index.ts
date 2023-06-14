import {
  useQuery,
  UseQueryOptions,
  QueryClient,
  useMutation,
  MutateOptions,
  useQueryClient,
} from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { DEFAULT_QUERY_OPTIONS } from '@constants/query';
import {
  FilterCategoryRequestBody,
  FilterCategoryResponseBody,
  filterCategoryApi,
  DefaultFilterCategoryQueryKey,
  ShowCategoryRequestBody,
  ShowCategoryResponseBody,
  showCategoryApi,
  DefaultShowCategoryQueryKey,
  CreateCategoryRequestBody,
  CreateCategoryResponseBody,
  createCategoryApi,
  UpdateCategoryRequestBody,
  UpdateCategoryResponseBody,
  updateCategoryApi,
  DeleteCategoryRequestBody,
  DeleteCategoryResponseBody,
  deleteCategoryApi,
} from './request';

export const useFilterCategoryQuery = (
  params?: Partial<FilterCategoryRequestBody>,
  options: UseQueryOptions<
    FilterCategoryResponseBody,
    unknown,
    FilterCategoryResponseBody,
    DefaultQueryKey<Partial<FilterCategoryRequestBody> | undefined>
  > = {},
) => {
  return useQuery([...DefaultFilterCategoryQueryKey, params], filterCategoryApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchFilterCategory = async (
  queryClient: QueryClient,
  params?: Partial<FilterCategoryRequestBody>,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultFilterCategoryQueryKey, params],
    queryFn: filterCategoryApi,
  });
};

export const useShowCategoryQuery = (
  params: ShowCategoryRequestBody,
  options: UseQueryOptions<
    ShowCategoryResponseBody,
    unknown,
    ShowCategoryResponseBody,
    DefaultQueryKey<ShowCategoryRequestBody | undefined>
  > = {},
) => {
  return useQuery([...DefaultShowCategoryQueryKey, params], showCategoryApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchShowCategory = async (
  queryClient: QueryClient,
  params: ShowCategoryRequestBody,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultShowCategoryQueryKey, params],
    queryFn: showCategoryApi,
  });
};

export const useCreateCategoryMutation = (
  options: MutateOptions<
    CreateCategoryResponseBody,
    unknown,
    CreateCategoryRequestBody,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(createCategoryApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Category');
    },
  });
};

export const useUpdateCategoryMutation = (
  options: MutateOptions<
    UpdateCategoryResponseBody,
    unknown,
    UpdateCategoryRequestBody,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(updateCategoryApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Category');
    },
  });
};

export const useDeleteCategoryMutation = (
  options: MutateOptions<
    DeleteCategoryResponseBody,
    unknown,
    DeleteCategoryRequestBody,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(deleteCategoryApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Category');
    },
  });
};

export * from './request';
