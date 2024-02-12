"use client";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const ScheduleTable = ({ data }) => {
  return (
    <Table className="text-slate-100 w-full shadow-inner rounded-xl h-full ">
      <TableBody>
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <TableRow className="md:text-md md:text-[1rem] text-[0.6rem] text-center">
                <TableCell className="font-glitch  border-l-2  border-t-2 border-b-2 border-amber-500">
                  {item.time}
                </TableCell>
                <TableCell className="font-glitch bg-amber-500  text-black">
                  {item.name}
                </TableCell>
                <TableCell className="font-glitch border-t-2 border-b-2 border-amber-500">
                  {item.venue}
                </TableCell>
              </TableRow>
            </React.Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ScheduleTable;
