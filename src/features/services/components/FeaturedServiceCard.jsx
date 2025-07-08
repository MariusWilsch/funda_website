import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceDialog } from "./ServiceDialog";
import OptimizedImage from "@/components/ui/OptimizedImage";
import featuredImage from "@/assets/FeaturedServiceLogo.jpeg";

export function FeaturedServiceCard({
  serviceType,
  title,
  description,
  startingPrice,
  timingInfo,
  treatments,
}) {
  return (
    <Card className="h-full rounded-xl border-t-8 border-t-bordeaux-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
      {/* Desktop: Featured layout with image */}
      <div className="hidden md:grid md:grid-cols-2 h-full">
        <div className="relative">
          <OptimizedImage
            src={featuredImage}
            alt={title}
            className="absolute h-full w-full object-cover"
            style={{
              objectPosition: "center 20%",
            }}
          />
        </div>
        <div className="flex flex-col p-10">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-warm-gray-900 leading-tight card-title-serif">
                  {title}
                </CardTitle>
              </div>
              <Badge className="text-white font-semibold px-4 py-2 bg-bordeaux-600 text-xl whitespace-nowrap">
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
              <ServiceDialog serviceType={serviceType}>
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

      {/* Mobile: Standard service card layout */}
      <div className="md:hidden flex flex-col p-6 text-center bg-[#FFFDFB]">
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
            <ServiceDialog serviceType={serviceType}>
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
