import { createClient as createDeliveryClient } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

const client = createDeliveryClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const managementClient = createManagementClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
});

export async function fetchEntries() {
    const entries = await client.getEntries();
    return entries.items;
}

export async function patchEntry(entryId, updatedFields) {
    try {
        const space = await managementClient.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
        const environment = await space.getEnvironment('master');

        const entry = await environment.getEntry(entryId);

        Object.keys(updatedFields).forEach(field => {
            entry.fields[field] = { 'en-US': updatedFields[field] };
        });

        const updatedEntry = await entry.update();
        const publishedEntry = await updatedEntry.publish();

        return publishedEntry;
    } catch (error) {
        console.error('Error updating entry:', error);
        throw error;
    }
}
