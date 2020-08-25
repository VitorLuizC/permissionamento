/**
 * Enum of actions an user with a certain role do in a resource.
 */
enum PermissionActionEnum {
  /**
   * Visualize in list, as multiple itens.
   */
  LIST = "LIST",

  /**
   * Visualize in details, as a single item.
   */
  VIEW = "VIEW",
  UPDATE = "UPDATE",
  CREATE = "CREATE",
  DELETE = "DELETE",
}

export default PermissionActionEnum;
