export const TruncateText = ({ text, maxLength }: { text: string; maxLength: number }): string => {
    if (text.length <= maxLength) {
        return text;
    }
    const truncatedText = text.substring(0, maxLength - 3) + '...';
    return truncatedText;
};
