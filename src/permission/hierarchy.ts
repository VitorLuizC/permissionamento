import type { IAccessInfo } from "role-acl";
import PermissionRoleEnum from "./enums/PermissionRoleEnum";

/**
 * An object that describes role's hierarchy in `role-acl`.
 */
const hierarchy: Record<PermissionRoleEnum, IAccessInfo> = {
  [PermissionRoleEnum.ANY]: {},
  [PermissionRoleEnum.ADMIN]: {
    extend: [PermissionRoleEnum.ANY, PermissionRoleEnum.USER],
  },
  [PermissionRoleEnum.USER]: {
    extend: [PermissionRoleEnum.ANY],
  },
  [PermissionRoleEnum.GUEST]: {
    extend: [PermissionRoleEnum.ANY],
  }
};

export default hierarchy;
