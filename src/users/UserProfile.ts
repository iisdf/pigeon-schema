import { SexTypes } from "../fundamentals/SexTypes";

export interface UserProfile {
  uuid: number;
  username: string;
  first_name: string;
  last_name?: string;
  photo_50: string;
  photo_100: string;
  sex: SexTypes;
  last_seen?: number;
  is_online: boolean;
}
