import Link from "next/link";

import { Home, FileText, Settings, LogOut } from "lucide-react";
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

const ITSupervisorDashboardPage = async () => {
  const user = {
    name: "John Doe",
    role: "IT Supervisor",
  };

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div className="h-screen w-[max(300px,100vw)] bg-gray-50 grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] overflow-hidden">
      <header className="col-span-2 border-b flex items-center justify-between py-1 px-2 sm:px-10">
        <Link href="/" className="font-semibold text-xl">
          HMS
        </Link>
        <UserDropdown name={user.name} role={user.role} />
      </header>
      {/* Left Navbar */}
      <nav className="sticky top-0 h-screen flex flex-col items-start gap-6 p-4 border-r">
        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
          <Home size={20} />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
          <FileText size={20} />
          <span>Generate Report</span>
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
      {/* Main Content Area */}
      <main className="p-6 overflow-y-auto">
        <div className="grid grid-cols-4 gap-4">
          {/* Summary Statistics */}
          <Card className="w-full">
            <CardTitle className="text-center text-lg">Open</CardTitle>
            <CardContent className="text-center">8</CardContent>
          </Card>
          <Card className="w-full">
            <CardTitle className="text-center text-lg">Hold</CardTitle>
            <CardContent className="text-center">7</CardContent>
          </Card>
          <Card className="w-full">
            <CardTitle className="text-center text-lg">Closed</CardTitle>
            <CardContent className="text-center">19</CardContent>
          </Card>
          <Card className="w-full">
            <CardTitle className="text-center text-lg">Escalation</CardTitle>
            <CardContent className="text-center">5</CardContent>
          </Card>
          {/* Search Bar Section */}
          <div className="col-span-4 flex justify-center p-2">
            <Field>
              <FieldLabel htmlFor="input-button-group" className="text-lg">
                Open Case Detail
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
          <div className="col-span-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case Number</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Minutes</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Company</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>13383</TableCell>
                  <TableCell>Feb 16, 2026</TableCell>
                  <TableCell>No Internet in Centria</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-center">66%</span>
                      <Progress value={66} />
                    </div>
                  </TableCell>
                  <TableCell>120 mins</TableCell>
                  <TableCell>
                    <StatusBadge status="Not Started"></StatusBadge>
                  </TableCell>
                  <TableCell>22439 Engel Angeles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13383</TableCell>
                  <TableCell>Feb 16, 2026</TableCell>
                  <TableCell>No Internet in Centria</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-center">66%</span>
                      <Progress value={66} />
                    </div>
                  </TableCell>
                  <TableCell>120 mins</TableCell>
                  <TableCell>
                    <StatusBadge status="In-progress"></StatusBadge>
                  </TableCell>
                  <TableCell>22439 Engel Angeles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13383</TableCell>
                  <TableCell>Feb 16, 2026</TableCell>
                  <TableCell>No Internet in Centria</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-center">66%</span>
                      <Progress value={66} />
                    </div>
                  </TableCell>
                  <TableCell>120 mins</TableCell>
                  <TableCell>
                    <StatusBadge status="Hold"></StatusBadge>
                  </TableCell>
                  <TableCell>22439 Engel Angeles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13383</TableCell>
                  <TableCell>Feb 16, 2026</TableCell>
                  <TableCell>No Internet in Centria</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-center">66%</span>
                      <Progress value={66} />
                    </div>
                  </TableCell>
                  <TableCell>120 mins</TableCell>
                  <TableCell>
                    <StatusBadge status="Purchasing"></StatusBadge>
                  </TableCell>
                  <TableCell>22439 Engel Angeles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13383</TableCell>
                  <TableCell>Feb 16, 2026</TableCell>
                  <TableCell>No Internet in Centria</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-center">66%</span>
                      <Progress value={66} />
                    </div>
                  </TableCell>
                  <TableCell>120 mins</TableCell>
                  <TableCell>
                    <StatusBadge status="Escalation"></StatusBadge>
                  </TableCell>
                  <TableCell>22439 Engel Angeles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13383</TableCell>
                  <TableCell>Feb 16, 2026</TableCell>
                  <TableCell>No Internet in Centria</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-center">66%</span>
                      <Progress value={66} />
                    </div>
                  </TableCell>
                  <TableCell>120 mins</TableCell>
                  <TableCell>
                    <StatusBadge status="Invalid"></StatusBadge>
                  </TableCell>
                  <TableCell>22439 Engel Angeles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13383</TableCell>
                  <TableCell>Feb 16, 2026</TableCell>
                  <TableCell>No Internet in Centria</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-center">66%</span>
                      <Progress value={66} />
                    </div>
                  </TableCell>
                  <TableCell>120 mins</TableCell>
                  <TableCell>
                    <StatusBadge status="Closed"></StatusBadge>
                  </TableCell>
                  <TableCell>22439 Engel Angeles</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="col-span-4">
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
  );
};

export default ITSupervisorDashboardPage;
