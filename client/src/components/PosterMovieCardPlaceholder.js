import React from 'react';
import PropTypes from 'prop-types';
import { Card, Placeholder } from 'semantic-ui-react';
import '../styles/PosterMovieCard.css';

function PosterMovieCardPlaceholder({ className }) {
    return (
        <Card
            className={`PosterMovieCardPlaceholder ${className}`}
            fluid
        >
            <Placeholder>
                <Placeholder.Image square />
            </Placeholder>
            <Card.Content>
                <Placeholder>
                    <Placeholder.Header>
                        <Placeholder.Line length='long' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='short' />
                        <Placeholder.Line length='very short' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Card.Content>
        </Card>
    );
}

PosterMovieCardPlaceholder.propTypes = {
    className: PropTypes.string
}

PosterMovieCardPlaceholder.defaultProps = {
    className: ''
}

export default PosterMovieCardPlaceholder;
