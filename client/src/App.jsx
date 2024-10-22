import "./App.css";
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import SignIn from "./auth/SignIn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admindashboard from "./pages/admin-dashboard/Admindashboard";
import AdminSummary from "./pages/admin-dashboard/AdminSummary";
import Employee from "./pages/admin-dashboard/Employee";
import LeaveBoard from "./pages/admin-dashboard/LeaveBoard";
import PayRoll from "./pages/admin-dashboard/PayRoll";
import TaskBoard from "./pages/admin-dashboard/TaskBoard";
import Settings from "./pages/admin-dashboard/Settings";
import Professional from "./pages/admin-dashboard/Professional";
import AccountAccess from "./pages/admin-dashboard/AccountAccess";
import Documents from "./pages/admin-dashboard/Documents";
import PersonalInfo from "./pages/admin-dashboard/PersonalInfo";
import Teams from "./pages/admin-dashboard/Teams";
import NewTeams from "./pages/admin-dashboard/NewTeams";
import EditTeams from "./pages/admin-dashboard/EditTeams";
import Dashboard from "./pages/employee-dashboard/Dashboard";
import EmployeeDashboard from "./pages/employee-dashboard/EmployeeDashboard";
import EmployeeTaskboard from "./pages/employee-dashboard/EmployeeTaskboard";
import EmployeeLeaveboard from "./pages/employee-dashboard/EmployeeLeaveboard";
import EmployeeSettings from "./pages/employee-dashboard/EmployeeSettings";
import { Toaster } from "react-hot-toast";
import CreateNewTask from "./pages/admin-dashboard/modals/CreateNewTask";
import PrivateRoute from "./utils/PrivateRoute";
import RoleBasedRoute from "./utils/RoleBasedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/forgetpassword" element={<ForgetPassword />} />
          <Route
            path="/auth/resetpassword/:resetToken"
            element={<ResetPassword />}
          />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                {" "}
                <RoleBasedRoute requiredRole={["admin", "super-admin"]}>
                  <Admindashboard />
                </RoleBasedRoute>{" "}
              </PrivateRoute>
            }
          >
            <Route path="" element={<AdminSummary />} />
            <Route path="/admin-dashboard/employees" element={<Employee />}>
              <Route
                path="/admin-dashboard/employees/personal-info"
                element={<PersonalInfo />}
              />
              <Route
                path="/admin-dashboard/employees/personal-info/professional"
                element={<Professional />}
              />
              <Route
                path="/admin-dashboard/employees/personal-info/account-access"
                element={<AccountAccess />}
              />
              <Route
                path="/admin-dashboard/employees/personal-info/documents"
                element={<Documents />}
              />
              <Route
                path="/admin-dashboard/employees/teams"
                element={<Teams />}
              >
                <Route
                  path="/admin-dashboard/employees/teams/new-teams"
                  element={<NewTeams />}
                />
                <Route
                  path="/admin-dashboard/employees/teams/edit-teams"
                  element={<EditTeams />}
                />
              </Route>
            </Route>

            <Route
              path="/admin-dashboard/leaveboard"
              element={<LeaveBoard />}
            />
            <Route path="/admin-dashboard/taskboard" element={<TaskBoard />} />
            <Route
              path="/admin-dashboard/taskboard/new-task"
              element={<CreateNewTask />}
            />

            <Route path="/admin-dashboard/payroll" element={<PayRoll />} />
            <Route path="/admin-dashboard/settings" element={<Settings />} />
          </Route>
          <Route path="/employee-dashboard" element={<Dashboard />}>
            <Route
              path="/employee-dashboard/dashboard"
              element={<EmployeeDashboard />}
            />
            <Route
              path="/employee-dashboard/taskboard"
              element={<EmployeeTaskboard />}
            />
            <Route
              path="/employee-dashboard/leaveboard"
              element={<EmployeeLeaveboard />}
            />
            <Route
              path="/employee-dashboard/settings"
              element={<EmployeeSettings />}
            />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
