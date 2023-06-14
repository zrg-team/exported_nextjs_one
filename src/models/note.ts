export type NoteModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  title: string;
  content: string;
  image: any;
  category_id: number;
};
