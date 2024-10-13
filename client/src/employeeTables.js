import employeedashboard1 from "./assets/employeedashboard1.svg"
import employeedashboard2 from "./assets/employeedasboard2.svg"
import employeedashboard3 from "./assets/employeedasboard3.svg"
import employeedashboard4 from "./assets/employeedashboard4.svg"
import dashBoardimg from "./assets/dashboard.svg"
import taskBoardImg from "./assets/Taskboard.svg"
import leaveBoardImg from "./assets/Leaveboard.svg"
import settingsImg from "./assets/settings.svg"





export const employeedashboard = [
    {
        id: 1,
        name: "Planned Tasks",
        number: 24,
        Image: employeedashboard1
    },
    {
        id:2,
        name: "In Progress",
        number: 107,
        Image: employeedashboard2
    },
    {
        id:3,
        name: "Remaining Leaves",
        number: 15,
        Image: employeedashboard3
    }
]

export const employeeTaskboard = [
    {
        id: 1,
        name: "Planned Tasks",
        number: 24,
        Image: employeedashboard1
    },
    {
        id:2,
        name: "In Progress",
        number: 107,
        Image: employeedashboard2
    },
    {
        id:3,
        name: "Remaining Leaves",
        number: 15,
        Image: employeedashboard4
    }
]

export const employeelist = [
    {
      id: 1,
      name: "Annual Leave Remain",
      number: 12,
      integer:"/20",
    },
    {
      id: 2,
      name: "Sick Leave Remain",
      number: 5,
      integer:"/10", 
    },
    {
      id: 3,
      name: "Sick Leave Remain",
      number: 5,
      integer:"/10"
    }
   
  ];

  export const Activity = [
    {
      id: 1,
      activity: "New Task Assigned",
      description: "Website Project Update On Slack",
      date: "Sep 21, 2024",
      status: "Pending",
    },
    {
        id: 2,
        activity: "Leave Request Approval",
        description: "Leave approved for Sep 30 - Oct",
        date: "Sep 21, 2024",
        status: "In Progress",
    },
    {
        id: 3,
        activity: "Leave Request",
        description: "Leave requested for Sep 30 - Oct",
        date: "Sep 21, 2024",
        status: "In Progress",
    },
    {
        id: 4,
        activity: "New Task Assigned",
        description: "Website Project Update On Slack",
        date: "Sep 21, 2024",
        status: "Pending",
    },
    {
        id: 5,
        activity: "New Task Assigned",
        description: "Website Project Update On Slack",
        date: "Sep 21, 2024",
        status: "Pending",
    },
    {
        id: 6,
        activity: "Leave Request Approval",
        description: "Leave requested for Sep 30 - Oct",
        date: "Sep 21, 2024",
        status: "Approved",
    },
    {
        id: 7,
        activity: "Leave Request Declined",
        description: "Leave requested for Sep 30 - Oct",
        date: "Sep 21, 2024",
        status: "In Progress",
    },
    {
        id: 8,
        activity: "Leave Request",
        description: "Leave requested for Sep 30 - Oct",
        date: "Sep 21, 2024",
        status: "In Progress",
    },
    {
        id: 9,
        activity: "New Task Assigned",
        description: "Website Project Update On Slack",
        date: "Sep 21, 2024",
        status: "Approved",
    },
    {
        id: 10,
        activity: "New Task Assigned",
        description: "Website Project Update On Slack",
        date: "Sep 21, 2024",
        status: "Pending",
    },
  ];
  
  export const LeaveHistory = [
    {
      id: 1,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Pending",
    },
    {
      id: 2,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Pending",
    },
    {
      id: 3,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Approved",
    },
    {
      id: 4,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Approved",
    },
    {
      id: 5,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Approved",
    },
    {
      id: 6,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Declined",
    },
    {
      id: 7,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Pending",
    },
    {
      id: 8,
      leavetype: "Casual Leave",
      startdate: "03 Nov 2023",
      enddate: "14 Nov 2024",
      status: "Declined",
    },
  ]

  export const employeeBarLinks = [
    {
        id:1,
        Icon: dashBoardimg,
        name:"Dashboard",
        path:"/employee-dashboard/dashboard"
    } ,
    {
        id:3,
        Icon:taskBoardImg,
        name:"TaskBoard",
        path:"/employee-dashboard/taskboard"
    } ,
    {
        id:4,
        Icon:leaveBoardImg,
        name:"LeaveBoard",
        path:"/employee-dashboard/leaveboard"
    } ,
    {
        id:6,
        Icon:settingsImg,
        name:"Settings",
        path:"/employee-dashboard/settings"
    } 
]