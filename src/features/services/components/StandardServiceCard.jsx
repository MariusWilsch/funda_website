import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceDialog } from "./ServiceDialog";

export function StandardServiceCard({
  title,
  description,
  startingPrice,
  timingInfo,
}) {
  return (
    <Card className="h-full rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden bg-[#FFFDFB]">
      <div className="flex flex-col p-6 text-center">
        <CardHeader className="pb-4 px-0">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-warm-gray-900 leading-tight">
              {title}
            </CardTitle>
            {/* Red underline decoration */}
            <div className="w-24 h-0.5 bg-bordeaux-600 mx-auto"></div>
            <div className="text-bordeaux-600 font-semibold text-3xl pt-2">
              ab {startingPrice}
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pt-0 px-0 space-y-4">
          <div className="px-2">
            <p className="text-base text-warm-gray-600 font-normal leading-relaxed">
              {description}
            </p>
          </div>

          {/* Treatment timing information */}
          <div className="flex items-center justify-center text-[#666] text-xs">
            <span>
              {timingInfo &&
                [timingInfo.duration, timingInfo.results, timingInfo.longevity]
                  .filter(Boolean)
                  .join(" | ")}
            </span>
          </div>

          <div className="pt-4">
            <ServiceDialog
              service={{ title, description, startingPrice, timingInfo }}
            >
              <Button
                variant="ghost"
                className="w-full text-bordeaux-600 hover:text-bordeaux-700 hover:bg-bordeaux-50 border border-bordeaux-200 hover:border-bordeaux-300 font-semibold"
              >
                Details & Preise
              </Button>
            </ServiceDialog>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
