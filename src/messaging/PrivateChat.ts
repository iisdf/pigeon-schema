import { Chat } from "./Chat";
import { UserProfile } from "../users/UserProfile";
import { ChatType } from "../fundamentals/chat/ChatType";

export interface PrivateChat extends Chat {
  user_1: UserProfile;
  user_2: UserProfile;
  type: ChatType.PRIVATE;
}
