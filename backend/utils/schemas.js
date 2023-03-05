import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(9).max(150),
  role: z.string(),
  teamId: z.string(),
  image: z.string().url().or(z.literal("")).or(z.undefined())
});

export const userBodySchema = userSchema.partial({
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
    'black'
  ])
});

export const teamBodySchema = teamSchema.required();
