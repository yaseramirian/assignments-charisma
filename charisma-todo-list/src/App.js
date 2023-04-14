import { Button, Col, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useState } from "react";

import Layout from "./components/Layout";
import JsonEditor from "./components/JsonEditor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const json = JSON.stringify(todos, undefined, 2);

  //  adding to the todos list
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, title]);
    setTitle("");
  };

  // removing from the todos list
  const handleRemove = (idx) => {
    setTodos((prev) => prev.filter((_, id) => id !== idx));
  };

  // clear the todos list
  const handleClear = () => {
    setTodos("");
  };

  // sorting todos
  const handleSort = (idx, dir) => {
    setTodos((prev) => {
      let temp = [...prev];
      const currentItem = temp[idx];
      if (dir === "up") {
        temp[idx] = temp[idx - 1];
        temp[idx - 1] = currentItem;
      } else {
        temp[idx] = temp[idx + 1];
        temp[idx + 1] = currentItem;
      }
      return temp;
    });
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit} onReset={handleClear}>
        <Form.Group as={Col} md='4' style={{ width: "100%" }}>
          <InputGroup>
            <Form.Control
              type='text'
              placeholder='Please enter a to-do task'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />

            <Button disabled={!title.length} variant='primary' type='submit'>
              Add
            </Button>
            <Button variant='warning' type='reset'>
              Clear
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>

      {todos.length > 0 && (
        <ListGroup className='mt-4'>
          {todos.map((todo, idx) => (
            <ListGroup.Item
              key={idx}
              className='d-flex justify-content-between align-items-start'
            >
              <div>{todo}</div>

              <div>
                <Button
                  className='me-1'
                  size='sm'
                  variant='danger'
                  onClick={() => handleRemove(idx)}
                >
                  ×
                </Button>

                <Button
                  disabled={idx === 0}
                  variant='outline-primary'
                  size='sm'
                  className='me-1'
                  onClick={() => handleSort(idx, "up")}
                >
                  ↑
                </Button>
                <Button
                  disabled={idx === todos.length - 1}
                  variant='outline-primary'
                  size='sm'
                  onClick={() => handleSort(idx, "down")}
                >
                  ↓
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {/* show datas in JSON format */}
      <JsonEditor
        key={json}
        json={json}
        onChange={(json) => setTodos(JSON.parse(json))}
      />
    </Layout>
  );
}

export default App;
