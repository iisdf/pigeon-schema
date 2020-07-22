import { SexType } from "../fundamentals/SexType";
import { UserID } from "../fundamentals/UserID";

export interface UserProfile {
  id: UserID;
  username: string;
  first_name: string;
  last_name?: string;
  photo_50: string;
  photo_100: string;
  sex: SexType;
  last_seen?: number;
  is_online: boolean;
}
