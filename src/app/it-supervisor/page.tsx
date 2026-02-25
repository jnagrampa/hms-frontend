"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { StatusBadge } from "./StatusBadge";
import ProgressBar from "./ProgressBar";
import LeftNavbar from "./LeftNavbar";
import SummaryCard from "./SummaryCard";

const ITSupervisorDashboardPage = () => {
  const user = {
    name: "John Doe",
    role: "IT Supervisor",
  };

  interface TicketObject {
    id: string;
    date: string;
    subject: string;
    progress: number;
    minutes: number;
    status: string;
    company: string;
    assignedTo: string;
  }

  const tickets: TicketObject[] = [
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No email access for employee Jose Rizal",
      progress: 0,
      minutes: 120,
      status: "Not Started",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No email access for employee Jose Rizal",
      progress: 0,
      minutes: 120,
      status: "Not Started",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No email access for employee Jose Rizal",
      progress: 0,
      minutes: 120,
      status: "Not Started",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No email access for employee Jose Rizal",
      progress: 0,
      minutes: 120,
      status: "Not Started",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No email access for employee Jose Rizal",
      progress: 0,
      minutes: 120,
      status: "Not Started",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No email access for employee Jose Rizal",
      progress: 0,
      minutes: 120,
      status: "Not Started",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No Internet Centria",
      progress: 35,
      minutes: 120,
      status: "In-progress",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No Internet Centria",
      progress: 35,
      minutes: 120,
      status: "In-progress",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No Internet Centria",
      progress: 35,
      minutes: 120,
      status: "In-progress",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No Internet Centria",
      progress: 35,
      minutes: 120,
      status: "In-progress",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No Internet Centria",
      progress: 35,
      minutes: 120,
      status: "In-progress",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "No Internet Centria",
      progress: 35,
      minutes: 120,
      status: "In-progress",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Pinkberry CCTV Not Working",
      progress: 75,
      minutes: 120,
      status: "Hold",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Pinkberry CCTV Not Working",
      progress: 75,
      minutes: 120,
      status: "Hold",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Pinkberry CCTV Not Working",
      progress: 75,
      minutes: 120,
      status: "Hold",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Pinkberry CCTV Not Working",
      progress: 75,
      minutes: 120,
      status: "Hold",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Pinkberry CCTV Not Working",
      progress: 75,
      minutes: 120,
      status: "Hold",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Pinkberry CCTV Not Working",
      progress: 75,
      minutes: 120,
      status: "Hold",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "GreenBelt POS System Down",
      progress: 120,
      minutes: 120,
      status: "Closed",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "GreenBelt POS System Down",
      progress: 120,
      minutes: 120,
      status: "Closed",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "GreenBelt POS System Down",
      progress: 120,
      minutes: 120,
      status: "Closed",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "GreenBelt POS System Down",
      progress: 120,
      minutes: 120,
      status: "Closed",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "GreenBelt POS System Down",
      progress: 120,
      minutes: 120,
      status: "Closed",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "GreenBelt POS System Down",
      progress: 120,
      minutes: 120,
      status: "Closed",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Slow Internet in Omnivores Inc.",
      progress: 120,
      minutes: 120,
      status: "Escalation",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Slow Internet in Omnivores Inc.",
      progress: 120,
      minutes: 120,
      status: "Escalation",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Slow Internet in Omnivores Inc.",
      progress: 120,
      minutes: 120,
      status: "Escalation",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Slow Internet in Omnivores Inc.",
      progress: 120,
      minutes: 120,
      status: "Escalation",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Slow Internet in Omnivores Inc.",
      progress: 120,
      minutes: 120,
      status: "Escalation",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
    {
      id: "13383",
      date: "Feb 16, 2026",
      subject: "Slow Internet in Omnivores Inc.",
      progress: 120,
      minutes: 120,
      status: "Escalation",
      company: "Unilogix Inc.",
      assignedTo: "Kevin Filio",
    },
  ];

  const searchParams = useSearchParams();
  const [filtered, setFiltered] = useState<TicketObject[]>(tickets);

  useEffect(() => {
    const status = searchParams.get("status");
    if (status) {
      setFiltered(
        tickets.filter(
          (item) => item.status.toLowerCase() === status.toLowerCase(),
        ),
      );
    } else {
      setFiltered(tickets);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen w-full bg-gray-50 grid grid-rows-[auto_1fr]">
      <header className="w-full border-b flex items-center justify-between py-1 px-4 sm:px-10">
        <Link href="/" className="font-semibold text-xl">
          HMS
        </Link>
        <UserDropdown name={user.name} role={user.role} />
      </header>
      <div className="w-full grid grid-cols-[50px_1fr] sm:grid-cols-[150px_1fr] xl:grid-cols-[200px_1fr]">
        <LeftNavbar />
        {/* Main */}
        <main className="w-full p-6">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {/* Summary Statistics Section */}
            <SummaryCard count={1} text="Not Started" />
            <SummaryCard count={12} text="In-progress" />
            <SummaryCard count={19} text="Hold" />
            <SummaryCard count={2} text="Closed" />
            <SummaryCard count={34} text="Escalation" />
            <div className="sm:hidden"></div>
            {/* Search Bar Section */}
            <div className="my-4 col-span-2 sm:col-span-3 lg:col-span-5 flex justify-center">
              <div className="w-full max-w-3xl">
                <Field>
                  <FieldLabel
                    htmlFor="input-button-group"
                    className="block text-center text-lg"
                  >
                    Open Case Detail
                  </FieldLabel>
                  <div className="flex">
                    <Input
                      id="input-button-group"
                      placeholder="Enter case number, subject, or company..."
                      className="rounded-r-none"
                    />
                    <Button className="rounded-l-none">
                      <Search size={20} />
                    </Button>
                  </div>
                </Field>
              </div>
            </div>
            {/* Ticket Queue Table */}
            <div className="hidden lg:block lg:col-span-5">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Case Number</TableHead>
                    <TableHead>Date Created</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Minutes</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Assigned To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((ticket, key) => (
                    <TableRow key={key}>
                      <TableCell>{ticket.id}</TableCell>
                      <TableCell>{ticket.date}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <ProgressBar value={ticket.progress} />
                      </TableCell>
                      <TableCell>{ticket.minutes} mins</TableCell>
                      <TableCell>
                        <StatusBadge status={ticket.status} />
                      </TableCell>
                      <TableCell>{ticket.company}</TableCell>
                      <TableCell>{ticket.assignedTo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* Mobile Cards */}
            <div className="lg:hidden col-span-2 sm:col-span-3 md:grid md:grid-cols-2 md:gap-2 w-full">
              {filtered.map((ticket, key) => (
                <div
                  key={key}
                  className="rounded-lg shadow-sm p-4 w-full flex flex-col items-center justify-center my-2"
                >
                  <span className="font-semibold">#{ticket.id}</span>
                  <StatusBadge status={ticket.status} />

                  <p className="text-sm text-center">{ticket.subject}</p>
                  <div className="text-xs text-muted-foreground text-center">
                    {ticket.company}
                  </div>
                  <div className="text-center">
                    <ProgressBar value={ticket.progress} />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 sm:col-span-3 lg:col-span-5">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ITSupervisorDashboardPage;
