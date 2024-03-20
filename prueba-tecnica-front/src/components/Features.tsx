import Image from 'next/image'
import Badge from './Badge'
import FeaturesIntegrations from './FeaturesIntegrations'


import Notion from '../../public/assets/notion.svg'
import Slack from '../../public/assets/Slack.svg'
import Drive from '../../public/assets/Drive.svg'
import Intercom from '../../public/assets/Intercom.svg'
import Jira from '../../public/assets/Jira.svg'
import Dropbox from '../../public/assets/Dropbox.svg'

export default function Features() {

    const features = [
        {
            icon: Notion,
            tittle: 'Notion integration',
            description: 'Work faster and smarter by integrating directly with Notion, right in the app.',
            button: 'View integration'
        },
        {
            icon: Slack,
            tittle: 'Slack integration',
            description: 'Work faster and smarter by integrating directly with Slack, right in the app.',
            button: 'View integration'
        },
        {
            icon: Drive,
            tittle: 'Google Drive integration',
            description: 'Work faster and smarter by integrating directly with Notion, right in the app.',
            button: 'View integration'
        },
        {
            icon: Intercom,
            tittle: 'Intercom integration',
            description: 'Work faster and smarter by integrating directly with Notion, right in the app.',
            button: 'View integration'
        },
        {
            icon: Jira,
            tittle: 'Jira integration',
            description: 'Work faster and smarter by integrating directly with Notion, right in the app.',
            button: 'View integration'
        },
        {
            icon: Dropbox,
            tittle: 'Dropbox integration',
            description: 'Work faster and smarter by integrating directly with Notion, right in the app.',
            button: 'View integration'
        },
    ]


    return (
        <div className="flex flex-col pb-24 gap-16 lg:items-center">

            <div className="container px-4 flex flex-col gap-4 lg:w-3/4 lg:px-8 lg:gap-5">
                <div className="flex flex-col items-center gap-4">
                    <Badge tittle={'Integration'} />
                    <h1 className="text-[#101828] text-3xl font-semibold text-center lg:text-4xl">Get more value from your tools</h1>
                </div>
                <p className="text-[#475467] text-lg text-center lg:text-xl">
                    Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.
                </p>
            </div>

            <FeaturesIntegrations features={features} /> 

        </div>
    )
}