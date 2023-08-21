"use client";

import { FormEvent, useState } from "react";
import { chatService } from "@/lib/service";
import { useChatAction, useIsFetching } from "@/lib/store";
import { uuidv4 } from "@/utils/id";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { addMessage, setIsFetch } = useChatAction();
  const isFetching = useIsFetching();

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    setIsFetch(true);
    addMessage({
      id: uuidv4(),
      content: message,
      role: "user",
    });
    try {
      event.preventDefault();
      const data = await chatService({ message });
      setIsFetch(false);
      setMessage("");
      const returnedMessage = data.choices[0].message;
      addMessage({
        id: data.id,
        content: returnedMessage.content,
        role: returnedMessage.role,
      });
    } catch (error: any) {
      setIsFetch(false);
      setErrorMessage(error.message);
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col p-4 gap-3 bg-white">
      <form className="flex items-center w-full gap-3" onSubmit={handleSend}>
        <input
          required
          value={message}
          placeholder="Write a message..."
          onChange={(e) => setMessage(e.target.value)}
          className="grow border rounded-full px-3 py-2"
        />
        <button
          disabled={!Boolean(message) || isFetching}
          className="bg-blue-600 text-white px-3 py-2 rounded-full disabled:bg-blue-300"
        >
          {isFetching ? "Sending..." : "Send"}
        </button>
      </form>
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default MessageForm;
