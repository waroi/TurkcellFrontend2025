import DashboardOrganism from "@/components/organism/DashboardOrganism/DashboardOrganism"
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

const DashboardPage = () => {
    return (
        <ProtectedRoute>
            <DashboardOrganism />
        </ProtectedRoute>
    )
}

export default DashboardPage