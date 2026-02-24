import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordComponent = () => {
  return (
    <div className="grid place-items-center min-h-screen w-[max(300px,100vw)] bg-gray-50 p-2">
      <div className="rounded-xl shadow-lg py-2 px-4 sm:px-8 sm:py-4 grid grid-cols-1 place-items-center">
        <Image
          src="/educar-logo.png"
          width={75}
          height={75}
          alt="Educar Logo"
          className="rounded-full"
        />
        <h2 className="text-lg sm:text-xl font-bold text-center sm:mt-4">
          Helpdesk Management System
        </h2>
        <h3 className="text-sm sm:text-lg font-semibold text-center sm:mt-4">
          Password Reset
        </h3>
        <p className="text-xs sm:mt-2">Please enter your email address.</p>
        <Field className="mt-2 sm:mt-4">
          <FieldLabel htmlFor="input-field-email" className="text-xs">
            Email:
          </FieldLabel>
          <Input
            id="input-field-email"
            type="text"
            placeholder="user@essi.ph"
          />
        </Field>
        <div className="flex justify-evenly mt-2 sm:mt-4 w-full gap-2 p-2">
          <Button className="flex-1 bg-red-500 hover:bg-red-700">
            Send OTP
          </Button>
          <Button className="flex-1">Back</Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
