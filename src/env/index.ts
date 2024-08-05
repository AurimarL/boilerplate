// env.ts
import { z } from 'zod'

// Define the schema as an object with all of the env
// variables and their types
const envSchema = z.object({
    MINIO_PORT: z.string().min(1),
    MINIO_ACCESS_KEY: z.string().min(1),
    MINIO_SECRET_KEY: z.string().min(1),
    MINIO_ENDPOINT: z.string().min(1),
    ENV: z
        .union([
            z.literal('development'),
            z.literal('testing'),
            z.literal('production'),
        ])
        .default('development'),
    // ...
})

// Validate `process.env` against our schema
// and return the result
const env = envSchema.parse(process.env)

// Export the result so we can use it in the project
export default env

export type EnvironmentType = z.infer<typeof envSchema>


