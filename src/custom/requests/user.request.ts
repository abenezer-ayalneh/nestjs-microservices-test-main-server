import { IsNotEmpty } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

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

export class CreateRoleRequest {
  name: string;
  description: string;
  lang: string;
}

export class UpdateRoleRequest {
  id: string;
  name: string;
  description: string;
  lang: string;
}

export class DeleteRoleRequest {
  id: string;
  lang: string;
}

export class CreatePermissionRequest {
  name: string;
  description: string;
  lang: string;
}

export class UpdatePermissionRequest {
  id: string;
  name: string;
  description: string;
  lang: string;
}

export class DeletePermissionRequest {
  id: string;
  lang: string;
}

export class AssignPermissionsToRoleRequest {
  id: string;
  lang: string;
  permissions: string[];
}

export class AssignRolesToUserRequest {
  id: string;
  lang: string;
  roles: string[];
}

export class AssignPermissionsToUserRequest {
  id: string;
  lang: string;
  permissions: string[];
}

export class UserHasPermissionsRequest {
  id: string;
  lang: string;
  permissions: string[];
}

export class GetUserRolesRequest {
  id: string;
  lang: string;
}

export class GetUserPermissionsRequest {
  id: string;
  lang: string;
}

export class RevokeRolesFromUserRequest {
  id: string;
  lang: string;
  roles: string[];
}

export class RevokePermissionsFromUserRequest {
  id: string;
  lang: string;
  permissions: string[];
}

export class GetUsersViaRolesRequest {
  roles: string[];
  lang: string;
}

export class GetUsersViaPermissionsRequest {
  permissions: string[];
  lang: string;
}
