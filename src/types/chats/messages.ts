type ContentType = 'message' | 'file';

interface IChatMessage {
  id: number;
  time: string;
  type: ContentType;
  content: string;
  user_id: number;
}

export { type IChatMessage, ContentType };
