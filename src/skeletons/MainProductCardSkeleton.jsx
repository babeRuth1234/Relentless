import './skellyStyles/mainProductCardSkeleton.css';

export default function MainProductCardSkeleton() {
  return (
    <div className="main-product-skeleton">
      <div className="main-skeleton-image">
        <div className="main-skeleton-img shimmer"></div>
        <div className="main-skeleton-bag shimmer"></div>
        <div className="main-skeleton-badge">
          <div className="main-skeleton-buy-now shimmer"></div>
          <div className="main-skeleton-price-circle shimmer"></div>
        </div>
      </div>

      <div className="main-skeleton-description">
        <div className="main-skeleton-text-block">
          <div className="main-skeleton-title shimmer"></div>
          <div className="main-skeleton-subtitle shimmer"></div>
          <div className="main-skeleton-subtitle-short shimmer"></div>
        </div>
        <div className="main-skeleton-size shimmer"></div>
      </div>
    </div>
  );
}
