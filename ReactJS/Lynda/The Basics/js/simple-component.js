var MyComponent = React.createClass({
    render: function() {
        return <div>Custom Component</div>;
    }
});
React.render(<div>
                <MyComponent />
                <MyComponent />
                <MyComponent />
            </div>,
            document.getElementById('react-container'));
