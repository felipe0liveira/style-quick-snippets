# Button Component

## Description

The Button component provides a customizable button element for use in React applications. It includes default styling for a consistent appearance and behavior across the application.

## Usage

To use the Button component, import it into your React component and pass the desired content as a prop.

## Behavior

- The button has a default background color of #d7375c and white text.
- On hover, a semi-transparent black overlay appears on the button with a 10% opacity.
- When the button is clicked, the black overlay's opacity increases to 20%.
- The button has a cursor pointer to indicate it is clickable.

## Customization

You can customize the Button component by overriding its CSS styles or passing additional props for specific styling or behavior modifications.

## Example

Below is an example of how to use the Button component in a React component:

```jsx
import React from 'react'
import Button from './Button'

const App = () => {
	return (
		<div>
			<Button content='Click me' />
		</div>
	)
}

export default App
```

Feel free to modify the Button component's styling and behavior to suit your project's requirements.
