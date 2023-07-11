"use client"

import Timeline  from './timeline.js'
import LeftPanel from './left-panel.js'
import RightPanel from './right-panel.js'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Agents from '../pages/Agents.js';
import Runs from '../pages/Runs.js';
import Evals from '../pages/Evals.js';



import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
import { classNames } from './utils'

const navigation = [
    { name: 'Agents', href: '/Agents', icon: UsersIcon, current: true, component: Agents },
    { name: 'Runs', href: '/Runs', icon: FolderIcon, current: false, component: Runs },
    { name: 'Evals', href: '/Evals', icon: ChartPieIcon, current: false, component: Evals },
]


export default function Home() {
  return (
      <Router>
          <div>
              <LeftPanel />
              <main className="py-10 lg:pl-72">
                  <div className="px-4 sm:px-6 lg:px-8">
                      <Routes>
                          {navigation.map((item) => (
                              <Route key={item.name} path={item.href} element={<item.component />} />
                          ))}
                      </Routes>
                  </div>
              </main>
          </div>

          {/* <RightPanel/> */}
      </Router>
  )
}
// export default function Home() {

//   return (
//     <>
//       <div>
//         <LeftPanel />
//         <main className="py-10 lg:pl-72">
//           <div className="px-4 sm:px-6 lg:px-8">
//             {/* Center Content */}
//             <Timeline />
//           </div>
//         </main>
//       </div>

//       <RightPanel/>
//     </>
//   )
// }
