import { Chat } from "./Chat";
import { UserProfile } from "../users/UserProfile";
import { ChatType } from "../fundamentals/chat/ChatType";
import { UserID } from "../fundamentals/UserID";
import { MessageID } from "../fundamentals/message/MessageID";

export interface Conversation extends Chat {
  title: string;
  members: UserProfile[];
  admins: UserID[];
  pinned_message?: MessageID;
  photo_50?: string;
  photo_100?: string;
  left: boolean;
  kicked: boolean;
  type: ChatType.CONVERSATION;
}
