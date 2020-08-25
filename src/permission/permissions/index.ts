import type UnionToIntersection from "../../utils/UnionToIntersection";
import PermissionRoleEnum from "../enums/PermissionRoleEnum";
import permissionsOfAdmin from "./permissionsOfAdmin";
import permissionsOfAny from "./permissionsOfAny";
import permissionsOfUser from "./permissionsOfUser";
import permissionsOfGuest from "./permissionsOfGuest";

export type Permissions = UnionToIntersection<
  typeof permissions[PermissionRoleEnum]
>;

const permissions = {
  [PermissionRoleEnum.ANY]: permissionsOfAny,
  [PermissionRoleEnum.USER]: permissionsOfUser,
  [PermissionRoleEnum.GUEST]: permissionsOfGuest,
  [PermissionRoleEnum.ADMIN]: permissionsOfAdmin
} as const;

export default permissions;
