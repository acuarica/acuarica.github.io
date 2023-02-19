---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Casting about in the Dark"
subtitle: "An Empirical Study of Cast Operations in Java Programs"
summary: ""
authors: ["Luis Mastrangelo", "Matthias Hauswirth", "Nathaniel Nystrom"]
tags: [java, cast]
categories: []

date: 2019-10-25
publication: "In *Proceedings of the 2019 ACM SIGPLAN International Conference on Object-Oriented Programming, Systems, Languages, and Applications*"
publication_short: "OOPSLA 2019"
publication_type: 1
url_code: "https://gitlab.com/acuarica/java-unsafe-analysis"
url_pdf: "https://doi.org/10.1145/3360584"
url_project: "project/deep-learning/"
url_video: "http://2015.splashcon.org/event/oopsla2015-use-at-your-own-risk-the-java-unsafe-api-in-the-wild"


# date: 2019-11-16T17:57:57+01:00
lastmod: 2019-11-16T17:57:57+01:00
featured: false
draft: false
---

The main goal of a static type system is to prevent certain kinds of errors from happening at run time.
A type system is formulated as a set of constraints that gives any expression or term in a program a well-defined type.
Yet mainstream programming languages are endowed with type systems that provide the means to circumvent their constraints through casting.

We want to understand how and when developers escape the static type system to use dynamic typing.
We empirically study how casting is used by developers in more than seven thousand Java projects.
We find that casts are widely used (8.7% of methods contain at least one cast) and that 50% of casts we inspected are not guarded locally to ensure against potential run-time errors.

To help us better categorize use cases and thus understand how casts are used in practice, we identify 25 cast-usage patterns-recurrent programming idioms using casts to solve a specific issue.
This knowledge can be: a) a recommendation for current and future language designers to make informed decisions
b) a reference for tool builders, e.g., by providing more precise or new refactoring analyses,
c) a guide for researchers to test new language features, or to carry out controlled programming experiments, and
d) a guide for developers for better practices.
