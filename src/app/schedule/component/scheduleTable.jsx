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
        <Table className="text-slate-100 w-full shadow-inner rounded-xl">
            <TableBody>
                {
                    data.map((item, index) => {
                        return <React.Fragment key={index}>
                            <div className='h-2'></div>
                            <TableRow className=" text-md text-center">
                                <TableCell className="font-glitch  border-l-2  border-t-2 border-b-2 border-amber-500">{item.time}</TableCell>
                                <TableCell className="font-glitch bg-amber-500  text-black">{item.name}</TableCell>
                                <TableCell className="font-glitch border-t-2 border-b-2 border-amber-500">{item.venue}</TableCell>
                                <TableCell className="font-glitch   bg-amber-500 text-black">{item.about}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    })
                }
            </TableBody>
        </Table>

    )
}

export default ScheduleTable