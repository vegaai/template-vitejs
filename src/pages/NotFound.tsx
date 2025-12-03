import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <div className="space-y-1">
            <h1 className="text-6xl font-bold tracking-tight">404</h1>
            <p className="text-2xl font-semibold text-foreground">Page not found</p>
          </div>
          <p className="text-base text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <p className="text-sm text-muted-foreground break-all">
            <span className="font-mono bg-muted px-2 py-1 rounded">{location.pathname}</span>
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </Button>
          <Button asChild className="gap-2">
            <a href="/">
              <Home className="w-4 h-4" />
              Go to Home
            </a>
          </Button>
        </div>

      
      </div>
    </div>
  );
};

export default NotFound;
