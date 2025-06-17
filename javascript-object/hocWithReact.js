function Button() {
    console.log("Rendering Button component");
}

function withLoading(WrappedComponent) {
    return function() {
        console.log("Loading spinner...");
        WrappedComponent();
        console.log("Done loading.");
    };
}

const ButtonWithLoading = withLoading(Button);

ButtonWithLoading();


// with props example


function Card(props) {
    console.log(`Rendering Card with title: ${props.title}`);
}

function withBorder(WrappedComponent) {
    return function(props) {
        console.log("Rendering border...");
        WrappedComponent(props);
        console.log("Rendered with border.");
    };
}

const CardWithBorder = withBorder(Card);

CardWithBorder({ title: "My Title" });