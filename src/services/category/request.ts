import { serviceFetch } from '@utils/service';
import { getRoute } from '@utils/route';
import { QueryFunctionContext } from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { CategoryModel } from '@models/category';
import { NoteModel } from '@models/note';

export const DefaultFilterCategoryQueryKey: [string, string, string] = [
  'Category',
  'filter',
  '/api/categories',
];

export type FilterCategoryRequestBody = {
  categories: {
    name?: string;
  };
  pagination_page?: number;
  pagination_limit?: number;
};

export type FilterCategoryResponseBody = {
  total_pages: number;
  categories: (Omit<CategoryModel, 'sku'> & { notes: NoteModel[] })[];
};

export const filterCategoryApi = async (
  context: QueryFunctionContext<DefaultQueryKey<Partial<FilterCategoryRequestBody> | undefined>>,
): Promise<FilterCategoryResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/categories', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export const DefaultShowCategoryQueryKey: [string, string, string] = [
  'Category',
  'show',
  '/api/categories/:id',
];

export type ShowCategoryRequestBody = {
  id: string;
};

export type ShowCategoryResponseBody = {
  category: Omit<CategoryModel, 'sku'> & { notes: NoteModel[] };
};

export const showCategoryApi = async (
  context: QueryFunctionContext<DefaultQueryKey<ShowCategoryRequestBody | undefined>>,
): Promise<ShowCategoryResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/categories/:id', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export type CreateCategoryRequestBody = {
  categories: {
    name?: string;
  };
};

export type CreateCategoryResponseBody = {
  category: Omit<CategoryModel, 'sku'> & { notes: NoteModel[] };
  error_object: any;
};

export const createCategoryApi = async (
  body: CreateCategoryRequestBody,
): Promise<CreateCategoryResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/categories', body),
    method: 'POST',
    data: body,
  });
};

export type UpdateCategoryRequestBody = {
  id: string;
  categories: {
    name?: string;
  };
};

export type UpdateCategoryResponseBody = {
  category: Omit<CategoryModel, 'sku'> & { notes: NoteModel[] };
  error_object: any;
};

export const updateCategoryApi = async (
  body: UpdateCategoryRequestBody,
): Promise<UpdateCategoryResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/categories/:id', body),
    method: 'PUT',
    data: body,
  });
};

export type DeleteCategoryRequestBody = {
  id: string;
};

export type DeleteCategoryResponseBody = {};

export const deleteCategoryApi = async (
  body: DeleteCategoryRequestBody,
): Promise<DeleteCategoryResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/categories/:id', body),
    method: 'DELETE',
    data: body,
  });
};
