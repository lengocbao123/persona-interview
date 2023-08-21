"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useIsFetching, useMessages } from "@/lib/store";
import Message from "@/components/message";

const MessageBody = () => {
  const messages = useMessages();
  const isFetching = useIsFetching();
  return (
    <div id="scrollableDiv" className="h-[500px] w-full grow overflow-y-auto">
      <InfiniteScroll
        dataLength={messages.length}
        next={() => {}}
        inverse={false}
        hasMore={false}
        refreshFunction={() => {}}
        loader={<span className="text-xs">Loading...</span>}
        scrollableTarget="scrollableDiv"
        className="flex flex-col justify-end gap-5 p-4"
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            id={message.id}
            content={message.content}
            role={message.role}
          />
        ))}
        {isFetching && (
          <Message
            id="fetching-answer"
            content="Getting answer..."
            role="assistant"
          />
        )}
      </InfiniteScroll>
    </div>
  );
};

export default MessageBody;
