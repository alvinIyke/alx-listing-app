import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPinIcon, 
  HomeIcon, 
  BathtubIcon, 
  CarIcon,
  HeartIcon,
  StarIcon 
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'

const PropertyCard = ({ property }) => {
  const {
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    parking,
    area,
    images,
    type,
    featured,
    rating,
    amenities,
    description,
    isFavorite = false
  } = property

  const handleFavoriteToggle = (e) => {
    e.preventDefault()
    // Add your favorite toggle logic here
    console.log('Toggle favorite for property:', id)
  }

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`
    } else if (price >= 1000) {
      return `₦${(price / 1000).toFixed(0)}K`
    } else {
      return `₦${price.toLocaleString()}`
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={images?.[0] || '/placeholder-property.jpg'}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Featured
          </div>
        )}
        
        {/* Property Type */}
        <div className="absolute top-3 right-12 bg-white/90 text-gray-800 px-2 py-1 rounded-md text-xs font-medium">
          {type}
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
        >
          {isFavorite ? (
            <HeartSolid className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
        
        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 bg-white/95 text-gray-900 px-3 py-1 rounded-lg font-bold text-lg">
          {formatPrice(price)}
          <span className="text-sm font-normal text-gray-600">/month</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">
            {title}
          </h3>
          {rating && (
            <div className="flex items-center ml-2 flex-shrink-0">
              <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
            </div>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-3 text-gray-600">
          <div className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">{bedrooms} bed</span>
          </div>
          
          <div className="flex items-center">
            <BathtubIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">{bathrooms} bath</span>
          </div>
          
          {parking && (
            <div className="flex items-center">
              <CarIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">{parking} car</span>
            </div>
          )}
          
          {area && (
            <div className="text-sm">
              {area} sqft
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Amenities */}
        {amenities && amenities.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                >
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="text-gray-500 text-xs py-1">
                  +{amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Link href={`/properties/${id}`} className="flex-1">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
              View Details
            </button>
          </Link>
          
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard