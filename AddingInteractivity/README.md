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
