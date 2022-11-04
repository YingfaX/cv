import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const AvatarCard = ({ profile, loading, avatarRing, resume }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ width: 'w-48', height: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            {loading || !profile
              ? skeleton({ width: 'w-48', height: 'h-5' })
              : profile.bio}
          </div>
          <a
              href='https://statistics.uconn.edu/'
              target="_blank"
              rel="noreferrer"
              className="flex justify-start py-2 px-1 items-center"
          >
            <div
                className={`${
                    skeleton ? 'flex-grow' : ''
                } text-xl font-bold mr-2 ml-3 truncate opacity-70`}
            >
              <div
                  style={{
                    wordBreak: 'break-word',
                  }}
              >
                {loading || !profile
                    ? skeleton({ width: 'w-48', height: 'h-5' })
                    : profile.university}
              </div>
            </div>
          </a>
        </div>
        {resume?.fileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ width: 'w-40', height: 'h-10' })}
            </div>
          ) : (
            <a
              href={resume.fileUrl}
              target="_blank"
              className="btn btn-outline btn-primary text-xs mt-6"
              rel="noreferrer"
            >
              Download CV
            </a>
          ))}
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
