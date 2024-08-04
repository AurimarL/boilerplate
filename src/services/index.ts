"use server"
// #All services are re-exported here

// ##Organization

import {
    getById as GetOrganizationById,
    getAll as GetAllOrganizations,
    createOne as CreateOneOrganization,
    countAll as CountAllOrganization,
} from "./organization";

export {
    GetOrganizationById,
    GetAllOrganizations,
    CreateOneOrganization,
    CountAllOrganization,
}

//