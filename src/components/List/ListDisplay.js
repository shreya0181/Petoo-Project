import React from "react";
import useAxios from "axios-hooks";
import { Card, Button, Popup, Confirm } from "semantic-ui-react";
import "./list.css";
import Welcome from "../Welcome/Welcome";

const ListDisplay = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://jsonblob.com/api/jsonBlob/ecfad985-bc66-11ea-8cae-99a0660a95d6"
  );

  if (loading)
    return (
      <div className="loading">
        <Button loading secondary>
          Loading
        </Button>
      </div>
    );

  if (error)
    return (
      <div>
        {" "}
        <Button color="red">ERROR LOADING</Button>
      </div>
    );

  const items = (
    <React.Fragment>
      {data.map((item) => (
        <Popup
          content={item.description}
          key={item.item_name}
          header={item.item_name}
          trigger={
            <Card>
              <Card.Content>
                <Card.Header>{item.item_name}</Card.Header>
                <Card.Meta>{item.category_name}</Card.Meta>
              </Card.Content>
              <Card.Content extra> Price : Rs.{item.price}</Card.Content>
            </Card>
          }
        />
      ))}
    </React.Fragment>
  );

  return (
    <div className="display">
      <Welcome />
      <div className="display">
        <Button color="yellow" onClick={refetch} icon="sync">
          {" "}
          Refresh{" "}
        </Button>
      </div>
      <div>
        <Card.Group itemsPerRow={4}>{items}</Card.Group>
      </div>
    </div>
  );
};
export default ListDisplay;
