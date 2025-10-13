import BrandSkeleton from './BrandSkeleton';
import ProductCardSkeleton from './ProductCardSkeleton';
import MainProductCardSkeleton from './MainProductCardSkeleton';
import './skellyStyles/PageSkeleton.css';

export default function PageSkeleton() {
  return (
    <>
      {/* Brands Section */}
      <div className="tags">
        <div className="all-skeleton shimmer"></div>
        {[...Array(8)].map((_, index) => (
          <BrandSkeleton key={index} />
        ))}
      </div>

      {/* Horizontal Product Slider */}
      <div className="Products-Item-slider">
        {[...Array(5)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>

      {/* See More Section */}
      <div className="seemore-skeleton">
        <div className="seemore-text shimmer"></div>
        <div className="seemore-arrow shimmer"></div>
      </div>

      {/* Main Products Grid */}
      <div className="main-products">
        {[...Array(6)].map((_, index) => (
          <MainProductCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
