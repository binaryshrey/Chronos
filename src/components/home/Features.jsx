import { ArrowPathIcon, ArchiveBoxIcon, GlobeAltIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Flexible',
    description: 'Set up in clicks, invite members with ease, add issues from any screen, customize how you track work, and see metrics contextually.',
    icon: ArchiveBoxIcon,
  },
  {
    name: 'Simple',
    description: 'Switch contexts intuitively, move around easily, and toggle features on and off as you go about your day. Say goodbye to rage-clicks forever.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Scalable',
    description: 'Quick-start with issue tracking, adopt Agile, Waterfall, or other frameworks in days, and manage all projects + teams in one workplace.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Open Source',
    description: 'Contribute to the codebase, fork the project, or build your own features on top of the platform. The sky is the limit with our open-source license.',
    icon: GlobeAltIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-violet-600">Build faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Everything you need for product management</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">From issue tracking to project management, we help teams build better products. Get started in minutes, and take control of your work with our powerful features.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
