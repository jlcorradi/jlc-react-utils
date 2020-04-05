export default ({ field, errors }) => {
    return !errors[field] || <small className="error">{errors[field]}</small>;
}
