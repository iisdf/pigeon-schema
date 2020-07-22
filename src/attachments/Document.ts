import { Attachment } from "./Attachment";
import { AttachmentType } from "../fundamentals/attachment/AttachmentType";

export interface Video extends Attachment {
  title: string;
  size: number;
  extension: string;
  external: boolean;
  type: AttachmentType.DOCUMENT;
}
