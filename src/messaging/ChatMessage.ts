import { Message } from "./Message";
import { Attachment } from "../attachments/Attachment";

export interface ChatMessage extends Message {
  text?: string;
  attachments: Attachment[];
}
