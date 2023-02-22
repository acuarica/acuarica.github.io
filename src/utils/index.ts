import { CollectionEntry, getCollection } from "astro:content";

type Entry = any extends CollectionEntry<infer R> ? R : never;

export async function getRenderedCollection<C extends Entry>(
    collection: C
) {
    return await Promise.all(
        (await getCollection(collection)).map(async entry => ({
            ...entry,
            ...await entry.render(),
        }))
    );
}

export function sort<E extends { data: { date: { date: Date } } }>(collection: E[]): E[] {
    return collection.sort((lhs, rhs) => rhs.data.date.date.getTime() - lhs.data.date.date.getTime());
}
