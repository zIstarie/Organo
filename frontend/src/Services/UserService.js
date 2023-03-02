import { createUser } from "../../lib/database";
import z from 'zod';

const bodySchema = {
  name: z.string().max(150).required(),
  role: z.string().required(),
  image: z.string().url().required(),
  team: z.number().required()
}

export const userService = {
  addUser: async data => {
    const user = bodySchema.safeParse(data);
    if (!user.success) throw new Error(result.error);

    try {
      const userId = await createUser({ ...user.data });

      return userId;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}