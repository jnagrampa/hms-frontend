import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SignInComponent = () => {
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
        <p className="text-xs sm:mt-4">Please sign-in to your account.</p>
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
        <Field className="mt-2 sm:mt-4">
          <FieldLabel htmlFor="input-field-password" className="text-xs">
            Password/OTP:
          </FieldLabel>
          <Input
            id="input-field-password"
            type="password"
            placeholder="••••••••"
          />
        </Field>
        <span className="mt-4 text-xs">
          Forgot Password? Click{" "}
          <Link href="/forgot-password" className="text-gray-700 underline">
            here
          </Link>
          .
        </span>
        <Button className="mt-2 sm:mt-4 w-full">Sign In</Button>
        <span className="mt-4 sm:mt-8 text-xs text-gray-500">
          Version: HMS 1.0.0
        </span>
      </div>
    </div>
  );
};

export default SignInComponent;
