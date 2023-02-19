---
title: 'Use at Your Own Risk: The Java Unsafe API in the Wild'
authors: ["Luis Mastrangelo", "Luca Ponzanelli", "Andrea Mocci", "Michele Lanza", "Matthias Hauswirth", "Nathaniel Nystrom"]
tags: [java, unsafe]
categories: []
# date: 2019-11-16T14:06:25+01:00

date: 2015-10-25
publication: "In *Proceedings of the 2015 ACM SIGPLAN International Conference on Object-Oriented Programming, Systems, Languages, and Applications*"
publication_short: "OOPSLA 2015"
publication_type: 1
url_code: "https://gitlab.com/acuarica/java-unsafe-analysis"
url_pdf: "https://doi.org/10.1145/2814270.2814313"
url_project: "project/deep-learning/"
url_video: "http://2015.splashcon.org/event/oopsla2015-use-at-your-own-risk-the-java-unsafe-api-in-the-wild"

lastmod: 2019-11-16T14:06:25+01:00
featured: false
draft: false
---
Java is a safe language.
Its runtime environment provides strong safety guarantees that any Java application can rely on.
Or so we think.

We show that the runtime actually does not provide these guarantees---for a large fraction of today's Java code.
Unbeknownst to many application developers, the Java runtime includes a "backdoor" that allows expert library and framework developers to circumvent Java's safety guarantees.
This backdoor is there by design, and is well known to experts, as it enables them to write high-performance "systems-level" code in Java.
For much the same reasons that safe languages are preferred over unsafe languages, these powerful---but unsafe---capabilities in Java should be restricted.
They should be made safe by changing the language, the runtime system, or the libraries.
At the very least, their use should be restricted.
This paper is a step in that direction.

We analyzed 74GB of compiled Java code, spread over 86,479 Java archives, to determine how Java's unsafe capabilities are used in real-world libraries and applications.
We found that 25% of Java bytecode archives depend on unsafe third-party Java code, and thus Java's safety guarantees cannot be trusted.
We identify 14 different usage patterns of Java's unsafe capabilities, and we provide supporting evidence for why real-world code needs these capabilities.
Our long-term goal is to provide a foundation for the design of new language features to regain safety in Java.
