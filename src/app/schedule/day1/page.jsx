import React from 'react'
import ScheduleTable from "../component/scheduleTable"

const day1 = [
    {
        "time": "9:00",
        "name": "jai shree ram",
        "venue": "ayodhiya",
        "about": "mandir"
    },
    {
        "time": "9:15",
        "name": "Event 2",
        "venue": "Location 2",
        "about": "Description 2"
    },
    {
        "time": "9:30",
        "name": "Event 3",
        "venue": "Location 3",
        "about": "Description 3"
    },
    {
        "time": "9:45",
        "name": "Event 4",
        "venue": "Location 4",
        "about": "Description 4"
    },
    {
        "time": "10:00",
        "name": "Event 5",
        "venue": "Location 5",
        "about": "Description 5"
    },
    {
        "time": "10:15",
        "name": "Event 6",
        "venue": "Location 6",
        "about": "Description 6"
    },
    {
        "time": "10:30",
        "name": "Event 7",
        "venue": "Location 7",
        "about": "Description 7"
    },
    {
        "time": "10:45",
        "name": "Event 8",
        "venue": "Location 8",
        "about": "Description 8"
    },
    {
        "time": "11:00",
        "name": "Event 9",
        "venue": "Location 9",
        "about": "Description 9"
    },
    {
        "time": "11:15",
        "name": "Event 10",
        "venue": "Location 10",
        "about": "Description 10"
    }
]



const Page = () => {
    return (
        <ScheduleTable data={day1} />
    )
}

export default Page