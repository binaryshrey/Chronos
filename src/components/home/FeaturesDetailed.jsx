import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AlignHorizontalCenterOutlinedIcon from '@mui/icons-material/AlignHorizontalCenterOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';



const features = [
  {
    name: 'Kanban boards',
    description: 'Visual tool for tracking tasks through customizable workflow stages.',
    icon: DashboardOutlinedIcon,
  },
  {
    name: 'Keep teams aligned',
    description: 'Ensures team members stay coordinated with shared goals and updates.', 
    icon: AlignHorizontalCenterOutlinedIcon,
  },
  {
    name: 'Drag and drop',
    description: 'Easily move tasks between stages using simple drag-and-drop functionality.',
    icon: DragIndicatorOutlinedIcon,
  },
  {
    name: 'Advanced security.',
    description: 'Protects project data with enhanced security measures and access controls.',
    icon: SecurityOutlinedIcon,
  },
  {
    name: 'Project updates',
    description: 'Provides real-time updates on project status and task progress.',
    icon: TipsAndUpdatesOutlinedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Automatically saves project data to secure backups for data protection.',
    icon: StorageOutlinedIcon,
  },
]

const FeaturesDetailed = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Add trackable items easily from anywhere in Chronos.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Adding Issues is two clicks away from anywhere in Chronos. Track issues on any layout and adjust dates, assign to several people, and change properties on the fly.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default FeaturesDetailed