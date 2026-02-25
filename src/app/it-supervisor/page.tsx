import Link from "next/link";

import { Home, FileText, Settings, LogOut, Sun, Moon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UserDropdown from "./user-dropdown";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { ButtonGroup } from "@/components/ui/button-group";
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
import { StatusBadge } from "./status-badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProgressBar from "./progress-bar";

const ITSupervisorDashboardPage = async ({
  searchParams,
}: {
  searchParams: { status?: string };
}) => {
  const activeStatus = searchParams?.status ?? "";

  const user = {
    name: "John Doe",
    role: "IT Supervisor",
  };

  const tickets = [
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

  const filteredTickets =
    activeStatus === ""
      ? tickets
      : tickets.filter(
          (ticket) =>
            ticket.status.toLowerCase() === activeStatus.toLowerCase(),
        );

  return (
    <div className="h-dvh w-full bg-gray-50 grid grid-rows-[auto_1fr]">
      <header className="border-b flex items-center justify-between py-1 px-2 sm:px-10">
        <Link href="/" className="font-semibold text-xl">
          HMS
        </Link>
        <UserDropdown name={user.name} role={user.role} />
      </header>
      <div className="grid grid-cols-[250px_1fr] min-h-0">
        {/* Sidebar */}
        <nav className="border-r p-4 flex flex-col gap-6">
          <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
            <Home size={20} />
            <span>Home</span>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
            <FileText size={20} />
            <span>Ticket Report</span>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
            <Settings size={20} />
            <span>Settings</span>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <LogOut size={20} />
            <span>Sign Out</span>
          </div>
        </nav>
        {/* Main */}
        <main className="overflow-y-auto min-h-0 p-6">
          <div className="grid grid-cols-5 gap-2">
            {/* Summary Statistics */}
            <Link href="?status=not started">
              <Card className="w-[80%] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                <CardContent className="text-center text-4xl pb-0">
                  12
                </CardContent>
                <CardTitle className="text-center text-lg pt-0">
                  Not Started
                </CardTitle>
              </Card>
            </Link>
            <Link href="?status=in-progress">
              <Card className="w-[80%] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                <CardContent className="text-center text-4xl pb-0">
                  8
                </CardContent>
                <CardTitle className="text-center text-lg pt-0">Open</CardTitle>
              </Card>
            </Link>
            <Link href="?status=hold">
              <Card className="w-[80%] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                <CardContent className="text-center text-4xl pb-0">
                  5
                </CardContent>
                <CardTitle className="text-center text-lg pt-0">Hold</CardTitle>
              </Card>
            </Link>
            <Link href="?status=closed">
              <Card className="w-[80%] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                <CardContent className="text-center text-4xl pb-0">
                  19
                </CardContent>
                <CardTitle className="text-center text-lg pt-0">
                  Closed
                </CardTitle>
              </Card>
            </Link>
            <Link href="?status=escalation">
              <Card className="w-[80%] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                <CardContent className="text-center text-4xl pb-0">
                  3
                </CardContent>
                <CardTitle className="text-center text-lg pt-0">
                  Escalation
                </CardTitle>
              </Card>
            </Link>
            {/* Search Bar Section */}
            <div className="col-span-5 flex justify-center p-2">
              <Field className="w-[80%]">
                <FieldLabel htmlFor="input-button-group" className="text-lg">
                  {activeStatus.charAt(0).toUpperCase() + activeStatus.slice(1)}{" "}
                  Case Detail
                </FieldLabel>
                <ButtonGroup>
                  <Input
                    id="input-button-group"
                    placeholder="Enter case number, subject, or company"
                  />
                  <Button>Search</Button>
                </ButtonGroup>
              </Field>
            </div>
            {/* Ticket Queue Table */}
            <div className="col-span-5">
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
                  {filteredTickets.map((ticket, key) => (
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
            <div className="col-span-5">
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
