"use server";

import { GetAllOrganizations } from "@/services";

/**
  * ### Example of Client usage of the server action (function)
  */

export async function HandleClick() {
    const organization = await GetAllOrganizations();
    console.log(organization)
}
