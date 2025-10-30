import DeviceInfoTable from '@/components/DisplayInformation'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {


  return (
    <div className="min-h-screen ">
      <DeviceInfoTable/>
    </div>
  )
}
