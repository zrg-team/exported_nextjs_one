import { serviceFetch, objectToFormData } from '@utils/service';
import { getRoute } from '@utils/route';
import { QueryFunctionContext } from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { NoteModel } from '@models/note';

export const DefaultFilterNoteQueryKey: [string, string, string] = ['Note', 'filter', '/api/notes'];

export type FilterNoteRequestBody = {
  notes: {
    user_id?: number;
    title?: string;
    content?: string;
  };
  pagination_page?: number;
  pagination_limit?: number;
};

export type FilterNoteResponseBody = {
  total_pages: number;
  notes: Omit<NoteModel, 'image' | 'category_id'>[];
};

export const filterNoteApi = async (
  context: QueryFunctionContext<DefaultQueryKey<Partial<FilterNoteRequestBody> | undefined>>,
): Promise<FilterNoteResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/notes', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export const DefaultShowNoteQueryKey: [string, string, string] = ['Note', 'show', '/api/notes/:id'];

export type ShowNoteRequestBody = {
  id: string;
};

export type ShowNoteResponseBody = {
  note: Omit<NoteModel, 'image' | 'category_id'>;
};

export const showNoteApi = async (
  context: QueryFunctionContext<DefaultQueryKey<ShowNoteRequestBody | undefined>>,
): Promise<ShowNoteResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/notes/:id', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export type CreateNoteRequestBody = {
  notes: {
    user_id?: number;
    title?: string;
    content?: string;
    image?: any;
  };
};

export type CreateNoteResponseBody = {
  note: Omit<NoteModel, 'category_id'>;
  error_object: any;
};

export const createNoteApi = async (
  body: CreateNoteRequestBody,
): Promise<CreateNoteResponseBody> => {
  const formData = objectToFormData(body);

  return serviceFetch({
    url: getRoute('/api/notes', body),
    method: 'POST',
    data: formData,
  });
};

export type UpdateNoteRequestBody = {
  id: string;
  notes: {
    user_id?: number;
    title?: string;
    content?: string;
    image?: any;
  };
};

export type UpdateNoteResponseBody = {
  note: Omit<NoteModel, 'category_id'>;
  error_object: any;
};

export const updateNoteApi = async (
  body: UpdateNoteRequestBody,
): Promise<UpdateNoteResponseBody> => {
  const formData = objectToFormData(body);

  return serviceFetch({
    url: getRoute('/api/notes/:id', body),
    method: 'PUT',
    data: formData,
  });
};

export type DeleteNoteRequestBody = {
  id: string;
};

export type DeleteNoteResponseBody = {};

export const deleteNoteApi = async (
  body: DeleteNoteRequestBody,
): Promise<DeleteNoteResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/notes/:id', body),
    method: 'DELETE',
    data: body,
  });
};
