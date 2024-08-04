import { z } from 'zod';
import { RecordSchema } from 'cirql';

const OrganisationSchema = RecordSchema.extend({
    id: z.string(),
    name: z.string(),
    created_at: z.string()
});
export default OrganisationSchema;

type OrganisationRecordSchemaType = z.infer<typeof OrganisationSchema>;
export type { OrganisationRecordSchemaType }