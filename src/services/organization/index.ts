import { select } from 'cirql';
import { db } from '@/lib/db';
import { OrganisationSchema } from '@/schemas';

export async function GetOrganization() {
    try {
        const organisations = await db!.execute({
            query: select().from('organisation').where({ isEnabled: true }),
            schema: OrganisationSchema
        });
        return organisations;
    } catch (error) {
        throw new Error("" + error)
    }
}
