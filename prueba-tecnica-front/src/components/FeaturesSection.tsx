import Features from "./Features"
import Badge from "./Badge"
import Inbox from '../../public/assets/InboxesIcon.svg'
import Answer from '../../public/assets/AnswersIcon.svg'
import Report from '../../public/assets/ReportsIcon.svg'

export default function FeatureSection() {

    const features = [
        {
            icon: Inbox,
            tittle: 'Share team inboxes',
            description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
            button: 'Learn more'
        },
        {
            icon: Answer,
            tittle: 'Deliver instant answers',
            description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
            button: 'Learn more'
        },
        {
            icon: Report,
            tittle: 'Manage your team with reports',
            description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
            button: 'Learn more'
        },
    ]

    return (
        <div className="flex flex-col gap-12 py-16 lg:pb-24 lg:pt-0 lg:items-center">
            <div className="flex flex-col gap-4 px-4 lg:w-3/4 lg:px-8 lg:gap-5">
                <div className="flex flex-col gap-4 items-center">
                    <Badge tittle="Features" />
                    <h1 className="text-[#101828] text-3xl font-semibold text-center lg:9">
                        Cutting-edge features for advanced analytics
                    </h1>
                </div>
                <p className="text-[#475467] text-lg text-center lg:text-xl">
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
            <Features features={features} />
        </div>
    )
}