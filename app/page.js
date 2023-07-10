"use client"

import Timeline  from './timeline.js'
import LeftPanel from './left-panel.js'
import RightPanel from './right-panel.js'

export default function Home() {

  return (
    <>
      <div>
        <LeftPanel />
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Center Content */}
            <Timeline />
          </div>
        </main>
      </div>

      <RightPanel/>
    </>
  )
}
