import { User } from "../../src/model/User"
import { USER_ROLES } from "../../src/types/UserRoles"

export const rubens = new User(
    "35b62ff4-64af-4721-a4c5-d038c6f730cf",
    "Rubens",
    "rubens@gmail.com",
    USER_ROLES.ADMIN
  );
  
  export const tinker = new User(
    "35b62ff4-64af-4721-a4c5-d038c6f730ce",
    "tinker",
    "tinker@cad.com",
    USER_ROLES.ADMIN
  );
  
  export const harp = new User(
    "35b62ff4-64af-4721-a4c5-d038c6f730cg",
    "harp",
    "harp@ai.com",
    USER_ROLES.NORMAL
  );
  
  export const ThenMarques = new User(
    "35b62ff4-64af-4721-a4c5-d038c6f730ch",
    "ThenMarques",
    "ThenMarques@ai.com",
    USER_ROLES.NORMAL
  );