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
  FilterNoteRequestBody,
  FilterNoteResponseBody,
  filterNoteApi,
  DefaultFilterNoteQueryKey,
  ShowNoteRequestBody,
  ShowNoteResponseBody,
  showNoteApi,
  DefaultShowNoteQueryKey,
  CreateNoteRequestBody,
  CreateNoteResponseBody,
  createNoteApi,
  UpdateNoteRequestBody,
  UpdateNoteResponseBody,
  updateNoteApi,
  DeleteNoteRequestBody,
  DeleteNoteResponseBody,
  deleteNoteApi,
} from './request';

export const useFilterNoteQuery = (
  params?: Partial<FilterNoteRequestBody>,
  options: UseQueryOptions<
    FilterNoteResponseBody,
    unknown,
    FilterNoteResponseBody,
    DefaultQueryKey<Partial<FilterNoteRequestBody> | undefined>
  > = {},
) => {
  return useQuery([...DefaultFilterNoteQueryKey, params], filterNoteApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchFilterNote = async (
  queryClient: QueryClient,
  params?: Partial<FilterNoteRequestBody>,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultFilterNoteQueryKey, params],
    queryFn: filterNoteApi,
  });
};

export const useShowNoteQuery = (
  params: ShowNoteRequestBody,
  options: UseQueryOptions<
    ShowNoteResponseBody,
    unknown,
    ShowNoteResponseBody,
    DefaultQueryKey<ShowNoteRequestBody | undefined>
  > = {},
) => {
  return useQuery([...DefaultShowNoteQueryKey, params], showNoteApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchShowNote = async (queryClient: QueryClient, params: ShowNoteRequestBody) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultShowNoteQueryKey, params],
    queryFn: showNoteApi,
  });
};

export const useCreateNoteMutation = (
  options: MutateOptions<CreateNoteResponseBody, unknown, CreateNoteRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(createNoteApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Note');
    },
  });
};

export const useUpdateNoteMutation = (
  options: MutateOptions<UpdateNoteResponseBody, unknown, UpdateNoteRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(updateNoteApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Note');
    },
  });
};

export const useDeleteNoteMutation = (
  options: MutateOptions<DeleteNoteResponseBody, unknown, DeleteNoteRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(deleteNoteApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Note');
    },
  });
};

export * from './request';
