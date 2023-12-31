export enum RoleEnum {
  USER = 'user',
  ADMIN = 'admin',
}

export type UserModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  encrypted_password: string;
  email: string;
  reset_password_token: string;
  reset_password_sent_at: Date;
  remember_created_at: Date;
  current_sign_in_at: Date;
  last_sign_in_at: Date;
  current_sign_in_ip: string;
  last_sign_in_ip: string;
  sign_in_count: number;
  password: string;
  password_confirmation: string;
  locked_at: Date;
  failed_attempts: number;
  unlock_token: string;
  role: `${RoleEnum}`;
  confirmation_token: string;
  unconfirmed_email: string;
  confirmed_at: Date;
  confirmation_sent_at: Date;
};
