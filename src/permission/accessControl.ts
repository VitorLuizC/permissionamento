import { AccessControl, IAccessInfo } from "role-acl";
import PermissionRoleEnum from "./enums/PermissionRoleEnum";
import hierarchy from "./hierarchy";
import permissions, { Permissions } from "./permissions";
import resolveToArray from "../utils/resolveToArray";

/**
 * Transforms permissions of a role into a list of `role-acl` grants options.
 * @param permissions - An object of a object of methods.
 */
function getGrants(permissions: Permissions): IAccessInfo[] {
  return Object.entries(permissions).flatMap(([resource, actions]) => {
    return Object.entries(actions).map(
      ([action, { attributes, condition }]) => ({
        resource,
        action,
        condition,
        attributes: resolveToArray<string>(attributes),
      }),
    );
  });
}

function createAccessControl(): IAccessInfo[] {
  return Object.values(PermissionRoleEnum).flatMap((role) => {
    const access = permissions[role] as Permissions;
    return getGrants(access).map((access) => ({
      ...access,
      ...hierarchy[role],
    }));
  });
}

const accessControl = new AccessControl(createAccessControl());

export default accessControl;
