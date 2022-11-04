import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const AboutMe = ({ profile, loading, aboutMe }) => {
  return (
      <div className="col-span-2 card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
              ) : (
                  <span className="text-base-content opacity-70">
              About Me
            </span>
              )}
            </h5>
          </div>
          <div className="text-base-content text-opacity-60 my-2 mx-4">
            {loading || !aboutMe
                ? skeleton({ width: 'w-48', height: 'h-5' })
                : aboutMe.description}
          </div>
        </div>
      </div>
  );
};

AboutMe.propTypes = {
  profile: PropTypes.object,
  aboutMe: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

export default AboutMe;
