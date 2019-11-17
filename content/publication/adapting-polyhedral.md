---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Adapting the Polyhedral Model as a Framework for Efficient Speculative Parallelization"
subtitle: ""
summary: ""
abstract: "In this paper, we present a Thread-Level Speculation (TLS) framework whose main feature is to be able to speculatively parallelize a sequential loop nest in various ways, by re-scheduling its iterations. The transformation to be applied is selected at runtime with the goal of minimizing the number of rollbacks and maximizing performance. We perform code transformations by applying the polyhedral model that we adapted for speculative and runtime code parallelization. For this purpose, we design a parallel code pattern which is patched by our runtime system according to the profiling information collected on some execution samples. Adaptability is ensured by considering chunks of code of various sizes, that are launched successively, each of which being parallelized in a different manner, or run sequentially, depending on the currently observed behavior for accessing memory.

We show on several benchmarks that our framework yields good performance on codes which could not be handled efficiently by previously proposed TLS systems."
authors: ["Alexandra Jimborean", "Philippe Clauss", "Benoît Pradelle", "Luis Mastrangelo", "Vincent Loechner"]
tags: [tls, parallelism, speculative]
categories: []
date: 2012-02-25T21:43:32+01:00
# lastmod: 2019-11-17T21:43:32+01:00
featured: false
draft: false


date: "2014-09-23"
publication: "In *Proceedings of the 17th ACM SIGPLAN symposium on Principles and Practice of Parallel Programming (PPoPP'12)*, ACM."
publication_short: "In *PPoPP'12*"
publication_type: 1
url_pdf: "https://doi.org/10.1145/2647508.2647516"


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
