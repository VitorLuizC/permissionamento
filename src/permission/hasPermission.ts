import resolveToArray from "../utils/resolveToArray";
import accessControl from "./accessControl";
import PermissionRoleEnum from "./enums/PermissionRoleEnum";
import type { Permissions } from "./permissions";

// eslint-disable-next-line @typescript-eslint/ban-types
type Context<T> = T extends { condition: (_: infer C) => unknown } ? C : {};

/**
 * Check if an user with a certain role has permission to perform an action in a
 * resource with a context.
 * @example
 * hasPermission({
 *   roles: getCurrentUserRoles(),
 *   action: PermissionActionEnum.VIEW,
 *   resource: PermissionResourceEnum.PROFILE,
 *   context: {},
 * });
 * @param options - An object with resouce, action, context and user's roles.
 */
export default async function hasPermission<
  Resource extends keyof Permissions,
  Action extends keyof Permissions[Resource]
>(options: {
  roles?: PermissionRoleEnum | PermissionRoleEnum[];
  action: Action;
  context: Context<Permissions[Resource][Action]>;
  resource: Resource;
}): Promise<boolean> {
  const permission = await accessControl
    .can(resolveToArray(options.roles ?? PermissionRoleEnum.ANY))
    .execute(options.action as string)
    .context(options.context ?? {})
    .on(options.resource, false);
  return permission.granted;
}
