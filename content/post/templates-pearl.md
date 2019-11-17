---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Static Plug-ins with Variadic Templates in C++: Parsing Java Class Files in a Modular Way"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2017-11-20T19:53:13+01:00
# date: 2019-11-17T19:24:57+01:00
lastmod: 2019-11-17T19:24:57+01:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

The template meta programming in *C++* is a powerful mechanism,
so powerful that it is turing-complete.

Although with some limitations.
They have become even more expressive in C++11.
They have added variadic template arguments.

How we have used variadic template arguments to implement a statically plugin system, to parse Java Class Files.

This is the main type of the parser:

```c++
ClassParser<
        ConstPoolParser,
        AttrsParser<
                SourceFileAttrParser,
                SignatureAttrParser>,
        AttrsParser<
                CodeAttrParser<
                        LineNumberTableAttrParser,
                        LocalVariableTableAttrParser,
                        LocalVariableTypeTableAttrParser,
                        StackMapTableAttrParser>,
                ExceptionsAttrParser,
                SignatureAttrParser>,
        AttrsParser<
                SignatureAttrParser>
> parser;
```
