import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function ButtonGroupp() {
  return (
    <div>
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button>8</Button>
        <Button>9</Button>
        <Button>10</Button>
      </ButtonGroup>
        </div>
  );
}

export default ButtonGroupp;