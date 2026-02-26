"use client";

import { useEffect, useState } from "react";
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
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { StatusBadge } from "./StatusBadge";
import ProgressBar from "./ProgressBar";
import LeftNavbar from "./LeftNavbar";
import SummaryCard from "./SummaryCard";
import capitalizeWords from "./_utils/capitalizeWords";
import getRandomISODate from "./_utils/getRandomISODate";
import getRandomString from "./_utils/getRandomString";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countTicketByStatus from "./_utils/countTicketByStatus";
import { useFilterTicketStore } from "@/lib/FilterTicketStore";

const ITSupervisorDashboardPage = () => {
  const user = {
    name: "John Doe",
    role: "IT Supervisor",
  };
  const { filterTicketByStatus } = useFilterTicketStore();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [tickets, setTickets] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [caseDetailText, setCaseDetailText] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    (filterTicketByStatus
      ? tickets.filter(
          (item) =>
            item.status?.toLowerCase() === filterTicketByStatus.toLowerCase(),
        ).length
      : tickets.length) / itemsPerPage,
  );
  const [notStartedTicketCount, setNotStartedTicketCount] = useState(0);
  const [openTicketCount, setOpenTicketCount] = useState(0);
  const [holdTicketCount, setHoldTicketCount] = useState(0);
  const [closedTicketCount, setClosedTicketCount] = useState(0);
  const [escalationTicketCount, setEscalationTicketCount] = useState(0);

  // 1. Seed random tickets on component load
  useEffect(() => {
    const generated = Array.from({ length: 100 }, (_, i) => ({
      id: (i + 1).toString(),
      date: getRandomISODate("2026-01-01T00:00:00Z", "2026-02-25T23:59:59Z"), // Between Jan 1, 2026 and Feb 25, 2026
      subject: getRandomString([
        "VPN Connection Timeout - Error Code 807",
        "Outlook Failing to Sync with Exchange Server",
        "Laptop Battery Not Charging / Rapid Drainage",
        "Request for Access: Production Database (SQL Admin)",
        "Blue Screen of Death (BSOD) on Boot-up",
        "Printer Offline: Floor 3 North Wing (PRN-042)",
        "MFA Reset Request for User: [Employee Name]",
        "Excel Freezing when Opening Large .CSV Files",
        "Monitor Display Flickering / Signal Loss",
        "WiFi Signal Weak in Conference Room 'Bravo'",
      ]),
      progress: Math.floor(Math.random() * 301), // between 0 - 300%
      minutes: Math.floor(Math.random() * 1001), // between 0 - 1000 minutes
      status: getRandomString([
        "Not Started",
        "In-progress",
        "Hold",
        "Purchasing",
        "Escalation",
        "Invalid",
        "Closed",
      ]),
      company: getRandomString([
        "Nebula Dynamics",
        "Ironwood Solutions",
        "Stellar Logistics",
        "Apex Systems Group",
        "Veridian Tech",
        "Blue Horizon Ventures",
        "Summit Analytics",
        "Nova Stream Partners",
        "Quantum Reach",
        "Beacon Industries",
      ]),
      assignedTo: getRandomString([
        "Saige Fuentes",
        "Bowen Higgins",
        "Leighton Kramer",
        "Kylan Gentry",
        "Amelie Griffith",
        "Franklin Sierra",
        "Marceline Avila",
        "Jaylen Blackwell",
        "Saoirse Conrad",
        "Dilan Wolf",
      ]),
    }));
    setTickets(generated);
    setFiltered(generated);
    setNotStartedTicketCount(countTicketByStatus(generated, "Not Started"));
    setOpenTicketCount(countTicketByStatus(generated, "In-progress"));
    setHoldTicketCount(countTicketByStatus(generated, "Hold"));
    setEscalationTicketCount(countTicketByStatus(generated, "Escalation"));
    setClosedTicketCount(countTicketByStatus(generated, "Closed"));
  }, []);

  // 2. Filter tickets based on selected status, the master list of tickets, items per page, and current page
  useEffect(() => {
    const status = filterTicketByStatus;
    let baseData = tickets;
    if (status) {
      baseData = tickets.filter(
        (item) => item.status?.toLowerCase() === status.toLowerCase(),
      );
      setCaseDetailText(capitalizeWords(status));
    } else {
      setCaseDetailText("All");
    }
    const totalPages = Math.ceil(baseData.length / itemsPerPage);
    // Prevent invalid page after filtering
    if (currentPage > totalPages) {
      setCurrentPage(1);
      return;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFiltered(baseData.slice(startIndex, endIndex));
  }, [filterTicketByStatus, tickets, itemsPerPage, currentPage]);

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
            <SummaryCard
              count={notStartedTicketCount}
              statusType="Not Started"
            />
            <SummaryCard count={openTicketCount} statusType="In-progress" />
            <SummaryCard count={holdTicketCount} statusType="Hold" />
            <SummaryCard count={closedTicketCount} statusType="Closed" />
            <SummaryCard
              count={escalationTicketCount}
              statusType="Escalation"
            />
            <div className="sm:hidden"></div>
            {/* Search Bar Section */}
            <div className="my-4 col-span-2 sm:col-span-3 lg:col-span-5 flex justify-center">
              <div className="w-full max-w-3xl">
                <Field>
                  <FieldLabel
                    htmlFor="input-button-group"
                    className="block text-center text-lg"
                  >
                    {caseDetailText} Case Details
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
              <div className="flex items-center justify-between gap-4">
                <Field orientation="horizontal" className="w-fit">
                  <FieldLabel htmlFor="select-rows-per-page">
                    Rows per page
                  </FieldLabel>
                  <Select
                    value={
                      itemsPerPage === tickets.length
                        ? "ALL"
                        : String(itemsPerPage)
                    }
                    onValueChange={(value) => {
                      if (value === "ALL") {
                        setCurrentPage(1);
                        if (value === "ALL") {
                          setItemsPerPage(tickets.length);
                        } else {
                          setItemsPerPage(Number(value));
                        }
                      } else {
                        setItemsPerPage(Number(value));
                      }
                    }}
                  >
                    <SelectTrigger className="w-20" id="select-rows-per-page">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent align="start">
                      <SelectGroup>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="ALL">ALL</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Pagination className="mx-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    <PaginationItem className="hidden md:block">
                      <span className="px-4 text-sm">
                        Page {currentPage} of {totalPages || 1}
                      </span>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages),
                          )
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ITSupervisorDashboardPage;
