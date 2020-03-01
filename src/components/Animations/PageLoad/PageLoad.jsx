import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {animated, useTransition} from 'react-spring';

const PageLoad = ({isLoading, hasError, onErrorComponent, onSuccessComponent, onLoadComponent, transitionStyles}) => {
  const loadingAnimation = useTransition(isLoading, null, transitionStyles);
  const loadedComponent = useMemo(() => (hasError ? onErrorComponent : onSuccessComponent), [
    hasError,
    onErrorComponent,
    onSuccessComponent,
  ]);

  if (isLoading) {
    return loadingAnimation.map(
      ({item, key, props}) =>
        item && (
          <animated.div key={key} style={props}>
            {onLoadComponent}
          </animated.div>
        )
    );
  }

  return loadingAnimation.map(
    ({item, key, props}) =>
      !item && (
        <animated.div key={key} style={props}>
          {loadedComponent}
        </animated.div>
      )
  );
};

PageLoad.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  onLoadComponent: PropTypes.node,
  onSuccessComponent: PropTypes.node.isRequired,
  onErrorComponent: PropTypes.node,
  transitionStyles: PropTypes.shape({
    from: PropTypes.object,
    enter: PropTypes.object,
    leave: PropTypes.object,
  }),
};

PageLoad.defaultProps = {
  isLoading: false,
  hasError: false,
  onLoadComponent: <></>,
  onErrorComponent: <></>,
  transitionStyles: {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  },
};

export default PageLoad;
