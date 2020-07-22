import { Message } from "./Message";
import { ChatID } from "../fundamentals/chat/ChatID";
import { ChatType } from "../fundamentals/chat/ChatType";

export interface Chat {
  id: ChatID;
  local_id: number;
  unread: number;
  last_message?: Message;
  messages?: Message[];
  pinned: boolean;
  type: ChatType;
}
