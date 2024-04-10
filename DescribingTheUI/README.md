# Passing Props to a Component

## How to pass prop

```typescript

function getImageUrl(person: Person) {
  return ('https://i.imgur.com/' + person.imageId + '.webp?maxwidth=760&fidelity=grand')
}

interface Person {
  imageId: string;
  name: string;
}

interface AvatarProps {
  person: Person;
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ person, size }) => {
  console.log(size)
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={100}
      height={100} />
  );
}

function App() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: '8M1s8bf_d'
        }}
      />
    </div>
  );
}
```

## How to pass dom

```typescript
interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card>
        <Avatar
         ....
        />
      </Card>
    </div>
  );
}
```

# Keeping Components Pure

## Inputs of component

These inputs must be read-only

- props
- state
- [context](https://react.dev/learn/passing-data-deeply-with-context)

## StrictMode

By calling the component functions twice, Strict Mode (`<React.StrictMode>`) helps find components that break the rule of pure function.

## Side effect in React
Side effect usually belong in the event handlers.

Usually event handlers don't need to be pure.

`useEffect` tells React to execute later, after rendering. However, **useEffect should be the last resort.**


