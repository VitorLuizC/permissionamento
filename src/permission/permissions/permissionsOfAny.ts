import PermissionActionEnum from "../enums/PermissionActionEnum";
import PermissionResourceEnum from "../enums/PermissionResourceEnum";

const permissionsOfAny = {
  [PermissionResourceEnum.PROFILE]: {
    [PermissionActionEnum.VIEW]: {
      attributes: ["*", "!password"],
      condition: () => true,
    },
  },
} as const;

export default permissionsOfAny;
