import { z } from 'zod';
import { RecordSchema } from 'cirql';

const OrganisationSchema = RecordSchema.extend({
    name: z.string().min(1),
    isEnabled: z.boolean(),
    createdAt: z.string()
});

export default OrganisationSchema;