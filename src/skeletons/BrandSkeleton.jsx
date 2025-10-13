import './skellyStyles/BrandSkeleton.css';

export default function BrandSkeleton() {
  return (
    <div className="brand-skeleton-wrapper">
      <div className="brand-skeleton shimmer">
        <div className="brand-skeleton-circle"></div>
      </div>
      <div className="brand-skeleton-text shimmer"></div>
    </div>
  );
}
