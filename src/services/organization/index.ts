import { db } from '@/lib/db';
import { select, create, count } from 'cirql';
import { OrganisationSchema, type OrganisationRecordSchemaType } from '@/schemas';

// Fetch an organization by its ID
export async function getById({ id }: { id: string }) {
    try {
        const result = await db.execute({
            query: select().from('organization').where({ id }),
            schema: OrganisationSchema
        });
        return result[0];
    } catch (error) {
        console.error(`Error fetching organization with ID ${id}:`, error);
        throw new Error('Failed to fetch organization');
    }
}

// Fetch all organizations with a limit
export async function getAll(limit = 10) {
    try {
        const result = await db.execute({
            query: select().from('organization').limit(limit),
            schema: OrganisationSchema,
        });
        return result;
    } catch (error) {
        console.error('Error fetching organizations:', error);
        throw new Error('Failed to fetch organizations');
    }
}

// Create a new organization
export async function createOne({ organizationInput }: { organizationInput: OrganisationRecordSchemaType }) {
    try {
        const result = await db.execute({
            query: create("organization")
                .with(OrganisationSchema)
                .setAll(organizationInput) // Directly use organizationInput
        });
        return result;
    } catch (error) {
        console.error('Error creating organization:', error);
        throw new Error('Failed to create organization');
    }
}

// Count all organizations
export async function countAll(): Promise<number> {
    try {
        const result = await db.execute({
            query: count('organization') // Ensure the table name is consistent
        });
        return result;
    } catch (error) {
        console.error('Error counting organizations:', error);
        throw new Error('Failed to count organizations');
    }
}