import { FeaturedServiceCard } from './FeaturedServiceCard';
import { StandardServiceCard } from './StandardServiceCard';

export function ServiceCard({
  title,
  description,
  image,
  bullets,
  startingPrice,
  treatments,
  isFeatured = false,
}) {
  if (isFeatured) {
    return (
      <FeaturedServiceCard
        title={title}
        description={description}
        image={image}
        bullets={bullets}
        startingPrice={startingPrice}
        treatments={treatments}
      />
    );
  }

  return (
    <StandardServiceCard
      title={title}
      description={description}
      bullets={bullets}
      startingPrice={startingPrice}
      treatments={treatments}
    />
  );
}
