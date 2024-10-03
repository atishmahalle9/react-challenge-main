import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <div role="alert" className="error-message">
        {message}
    </div>
);

export default ErrorMessage;
