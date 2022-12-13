import { Button } from './Button';

export default function PlayButton({ handelClick }) {
  return (
    <Button onClick={handelClick}>
      <span className="circle material-icons">play_arrow</span>
    </Button>
  );
}
