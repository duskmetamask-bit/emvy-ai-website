# EMVY — Nurture Email Sequence
*For playbook downloaders who don't book a discovery call*
*Send via Resend once API key is available*

---

## Setup

| Field | Value |
|-------|-------|
| Trigger | Playbook delivered, no discovery call booked within 3 days |
| Send Day | Day 3 after download |
| Sequence | 3 emails, every 4 days |
| Subject line testing | Test 2 variants per email |

---

## Email 1 — Day 3
**Subject A:** That playbook — what stood out?
**Subject B:** One thing from that playbook worth trying today

---

Hey [FIRST_NAME],

Got your inbox sorted — here's the playbook.

Skimmed it yet? If you haven't, the highest-value sections are:
- The decision frameworks (Prompt #17, #34)
- The outreach templates if you're doing any kind of lead gen

One pattern we see over and over: businesses get stuck not because they lack ideas, but because they never pick one and commit to it fully.

If you want, reply and tell me the one thing from the playbook you're most likely to actually use this week.

— Dusk
Founder, EMVY

---

## Email 2 — Day 7
**Subject A:** Re: That playbook — what stood out?
**Subject B:** The thing most people miss in AI adoption

---

Hey [FIRST_NAME],

Following up.

Here's what we see happening with most people who download guides like this:

Week 1 — Excited, read everything
Week 2 — Try a couple things
Week 3 — Drift back to old habits

The difference between people who actually change how they work vs. those who just collect information usually comes down to one conversation.

A 15-minute call with us usually surfaces 2–3 things worth thousands of dollars in saved time per month. No cost, no commitment.

Worth booking one before the momentum fades?

→ [BOOKING_LINK]

— Dusk

---

## Email 3 — Day 11
**Subject A:** Last note from me on this
**Subject B:** [MUTUAL CONNECTION], one thing worth 15 min

---

Hey [FIRST_NAME],

I'll leave you alone after this one.

The playbook is yours — use it however makes sense for your situation. If it helped even a little, that's a win.

If not, no hard feelings.

But if you're sitting on something you know could be automated or AI-ified but haven't had the time or clarity to act on it — that's what our free call is for.

We do the thinking. You decide what to do with it.

→ [BOOKING_LINK]

Either way — good luck.

— Dusk

---

## Personalisation Tokens

| Token | Source |
|-------|--------|
| `[FIRST_NAME]` | First name from sign-up form |
| `[BOOKING_LINK]` | https://emvy-booking.vercel.app |
| `[PLAYBOOK_LINK]` | Sent in welcome email |

---

## Compliance Notes

- Unsubscribes: Auto-suppress from sequence (handle in Resend)
- No purchase required: Sequence exists to educate and qualify, not pressure
- If they reply: Pause sequence, respond personally
- If they book: Archive remaining emails, stop sequence
