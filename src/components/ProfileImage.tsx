interface ProfileImageProps {
    imageUrl: string;
    altText?: string;
  }
  
  const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl, altText = "Profile" }) => {
    return (
      <div className="relative w-64 h-64">
        {/* Blob Shape */}
        <svg
          className="absolute inset-0 w-full h-full animate-morph"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            d="M43.4,-56.1C57.6,-46.7,69.6,-34.2,74.8,-18.9C80,-3.5,78.3,15.6,70.5,30.5C62.6,45.4,48.7,56.1,33.4,61.6C18,67.2,1.1,67.7,-16.8,66.2C-34.8,64.7,-54,61.1,-64.4,48.6C-74.8,36.1,-76.3,14.6,-74.2,-5.2C-72.2,-25,-66.5,-43.2,-54.5,-52.9C-42.4,-62.6,-24.2,-63.7,-7.2,-59.4C9.9,-55.1,19.8,-45.5,43.4,-56.1Z"
            transform="translate(100 100)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
  
        {/* Image */}
        <img
          src={imageUrl}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover rounded-full"
        />
      </div>
    );
  };
  
  export default ProfileImage;
  