import { FC } from "react";
import { cx } from "class-variance-authority";

interface MessageProps {
  content: string;
  id: string;
  role: string;
}

const Message: FC<MessageProps> = ({ id, content, role }) => {
  return (
    <div className="w-full">
      <div
        className={cx(
          "text-sm rounded-xl p-3 max-w-sm",
          role === "user"
            ? "float-right bg-blue-400 text-white"
            : "bg-white text-gray-800"
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
