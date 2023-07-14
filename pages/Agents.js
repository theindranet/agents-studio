import { FolderIcon, ChartPieIcon } from '@heroicons/react/20/solid'
import { myAgents, marketplaceAgents } from '@/test/data'

export default function Agents() {
  return (
    <>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          New Agent
      </button>
      {/* YOUR AGENTS */}
      <h2 className="text-gray-500 py-12">My Agents</h2>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {myAgents.map((person,i) => (
          <li
            key={`${person.name}-${i}`}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <FolderIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    Evals
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <ChartPieIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    Run
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* AGENTS IN MARKETPLACE */}
      <h2 className="text-gray-500 py-12">Popular Agents Near Me - San Francisco</h2>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {marketplaceAgents.map((person, i) => (
        <li key={`${person.name}-${i}`} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p>
            </div>
            <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={person.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href='#'
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <FolderIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  {person.runs} Runs
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href='#'
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <ChartPieIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Try Evals
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}