import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "../todos";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> // FIXME: remove the any type and replace it with the correct type
) {
  // Handle Edit Todo
  if (req.method === "PUT") {
    const id = Number(req.query.id);
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.done = !todo.done;
    return res.status(200).json(todo);
  }
}
