import { defineCollection, z } from 'astro:content';

const ZodLangs = z.enum(['TypeScript', 'C/C++', 'Haskell', 'Rust']);
const ZodTags = z.array(z.string().regex(/^[a-z][a-z0-9-+]*$/));

export const collections = {

    about: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            favicon: z.string(),
            googleAnalytics: z.string(),
            hero: z.object({
                intro: z.string(),
                name: z.string(),
                avatar: z.string(),
            }),
            socials: z.array(
                z.object({
                    icon: z.string(),
                    url: z.string(),
                    contact: z.boolean().default(false),
                }),
            ),
            skills: z.array(
                z.object({
                    icon: z.string(),
                    title: z.string(),
                    subtitle: z.string(),
                }),
            ),
        })
    }),

    experience: defineCollection({
        schema: z.object({
            title: z.string(),
            company: z.object({
                name: z.string(),
                url: z.string().url().optional(),
                location: z.string(),
            }),
            date: z.string().transform(str => ({
                label: str,
                date: new Date(str.split('-')[0]!)
            })),
        })
    }),

    education: defineCollection({
        schema: z.object({
            title: z.string(),
            school: z.object({
                name: z.string(),
                url: z.string().url(),
                location: z.string(),
            }),
            date: z.string().transform(str => ({
                label: str,
                date: new Date(str.split('-')[0]!)
            })),
        })
    }),

    projects: defineCollection({
        schema: z.object({
            title: z.string(),
            lang: ZodLangs,
            tags: ZodTags,
            link: z.object({
                icon: z.string(),
                url: z.string().url(),
            }),
        })
    }),

    posts: defineCollection({
        schema: z.object({
            title: z.string(),
            tags: ZodTags,
            date: z.date(),
        })
    }),

    publications: defineCollection({
        schema: z.object({
            title: z.string(),
            subtitle: z.string().default(''),
            authors: z.array(z.string()),
            tags: ZodTags,
            date: z.date(),
            publication: z.string(),
            urls: z.record(z.enum(['code', 'pdf', 'project', 'video', 'slides']), z.string()),
        })
    }),

};
