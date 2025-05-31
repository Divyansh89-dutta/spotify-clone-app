import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import useAuthStore from "@/stores/useAuthStore";
import { useEffect } from "react";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

const Topbar = () => {
  const { isAdmin, checkAdminStatus } = useAuthStore();

  useEffect(() => {
    checkAdminStatus();
  }, [checkAdminStatus]);

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        <img src="/spotify.png" alt="Spotify logo" className="size-8" />
        Spotify
      </div>
      <div className="flex gap-4 items-center">
        {isAdmin && (
            <Link to="/admin" className={cn(buttonVariants({
              variant: "outline",
            }))}>
                <LayoutDashboardIcon className="size-4 mr-2" />
                Admin Dashboard
            </Link>
        )}

        <SignedOut>
            <SignInOAuthButtons />
        </SignedOut>

        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
