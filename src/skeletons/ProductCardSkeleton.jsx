import './skellyStyles/ProductCardSkeleton.css';

export default function ProductCardSkeleton() {
  return (
    <div className="product-card-skeleton">
      <div className="skeleton-favourite"></div>
      
      <div className="skeleton-image shimmer"></div>

      <div className="skeleton-details">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-stars">
          <div className="skeleton-star shimmer"></div>
          <div className="skeleton-star shimmer"></div>
          <div className="skeleton-star shimmer"></div>
          <div className="skeleton-star shimmer"></div>
          <div className="skeleton-star shimmer"></div>
        </div>
        <div className="skeleton-price-row">
          <div className="skeleton-price shimmer"></div>
          <div className="skeleton-bag shimmer"></div>
        </div>
      </div>
    </div>
  );
}
