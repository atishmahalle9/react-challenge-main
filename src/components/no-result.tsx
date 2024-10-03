import React from 'react';

interface NoResultsProps {
    search: string;
}

const NoResults: React.FC<NoResultsProps> = ({ search }) => (
    <div role="alert" aria-live="polite">
        No countries found matching "{search}"
    </div>
);

export default NoResults;
