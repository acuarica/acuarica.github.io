---
title: JNIF
subtitle: Java Native Instrumentation Framework
authors: [Luis Mastrangelo, Matthias Hauswirth]
tags: [java, native, instrumentation]
date: 2014-09-23
publication: "In International Conference on Principles and Practices of Programming on the Java platform: Virtual machines, Languages, and Tools (PPPJ'14), IEEE"
publication_short: "In PPPJ'14"
urls:
    code: "https://gitlab.com/acuarica/jnif"
    pdf: "https://doi.org/10.1145/2647508.2647516"
    slides: "https://acuarica.gitlab.com/jnif/2014-pppj-slides.pdf"

# [[url_custom]]
# name = "Documentation"
# url = "http://acuarica.gitlab.io/jnif/"

# date: 2019-11-16T17:57:44+01:00
# lastmod: 2019-11-16T17:57:44+01:00
---

The development of instrumentation-based dynamic analyses for Java bytecode is enabled by various bytecode rewriting frameworks.
Those frameworks are all implemented in Java.
This complicates their use for developing full-coverage analyses that not only observe application code,
but that also observe the execution of the complete Java class library.
Moreover, it makes it hard to avoid perturbation due to the Java code of the instrumentation tool interfering with the Java code of the observed program.
So far, workarounds for these problems required either statically instrumenting the runtime library or running a separate JVM as an instrumentation server.

This paper solves this problem.
It introduces JNIF, the first complete bytecode rewriting framework implemented in native code.
JNIF can be used in a JVMTI agent to create isolated, full-coverage, in-process dynamic instrumentation tools.
JNIF is written in C++ and has an object-oriented design familiar to users of Java-based rewriting libraries.
JNIF is able to decode, analyze, edit, and encode Java class files.
This includes the generation of stack maps required by split-time verifiers of modern JVMs.
Our performance evaluation shows that JNIF is often faster than the most performant competitive approach based on ASM.
