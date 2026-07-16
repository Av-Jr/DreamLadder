/**
 * Formats a raw ISO date string from Sanity into a readable format.
 * Example: '2026-07-14T03:09:47Z' -> '14 Jul 2026'
 */
export const formatDate = (dateString) => {
    if (!dateString) return '';

    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };

    return new Date(dateString).toLocaleDateString('en-GB', options);
};

/**
 * Utility to generate a unique ID for new uploads if not using UUID.
 */
export const generateId = () => {
    return Math.random().toString(36).substring(2, 15);
};