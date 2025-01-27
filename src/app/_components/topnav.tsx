import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between text-xl font-semibold">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
