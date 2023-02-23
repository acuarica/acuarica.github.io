import type { List } from "mdast-util-toc/lib";

export type Ul = Li[];

export interface Li {
    href: string;
    text: string;
    children?: Ul;
}

export function getToc(list: List): Ul {
    if (list === null) {
        return [];
    }

    const ul: Ul = [];
    for (const child of list.children) {
        const li: Li = { href: "", text: "" };
        for (const node of child.children) {
            if (node.type === "paragraph") {
                const link = node.children[0]!;
                if (link.type === "link") {
                    li.href = link.url;
                    const text = link.children[0]!;
                    if (text.type === "text") {
                        li.text = text.value;
                    }
                }
            } else if (node.type === "list") {
                li.children = getToc(node);
            }
        }
        ul.push(li);
    }
    return ul;
}