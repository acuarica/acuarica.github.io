import { CollectionEntry, getCollection } from "astro:content";

type Entry = any extends CollectionEntry<infer R> ? R : never;

type Render = {
    Content: import('astro').MarkdownInstance<{}>['Content'];
    headings: import('astro').MarkdownHeading[];
    remarkPluginFrontmatter: Record<string, any>;
};

export async function renderCollection<C extends Entry>(
    collection: CollectionEntry<C>[]
): Promise<(CollectionEntry<C> & Render)[]> {
    return await Promise.all(
        collection.map(async entry => ({
            ...entry,
            ...await entry.render(),
        }))
    );
}

export async function getRenderedCollection<C extends Entry>(
    collection: C
): Promise<(CollectionEntry<C> & Render)[]> {
    return await renderCollection(await getCollection(collection));
}

export function sort<E extends { data: { date: { date: Date } } }>(collection: E[]): E[] {
    return collection.sort((lhs, rhs) => rhs.data.date.date.getTime() - lhs.data.date.date.getTime());
}
