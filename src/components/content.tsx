"use client";

import UserHeader from "@/components/user-header";
import MessageBody from "@/components/message-body";
import MessageForm from "@/components/message-form";

const Container = () => {
  return (
    <div className="h-full w-full max-w-xl bg-gray-100 rounded-xl flex flex-col items-center p-8">
      <div className="flex flex-col border h-full w-full rounded-xl overflow-hidden">
        <UserHeader name="Le Ngoc Bao" email="lengocbaovlth1513010@gmail.com" />
        <MessageBody />
        <MessageForm />
      </div>
    </div>
  );
};

export default Container;
