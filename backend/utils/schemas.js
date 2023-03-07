import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(9).max(150),
  role: z.string(),
  teamId: z.number(),
  image: z.string().url().or(z.literal("")).or(z.undefined())
});
const userBodySchema = userSchema.partial({
  image: true
});

const teamSchema = z.object({
  name: z.string().max(128),
  theme: z.enum([
    'green',
    'blue',
    'red',
    'purple',
    'yellow',
    'white',
    'black',
  ])
});
const teamBodySchema = teamSchema.required();

export {
  userBodySchema,
  teamBodySchema
};
