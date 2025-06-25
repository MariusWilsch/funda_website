import { FeaturedServiceCard } from "./FeaturedServiceCard";
import { StandardServiceCard } from "./StandardServiceCard";

export function ServiceCard({
  serviceType,
  title,
  description,
  image,
  bullets,
  startingPrice,
  treatments,
  timingInfo,
  isFeatured = false,
}) {
  if (isFeatured) {
    return (
      <FeaturedServiceCard
        serviceType={serviceType}
        title={title}
        description={description}
        image={image}
        bullets={bullets}
        startingPrice={startingPrice}
        treatments={treatments}
        timingInfo={timingInfo}
      />
    );
  }

  return (
    <StandardServiceCard
      serviceType={serviceType}
      title={title}
      description={description}
      bullets={bullets}
      startingPrice={startingPrice}
      treatments={treatments}
      timingInfo={timingInfo}
    />
  );
}
