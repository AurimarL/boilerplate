// TODO:

/*

// index.test.ts
import { GetOrganization } from './index'; // Adjust the import path as necessary
import { db } from '@/db'; // Adjust the import path as necessary
import OrganisationSchema from './schema';

// Mock the db module
jest.mock('@/db', () => ({
  db: {
    execute: jest.fn(),
  },
}));

describe('GetOrganization', () => {
    // TODO: ! 
  const mockExecute = db.execute as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return organisations when the query is successful', async () => {
    const mockOrganisations = [
      { name: 'Org 1', isEnabled: true, createdAt: '2023-01-01' },
      { name: 'Org 2', isEnabled: true, createdAt: '2023-01-02' },
    ];

    mockExecute.mockResolvedValueOnce(mockOrganisations);

    const result = await GetOrganization();

    expect(mockExecute).toHaveBeenCalledWith({
      query: expect.any(Object), // You can be more specific if needed
      schema: OrganisationSchema,
    });
    expect(result).toEqual(mockOrganisations);
  });

  it('should throw an error when the query fails', async () => {
    const errorMessage = 'Database error';
    mockExecute.mockRejectedValueOnce(new Error(errorMessage));

    await expect(GetOrganization()).rejects.toThrow(errorMessage);
  });
});


*/