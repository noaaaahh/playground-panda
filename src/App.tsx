import { Button } from "~/components/button";
import { Dialog } from "./components/dialog";

function App() {
  return (
    <>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="warning">warning</Button>
      <Button color="danger">danger</Button>
      <Button color="hint">hint</Button>
      <Button color="contrast">contrast</Button>

      <Button shape="invisible" color="primary">
        primary
      </Button>
      <Button shape="invisible" color="secondary">
        secondary
      </Button>
      <Button shape="invisible" color="success">
        success
      </Button>
      <Button shape="invisible" color="warning">
        warning
      </Button>
      <Button shape="invisible" color="danger">
        danger
      </Button>
      <Button shape="invisible" color="hint">
        hint
      </Button>
      <Button shape="invisible" color="contrast">
        contrast
      </Button>

      <Button shape="outline" color="primary">
        primary
      </Button>
      <Button shape="outline" color="secondary">
        secondary
      </Button>
      <Button shape="outline" color="success">
        success
      </Button>
      <Button shape="outline" color="warning">
        warning
      </Button>
      <Button shape="outline" color="danger">
        danger
      </Button>
      <Button shape="outline" color="hint">
        hint
      </Button>
      <Button shape="outline" color="contrast">
        contrast
      </Button>

      <Button asChild>
        <a href="https://soynoah.me">hi</a>
      </Button>

      <Dialog>
        <Dialog.Trigger>open</Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Booking info</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              Please enter the info for your booking below.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>close</Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}

export default App;
