import { Outlet } from 'react-router'
import Applicants from '../components/templates/Applicants'

const ApplicantsView = () => {
  return (
    <>
    <Applicants />
    <Outlet />
    </>
  )
}

export default ApplicantsView