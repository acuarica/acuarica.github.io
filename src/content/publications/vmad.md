---
title: 'VMAD: An Advanced Dynamic Program Analysis and Instrumentation Framework'
authors:
    - Alexandra Jimborean
    - Luis Mastrangelo
    - Vincent Loechner
    - Philippe Clauss
tags:
    - virtual-machine
    - loop-nest
    - runtime-system
date: 2012-03-24T21:43:47+01:00
# lastmod: 2019-11-17T21:43:47+01:00

# date: "2014-09-23"
publication: "In International Conference on Compiler Construction (CC'12), Springer"
publication_short: "In CC'12"
urls:
    pdf: 'https://doi.org/10.1007/978-3-642-28652-0_12'
---

VMAD (Virtual Machine for Advanced Dynamic analysis) is a platform for advanced profiling and analysis of programs, consisting in a static component and a runtime system.

The runtime system is organized as a set of decoupled modules, dedicated to specific instrumenting or optimizing operations, dynamically loaded when required. The program binary files handled by VMAD are previously processed at compile time to include all necessary data, instrumentation instructions and callbacks to the runtime system. For this purpose, the LLVM compiler has been extended to automatically generate multiple versions of the code, each of them tailored for the targeted instrumentation or optimization strategies. The compiler chooses the most suitable intermediate representation for each version, depending on the information to be acquired and on the optimizations to be applied. The control flow graph is adapted to include the new versions and to transfer the control to and from the runtime system, which is in charge of the execution flow orchestration.

The strength of our system resides in its extensibility, as one can add support for various new profiling or optimization strategies, independently of the existing modules. VMAD’s potential is illustrated by presenting several analysis and optimization applications dedicated to loop nests: instrumentation by sampling, dynamic dependence analysis, adaptive version selection.
