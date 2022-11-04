import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const Interests = ({ loading, interests }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {interests?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Research Interests
                  </span>
                )}
              </h5>
            </div>
            {/*<div className="mt-3 text-base-content mr-2 ml-3 text-opacity-60 font-mono">*/}
            {/*  {loading || !interests*/}
            {/*      ? skeleton({ width: 'w-48', height: 'h-5' })*/}
            {/*      : 'My research is about recurrent event modeling and '*/}
            {/*      + 'applications of statistics to economics, finance, pharmacology, '*/}
            {/*      + 'and risk management.'}*/}
            {/*</div>*/}
            <div className="p-3 flow-root">
              <div className="-m-1">
                {loading
                  ? renderSkeleton()
                  : interests.map((interest, index) => (
                      <div
                        key={index}
                        className="m-1 text-xs font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                      >
                        {interest}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Interests.propTypes = {
  loading: PropTypes.bool.isRequired,
  interests: PropTypes.array.isRequired,
};

export default Interests;
