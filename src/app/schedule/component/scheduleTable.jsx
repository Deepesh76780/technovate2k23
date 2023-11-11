"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const ScheduleTable = ({ data }) => {
    return (
        <Table className="text-slate-100 w-full border-2">
            <TableHeader >
                <TableRow className="font-cyberstar text-xl text-center">
                    <TableHead className="max-w-[100px] border-4">Time</TableHead>
                    <TableHead className="max-w-[100px] border-4">Event Name</TableHead>
                    <TableHead className="max-w-[100px] border-4">Venue</TableHead>
                    <TableHead className="max-w-[100px] border-4">About Event</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody >
                {
                    data.map((item, index) => {
                        return <React.Fragment key={index} className="w-full">
                            <TableRow className=" text-md text-center ">
                                <TableCell className="font-glitch border-4 ">{item.time}</TableCell>
                                <TableCell className="font-glitch border-4 ">{item.name}</TableCell>
                                <TableCell className="font-glitch border-4 ">{item.venue}</TableCell>
                                <TableCell className="font-glitch border-4 ">{item.about}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    })
                }
            </TableBody>
        </Table>

    )
}

export default ScheduleTable