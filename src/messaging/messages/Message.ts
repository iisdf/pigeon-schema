import { ChatID } from "../../fundamentals/chat/ChatID";
import { UserID } from "../../fundamentals/UserID";
import { MessageType } from "../../fundamentals/message/MessageType";
import { MessageID } from "../../fundamentals/message/MessageID";

export interface Message {
  id?: MessageID;
  date: number;
  chat_id: ChatID;
  from_id: UserID;
  type: MessageType;
}
