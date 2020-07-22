import { Attachment } from "./Attachment";
import { AttachmentType } from "../fundamentals/attachment/AttachmentType";

export interface Video extends Attachment {
  length: number;
  external: boolean;
  type: AttachmentType.VIDEO;
}
