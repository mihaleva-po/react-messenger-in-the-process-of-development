export const required = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => {
    return (value) => value && value.length <= maxLength ?
        undefined : `Must be ${maxLength} characters or less`;
}

export const minLengthCreator = (minLength) => value =>
    value && value.length >= minLength ?
    undefined : `Must be ${minLength} characters or more`;