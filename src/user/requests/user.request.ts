export class StoreUserRequest {
  name: string;
  email: string;
  email_verified_at: string;
  password: string;
  plan: number;
  plan_expire_date: string;
  requested_plan: number;
  type: string;
  avatar: string;
  lang: string;
  mode: string;
  created_by: number;
  default_pipeline: number;
  delete_status: number;
  is_active: boolean;
  remember_token: string;
  last_login_at: string;
  created_at: string;
  updated_at: string;
  active_status: number;
  dark_mode: number;
  messenger_color: string;
}
export class UpdateUserRequest {
  name: string;
  email: string;
  email_verified_at: string;
  password: string;
  plan: number;
  plan_expire_date: string;
  requested_plan: number;
  type: string;
  avatar: string;
  lang: string;
  mode: string;
  created_by: number;
  default_pipeline: number;
  delete_status: number;
  is_active: boolean;
  remember_token: string;
  last_login_at: string;
  created_at: string;
  updated_at: string;
  active_status: number;
  dark_mode: number;
  messenger_color: string;
}

export class DeleteUserRequest {
  id: string;
  lang: string;
}
