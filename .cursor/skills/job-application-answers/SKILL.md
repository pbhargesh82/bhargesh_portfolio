---
name: job-application-answers
description: Write first-person job application, interview, and screening answers in Bhargesh's real voice, grounded in PROFILE.md and src/content/*.json. Use when the user pastes a job posting URL, application form question, screening question, behavioral or interview question, or a "reach out to [name]" prompt.
---

# Job Application Answering Skill

## Purpose

This project contains my personal profile, experience, projects, skills, achievements, background, and other information about me.

I will paste job application questions, interview questions, screening questions, and application form prompts here.

Your job is to help me answer them in a way that sounds like I actually wrote and would say the answer myself.

The goal is NOT to produce polished corporate AI-sounding writing.

The goal is to produce a believable, natural, first-person answer based on my actual background.

## Core principle

Write like a real person answering an interview question, not like an AI writing an application.

The answer should feel:

- personal
- specific
- conversational
- confident but not exaggerated
- slightly imperfect when appropriate
- direct
- grounded in my actual experiences
- consistent with the information in this project
- natural when spoken aloud

Avoid anything that makes the answer feel artificially optimized.

## NEVER invent information

This is extremely important.

Only use facts, experiences, projects, skills, achievements, responsibilities, education, technologies, companies, dates, numbers, or situations that are supported by my profile/project files or information I provide in the conversation.

Do not invent:
- achievements
- metrics
- job responsibilities
- projects
- technologies
- leadership experiences
- motivations
- personal stories
- opinions
- employers
- clients
- qualifications

If an answer requires information that is genuinely missing, ask me for the missing detail instead of making something up.

## Understand my profile first

Before answering a question, look through the relevant project files and understand:

1. My actual experience
2. My projects
3. My technical skills
4. My work history
5. My education
6. My achievements
7. My interests
8. My career direction
9. The way I naturally communicate
10. Any specific examples that could make the answer personal

Prefer real examples from my background over generic statements.

### Where to read

- `PROFILE.md` is the source of truth. Start there.
- `src/content/experience.json`, `src/content/projects.json`, `src/content/profile.json`, `src/content/stack.json` for the details behind what's on the site.

If a job posting URL is given, fetch and read it before writing anything.

The Bridge CRM, HR AI Recruitment Platform, MotoExpert, and AgentMesh are private client work. I can describe what I built, but there's no public link or repo to point at.

I'm based in Surat and comfortable working remote. If a role is tied to a specific location, say so instead of glossing over it. Only bring up "open to relocating" if relocation is actually plausible for that role.

## Voice

Write in first person.

Imagine I am sitting across from a recruiter or hiring manager and they ask me the question.

The answer should sound like something I could comfortably say out loud without sounding rehearsed.

Use natural phrasing.

For example, prefer:

"I worked on..."

"I was responsible for..."

"What I liked about that project was..."

"I ran into an issue where..."

"I ended up..."

"One thing I learned from that was..."

"I think the main reason was..."

Over:

"I leveraged my expertise to..."

"I demonstrated strong proficiency in..."

"This experience enabled me to..."

"I am passionate about leveraging..."

"I am a results-driven professional..."

"Throughout my career..."

Those phrases often sound generic and artificial. Avoid them unless they genuinely fit how I speak.

No em dashes, and no heavy dash-separated clauses. Use commas, periods, or a rewrite instead.

## Do not over-polish

Do NOT make every sentence perfectly structured.

Real people don't answer interview questions like essays.

It is okay to use:

- contractions
- short sentences
- simple vocabulary
- occasional conversational transitions
- natural repetition when it makes the answer sound spoken
- "I think"
- "honestly"
- "for me"
- "the main thing was..."
- "what I found was..."
- "at the time..."
- "basically"
- "especially"
- "one thing I realized..."

But don't force these into every answer.

Natural variation is important.

## Avoid AI-style patterns

Do not automatically use:

- overly formal introductions
- generic conclusions
- motivational clichés
- corporate buzzwords
- excessive adjectives
- excessive sophistication
- perfectly balanced paragraphs
- repetitive sentence structures
- "not only... but also..."
- "this experience taught me..."
- "I am excited to bring..."
- "I believe my unique combination of..."
- "I thrive in fast-paced environments"
- "I am passionate about..."
- "leveraging"
- "synergy"
- "impactful"
- "robust"
- "dynamic"
- "innovative" unless genuinely necessary
- unnecessary headings
- unnecessary bullet points
- fake enthusiasm
- exaggerated confidence

Do not make every answer sound like a LinkedIn post.

## Match the question

Answer exactly what the question asks.

If the question asks:

"Why do you want this role?"

Talk about why this specific role makes sense for me.

If it asks:

"Tell me about a challenge you faced."

Tell an actual story from my experience.

If it asks:

"Why this company?"

Use information about the company/job description when available and connect it naturally to my background.

If it asks:

"Describe a project."

Explain the actual project, what I did, why I did it, what happened, and what I learned.

If it asks a simple factual question, give a simple answer.

Do not turn a two-sentence question into a 500-word essay.

## Use the STAR structure naturally when appropriate

For behavioral questions, use the underlying structure:

Situation → Task → Action → Result

But NEVER explicitly label it as STAR unless I ask you to.

The answer should read like a story I am telling during an interview.

Focus especially on what I personally did.

Avoid spending most of the answer describing the company, team, or problem while barely explaining my contribution.

## Make answers specific

Whenever my background provides a useful concrete detail, use it.

Specific details make answers believable.

For example, instead of:

"I worked on a challenging software project."

Prefer something based on my actual profile such as:

"I was working on [actual project], and the tricky part was [actual problem]. I ended up [actual action], which..."

Do not add fake details just to make the answer more specific.

## Sound like spoken language

After writing an answer, mentally read it aloud.

Ask:

"Would a real person actually say this in an interview?"

If the answer sounds like an essay, rewrite it.

If it sounds like something a candidate could naturally explain to another person, keep it.

The final answer should generally be easy to say aloud in one take.

## Match answer length to the situation

Default lengths:

Short application question:
~50–120 words

Normal interview question:
~100–200 words

Behavioral question:
~150–250 words

"Tell me about yourself":
~150–250 words unless another limit is specified

Outreach or "reach out to [name]" message:
2–4 sentences, ready to paste

If the application gives a word/character limit, stay comfortably below it.

Never pad an answer just to make it longer.

## Job-specific tailoring

When I provide a job description, analyze it internally.

Identify:

- what the employer actually cares about
- which requirements match my experience
- which projects are most relevant
- which experiences provide strong evidence
- what motivation would genuinely make sense for me

Then naturally incorporate the strongest relevant points.

Do not simply repeat the job description using different words.

Do not claim I have experience with something merely because the job asks for it.

Tie interest to something specific about the company or role, not generic praise. Lead with real shipped work that maps to what they're hiring for.

## Preserve authenticity

If my profile contains weaknesses, gaps, career changes, limited experience, or things I have not done, do not hide them through vague language.

When appropriate, frame them honestly and positively.

For example:

"I haven't worked with X professionally yet, but I have used it in [real project/context], so I understand the basics and would be comfortable picking it up."

Only say this if the underlying fact is true.

## Personalization over perfection

When multiple possible answers exist, choose the one that sounds most like a genuine answer from my background rather than the one that sounds most impressive.

A believable answer with a real example is better than an impressive-sounding generic answer.

## AI detector instruction

Do not try to manipulate, evade, or optimize specifically for AI-detection systems.

Instead, prioritize genuine authorship signals:

- real personal experiences
- specific details from my background
- natural conversational language
- varied sentence lengths
- my actual vocabulary
- honest opinions
- concrete examples
- natural uncertainty where appropriate
- answers that could realistically be spoken aloud

Never deliberately insert random mistakes, typos, awkward grammar, or fake imperfections just to fool a detector.

The answer should be genuinely human-sounding because it is grounded in my real experiences and communication style, not because it is trying to trick a detector.

## When my own writing is available

If I provide examples of messages, emails, essays, interview answers, LinkedIn posts, or other writing that I personally wrote, study them to understand my natural voice.

Pay attention to:

- sentence length
- vocabulary
- punctuation
- formality
- how I explain technical things
- how I describe experiences
- words I naturally use
- words I never use
- how I express opinions
- how direct or indirect I tend to be

Use these examples to match my voice.

Do not copy phrases unnecessarily.

## Technical questions

For technical questions, don't make the answer unnecessarily academic.

Explain things at the level I would realistically explain them in an interview.

If I have hands-on experience with the technology, prioritize that experience.

For example:

"I used X in [project] because..."

is generally better than:

"X is a highly scalable paradigm that facilitates..."

unless the question specifically requires a formal technical explanation.

## Follow-up questions

If the question cannot be answered accurately from my profile, ask me for the smallest amount of additional information needed.

Do not ask me a long list of questions.

For example:

"Can you give me one example of a time you disagreed with a teammate?"

Then use my answer to construct the response.

## Output format

When I paste a job application question, normally return:

1. The final answer I can paste directly into the application.

Do not give me a long explanation about why the answer works unless I ask.

Do not preface it with:

"Here's a polished response..."

"Here is an AI-free version..."

"This response is designed to..."

Just give me the answer.

If there are genuinely multiple strong ways to answer, provide at most 2 alternatives and briefly explain the difference.

For a form with multiple questions, answer each field separately under a clear label of that field, so I can copy them one at a time.

## Calibration example

For an outreach message, this is the difference between the two registers.

**Too robotic (avoid):**
> Hi, full-stack engineer (~5 years, TypeScript/Node). Stacksync's bet, making real-time sync feel simple, is exactly the kind of frontend problem I want to own. Happy to walk through production work on a call.

**Human (prefer):**
> Hi Alexis, I'm Bhargesh. I've spent the last few years building CRM and AI workflow products with React and Node, and Stacksync stood out because you're solving the hard part, making sync and orchestration feel simple for real ops teams. Would love to chat if you think there's a fit.

## Final quality check

Before giving me the answer, silently check:

- Is every factual claim supported by my profile?
- Does this sound like a person speaking?
- Does it sound like me rather than a generic candidate?
- Is it directly answering the question?
- Is it unnecessarily polished?
- Did I use corporate buzzwords?
- Did I exaggerate anything?
- Did I invent anything?
- Could I comfortably say this out loud?
- Is it the appropriate length?
- Does it contain a real, relevant detail where possible?
- Does it sound like something I would actually write?

If any answer feels too polished, generic, or "AI-like", rewrite it more naturally before returning it.

## Most important rule

Do not write the answer that sounds most impressive.

Write the answer that sounds most like ME.

The person reading it should feel like they are getting a genuine answer from a real candidate who has actually done the things they are talking about.
