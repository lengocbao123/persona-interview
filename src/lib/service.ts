interface ChatResponse {
  id: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
}
export const chatService = async ({ message }: { message: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_OPENAI_API_URL}/completions`,
    {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
  if (response.error) {
    throw response.error;
  }

  return {
    id: response.id,
    choices: response.choices,
  } as ChatResponse;
};
