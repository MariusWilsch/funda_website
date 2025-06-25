import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ServiceDialog({ service, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-warm-gray-900">
            {service?.title || "Service Details"}
          </DialogTitle>
          <DialogDescription className="text-warm-gray-600">
            Detaillierte Informationen und Preise für diese Behandlung
          </DialogDescription>
        </DialogHeader>
        
        {/* Dialog Content - Empty skeleton for now */}
        <div className="space-y-6">
          <div className="text-center py-12 text-warm-gray-500">
            <p>Dialog content will be implemented here</p>
            <p className="text-sm mt-2">Service: {service?.title}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
