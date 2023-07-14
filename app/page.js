"use client"

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import {
    ChartPieIcon,
    FolderIcon,
    UsersIcon,
    HomeIcon,
  } from '@heroicons/react/24/outline'
import LeftPanel from './left-panel.js'
import RightPanel from './right-panel.js'
import About from '@/pages/About.js'
import Agents from '../pages/Agents.js'
import AgentBuilder from '../pages/AgentBuilder.js'
import Runs from '../pages/Runs.js'
import Evals from '../pages/Evals.js'

const navigation = [
    { name: 'About', href: '/', icon: HomeIcon, current: true, component: About },
    { name: 'Agents', href: '/agents', icon: UsersIcon, current: false, component: Agents },
    { name: 'Agent Builder', href: '/agent-builder', icon: UsersIcon, current: false, component: AgentBuilder },
    { name: 'Runs', href: '/runs', icon: FolderIcon, current: false, component: Runs },
    { name: 'Evals', href: '/evals', icon: ChartPieIcon, current: false, component: Evals },
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
