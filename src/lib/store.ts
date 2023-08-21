import { uuidv4 } from "@/utils/id";
import { create } from "zustand";

interface Message {
  id: string;
  content: string;
  role: string;
}
interface UseStore {
  actions: {
    addMessage: (input: Message) => void;
    setIsFetch: (input: boolean) => void;
  };
  messages: Array<Message>;
  isFetching: boolean;
}
const useStore = create<UseStore>((set) => ({
  actions: {
    addMessage: (input: Message) =>
      set((state) => ({ messages: [...state.messages, input] })),
    setIsFetch: (input: boolean) => set(() => ({ isFetching: input })),
  },
  messages: [
    {
      id: uuidv4(),
      content: "Hey, this is ChatBot! I'm here to help you.",
      role: "assistant",
    },
  ],
  isFetching: false,
}));

export const useIsFetching = () => useStore((state) => state.isFetching);
export const useMessages = () => useStore((state) => state.messages);
export const useChatAction = () => useStore((state) => state.actions);
