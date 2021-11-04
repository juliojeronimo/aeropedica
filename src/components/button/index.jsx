const Button = ({ primary, backgroundColor, size, label, ...props }) => {

    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <button
        type="button"
        style={{backgroundColor}}
        {...props}
      >
        {label}
      </button>
    );
    
}

Button.default = {
    backgroundColor: '#ff0'
}

export { Button}