type ContentType = 'message' | 'file';

interface IChatMessage {
  id: number;
  time: string;
  type: ContentType;
  content: string;
  userId: number;
}

export { type IChatMessage, ContentType };
