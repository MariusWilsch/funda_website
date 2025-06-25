import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceDialog } from "./ServiceDialog";
import Image from "/Users/verdant/Documents/augment-projects/funda_website/public/Picture2.png";

export function FeaturedServiceCard({
  title,
  description,
  startingPrice,
  timingInfo,
  treatments,
}) {
  return (
    <Card className="h-full rounded-xl border-t-8 border-t-bordeaux-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
      <div className="grid md:grid-cols-2 h-full">
        <div className="relative hidden md:block">
          <img
            src={Image}
            alt={title}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col p-10">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-warm-gray-900 leading-tight card-title-serif">
                  {title}
                </CardTitle>
                <span className="text-xs text-warm-gray-600 font-medium">
                  Meistgebuchte Behandlung
                </span>
              </div>
              <Badge className="text-white font-semibold px-4 py-2 bg-bordeaux-600 text-xl">
                ab {startingPrice}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col pt-0">
            <div className="flex-1 space-y-4">
              <p className="text-lg text-warm-gray-700 font-normal leading-relaxed">
                {description}
              </p>
              <div className="space-y-3">
                {timingInfo && (
                  <div className="text-[11px] text-[#666]">
                    {[
                      timingInfo.duration,
                      timingInfo.results,
                      timingInfo.longevity,
                    ]
                      .filter(Boolean)
                      .join(" | ")}
                  </div>
                )}
              </div>
            </div>
            <div className="pt-6">
              <ServiceDialog
                service={{
                  title,
                  description,
                  startingPrice,
                  treatments,
                  timingInfo,
                }}
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
      </div>
    </Card>
  );
}
