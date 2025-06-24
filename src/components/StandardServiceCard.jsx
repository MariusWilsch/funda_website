import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookingButton } from "./BookingButton";

// Service images for each treatment
const getServiceImage = (title) => {
  const imageMap = {
    Hyaluron:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Lipolyse:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    PRP: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    imageMap[title] ||
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
};

export function StandardServiceCard({
  title,
  description,
  bullets,
  startingPrice,
  treatments,
}) {
  const serviceImage = getServiceImage(title);

  return (
    <Card className="h-full rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
      {/* Reversed Layout: Content Left (60%), Image Right (40%) */}
      <div className="grid grid-cols-[60%_40%] h-full">
        {/* Left Side - Content */}
        <div className="flex flex-col p-6">
          <CardHeader className="pb-4 px-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-warm-gray-800 leading-tight">
                {title}
              </CardTitle>
              <Badge className="text-white font-semibold px-3 py-1 bg-bordeaux-500 text-sm">
                ab {startingPrice}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col pt-0 px-0">
            <div className="flex-1">
              <p className="text-base text-warm-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-bordeaux-200 text-bordeaux-600 hover:bg-bordeaux-50 hover:text-bordeaux-700"
                  >
                    Details anzeigen
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto px-4 sm:px-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-warm-gray-900">
                      {title} - Behandlungsdetails
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-4">
                      {bullets.length > 0 && (
                        <div className="bg-warm-gray-50 p-4 rounded-lg">
                          <p className="text-warm-gray-700 leading-relaxed">
                            {bullets[0]}
                          </p>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-warm-gray-900 mb-2">
                          Behandlungsdetails:
                        </h4>
                        <ul className="text-sm text-warm-gray-600 space-y-1">
                          <li>• Behandlungsdauer: ca. 20-30 Minuten</li>
                          <li>• Wirkungseintritt: ab Tag 3</li>
                          <li>• Haltbarkeit: 3-5 Monate</li>
                          <li>• Ausfallzeit: keine</li>
                        </ul>
                      </div>
                      {treatments.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-warm-gray-900 mb-3">
                            Preisübersicht:
                          </h4>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-warm-gray-700">
                                  Behandlung
                                </TableHead>
                                <TableHead className="text-right text-warm-gray-700">
                                  Preis
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {treatments.map((treatment, index) => (
                                <TableRow key={index}>
                                  <TableCell className="text-warm-gray-600">
                                    {treatment.name}
                                  </TableCell>
                                  <TableCell className="text-right font-medium text-warm-gray-900">
                                    {treatment.price}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      )}
                      <div className="pt-6 border-t border-warm-gray-200">
                        <BookingButton
                          variant="primary"
                          size="lg"
                          className="w-full"
                        >
                          {title} Termin buchen
                        </BookingButton>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src={serviceImage}
            alt={title}
            className="absolute h-full w-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
}
