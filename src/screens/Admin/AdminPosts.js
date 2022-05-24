import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("myJWT");

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get("http://localhost:3001/homelist").then((post) => {
      setPosts(post.data);
    });
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <Nav className=" d-flex justify-content-beginning">
        <Nav.Link href="/Admin">Users</Nav.Link>
      </Nav>
      <ul className="admin-box">
        {posts.map((post) => (
          <Card key={post.id}>
            <Card.Header as="h5">{post.user_name}</Card.Header>
            <Card.Body>
              <Card.Title>Good News: {post.description}</Card.Title>
              <Card.Text>Location: {post.location}</Card.Text>

              <Button
                href={`admin/editPost/${post.id}`}
                className="btn"
                variant="secondary"
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default AdminPosts;
