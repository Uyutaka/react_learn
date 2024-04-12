## Responding to Events

### pass event handler via prop

```typescript
interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
// usage
<Button onClick={() => alert(movieName)}>
    Play Movie
</Button>
```
### event propagation

```typescript
// Two alerts are shown (children->parent)
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```
To stop propagation, `<button onClick={e => e.stopPropagation()} />` is used

## State: A Component's Memory

### useState() hook

Before staring, to update a component with new data, we need to do
1. Retain the data between renders
1. Trigger React to render the component with new data(re-rendering)

To accomplish this, `useState` gives us two things
1. Retain: state variable (first return value of `useState()`)
1. Trigger: when the state variable is changed, React renders the component again (re-rendering) (second return value of `useState()`)


### Hook

In React, function stating with "`use`" is called a Hook.
Hooks are special functions that only vailabled while React tis rendering.

See [built-in React Hooks](https://react.dev/reference/react/hooks)


