export { };
declare global {
export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};
}