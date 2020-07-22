import { Message } from "./Message";
import { MessageType } from "../../fundamentals/message/MessageType";
import { UserID } from "../../fundamentals/UserID";

export interface ChatAction extends Message {
  type: MessageType.ACTION;
  member_id?: UserID;
  photo?: string;
  title?: string;
}
