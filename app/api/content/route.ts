const STATIC_DATA = [
    {
        title: "5 Tips for Better Time Management",
        slug: "5-tips-for-better-time-management",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "The Benefits of Yoga for Mental Health",
        slug: "benefits-of-yoga-for-mental-health",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "How to Improve Your Writing Skills",
        slug: "how-to-improve-your-writing-skills",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "10 Easy Recipes for a Quick Dinner",
        slug: "10-easy-recipes-for-quick-dinner",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "Why Traveling Alone Can Be Good for You",
        slug: "why-traveling-alone-can-be-good-for-you",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "How to Stay Motivated While Working From Home",
        slug: "how-to-stay-motivated-while-working-from-home",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "5 Simple Steps to a More Productive Day",
        slug: "5-simple-steps-to-more-productive-day",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "The Power of Positive Thinking",
        slug: "the-power-of-positive-thinking",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque. "
    },
    {
        title: "How to Create a Successful Online Business",
        slug: "how-to-create-a-successful-online-business",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula et lectus tristique placerat. Mauris ut metus massa. Integer gravida nulla eu justo interdum, sed accumsan enim scelerisque."
    },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();

    return NextResponse.json({
        session,
        data: STATIC_DATA,
    });
}