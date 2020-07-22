import { Attachment } from "./Attachment";
import { AttachmentType } from "../fundamentals/attachment/AttachmentType";

export interface Photo extends Attachment {
  width: number;
  height: number;
  type: AttachmentType.PHOTO;
}
