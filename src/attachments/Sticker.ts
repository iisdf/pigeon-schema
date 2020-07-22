import { Attachment } from "./Attachment";
import { AttachmentType } from "../fundamentals/attachment/AttachmentType";

export interface Sticker extends Attachment {
  pack: number;
  sticker: number;
  type: AttachmentType.STICKER;
}
