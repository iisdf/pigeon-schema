import { Message } from "./Message";
import { Attachment } from "../../attachments/Attachment";
import { MessageType } from "../../fundamentals/message/MessageType";

export interface ChatMessage extends Message {
  text?: string;
  attachments?: Attachment[];
  type: MessageType.MESSAGE;
}
