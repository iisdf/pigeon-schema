import { AttachmentID } from "../fundamentals/attachment/AttachmentID";
import { UserID } from "../fundamentals/UserID";
import { AttachmentType } from "../fundamentals/attachment/AttachmentType";

export interface Attachment {
  id: AttachmentID;
  owner_id: UserID;
  type: AttachmentType;
  date: number;
  link: string;
}
