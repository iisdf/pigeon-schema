import { ItemsResponse } from "../fundamentals/ItemsResponse";
import { UserProfile } from "./UserProfile";

export interface UserList extends ItemsResponse {
  items: UserProfile[];
}
