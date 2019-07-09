import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BackdropMovieCard.css';
import { Card, Image } from 'semantic-ui-react';
import Rating from './Rating';
import { createImageSrc } from '../api/config';
import { formatDate } from '../utils/date';
import { truncateOverview } from '../utils/movieCard';

function BackdropMovieCard({ movie, showOverview, className, ...rest }) {
  const {
    title,
    release_date: date,
    backdrop_path: image,
    vote_average: voteAverage,
    vote_count: voteCount,
    overview
  } = movie;

  return (
    <Card className={`BackdropMovieCard ${className}`} fluid {...rest}>
      <Image
        className="BackdropMovieCard__image"
        src={createImageSrc({
          path: image,
          type: 'backdrop',
          size: 'w780'
        })}
      />
      <Card.Content>
        <Card.Header>
          <div className="BackdropMovieCard__title" title={title}>
            {title}
          </div>
        </Card.Header>
        <Card.Meta>
          <div className="BackdropMovieCard__date">{formatDate(date)}</div>
          <div className="BackdropMovieCard__rating">
            <Rating value={voteCount > 0 ? voteAverage : -1} />
          </div>
        </Card.Meta>
        {showOverview && (
          <Card.Description>
            <div className="BackdropMovieCard__overview">
              {truncateOverview(overview)}
            </div>
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  );
}

BackdropMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  showOverview: PropTypes.bool,
  className: PropTypes.string
};

BackdropMovieCard.defaultProps = {
  showOverview: true,
  className: ''
};

export default BackdropMovieCard;