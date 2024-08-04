import { select } from 'cirql';
import OrganisationSchema from './schema';
import { db } from '@/db';

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
