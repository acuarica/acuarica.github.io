---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Reflections on Growing a Programmer"
subtitle: ""
summary: ""
authors: []
tags: ["education", "racket", "functional", "design", "testing"]
categories: []
# date: 2019-11-17T19:25:40+01:00
date: "2015-12-03T12:00:00"
lastmod: 2019-11-17T19:25:40+01:00
featured: false
draft: false

image: /images/post.jpg

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

Matthias Felleisen from Northeastern University wrote an essay about how to introduce programming in a freshmen course.
The essay &mdash;
[Growing a Programmer](http://www.ccs.neu.edu/home/matthias/Thoughts/Growing_a_Programmer.html) &mdash; introduces a software engineering approach from the very first day in class.

The notes presented here are a sort of response to *Growing a Programmer*.
They reflect my thoughts on the subject based on my experience as both a researcher and an educator.
I believe I can contribute my two cents to the topic of how to *Grow a Programmer*.


## Goals

It is mandatory to have a well defined idea on what we expect from an University graduate.
The goal of any Computing Science curricula should be that its graduates be able to work not only in industry, but in academia as well.
If we train future students only for a software engineer job, What is it left to academia?
Who are going to be the next generation of researchers?

The role of a Computing Science curricula, and more general the role of the University should be to teach what students will not &mdash; or least, what it is difficult to &mdash; find elsewhere.
The University should teach what only University can teach.

The University should serve as a guide to the student.
It should teach solid academic foundations.
If students are well-guided with solid foundations, it should be no problem for them to adapt to new technologies.

I am fully aware that the original essay has a different goal in mind.
Nevertheless, even in the case of training future software engineers, the rest of this response applies the same.


## Design Recipe

I do not believe the design recipe is well suited for a freshmen course.
Not for its complexity, but because it is not properly motivated.
It is not properly motivated in the sense that students do not see the point in applying the design recipe.
My feeling is that they think they are wasting their time by satisfying the requirements of the design recipe.
Students do not understand what the difference between examples and tests is (they think they are writing down the same thing twice).
They do not see why they have to write a purpose statement in an assignment: The assignment already describe what is function is suppose to do.
They simply see the function template as a repetition of code.
It is not properly motivated because they do not know yet how to program.

I think it comes from a misconception about what Software Engineering is suppose to do.
I personally believe that the purpose of Software Engineering is to build reliable software products.
Building software products is far distant from how to program.
These are two orthogonal activities.
That is why I think the design recipe is not well suited for a course on how to program.

The essay claims that students do not *"tinker until it works"* promoting the design recipe as a systematic design procedure.
As far as I could experience in a *Fundamentals 1* alike course, the students do use a *"tinker until it works"* approach anyway.
The design recipe uses testing as the only measure of correctness.
The problem is that when the students implement a function, they do so by implementing it and testing it, *"tinkering until it works"*.
Let me be clear about testing.
It is a great tool and we all use it in our everyday work.
But testing is not the last line of defense.
It never was and it never will be.
The design recipe approach does not encourage the student to reason about their programs.


## Language Choice

Theorem 2 in &sect; 2.1 states:

> **Theorem 2** A compiler and the run-time system articulate error messages under the assumption that the programmer knows the entire language.

I am not entirely sure about that.
If you never ever write a single * (to create a pointer type) in a C/C++ program, Can you get an error message about pointers?
If you never write a type class definition in Haskell, Can you get a type class error?
My point here is, if you use a subset of a language, you should receive only error messages related to that subset.

That being said, the paper [A critique of Abelson and Sussman or why calculating is better than scheming](http://www.cs.kent.ac.uk/people/staff/dat/miranda/wadler87.pdf) by Philip Wadler, provides an interesting point of view about teaching in Scheme versus Miranda, or more generally, about dynamically versus static typed functional languages.


## Pair Programming

I fully agree that programming is a social discipline.
It is important to be able express ourselves in a clear and concise manner.
I think it is crucial for students to work in groups from the very beginning.
This will improve their abilities to explain themselves to other students.

However, I am worried that every activity the student carries out is done in pairs.
I hope working in pairs is an activity that complements the student studying by him or herself.

## Conclusion

Although a Software Engineering approach to programming is important, I think its introduction in a freshmen course is not adequate.
A more solid foundation in programming should be thought in such a course.
And its foundations lays in the field of logic.
What a student needs to understand from the very first day in class is that there is not a single approach to programming.

Some topics were left in these notes, for example what to teach in this kind of course.
Performance, Complexity, Debugging are they worth for an introductory course?
What else should be include in an introductory course?

Nevertheless, I hope these notes can at least raise the discussion on what to teach in a Computing Science curricula.


### Related Notes

Some notes that might be worth to mention:

* A letter from Dijkstra to the University of Texas saying his opinion on the move from Haskell to Java in the Introductory Programming Course:
[To the members of the Budget Council](http://www.cs.utexas.edu/users/EWD/OtherDocs/To%20the%20Budget%20Council%20concerning%20Haskell.pdf)

* [On the cruelty of really teaching computing science](http://www.cs.utexas.edu/~EWD/transcriptions/EWD10xx/EWD1036.html) also from Dijkstra.


### Acknowledgments

Thanks to Celeste Pérez Ben for her feedback and typos.

