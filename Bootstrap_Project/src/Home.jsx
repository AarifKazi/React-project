import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col, Card, Button, Form, Accordion, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    {
      name: "Air Max",
      img: "https://www.superkicks.in/cdn/shop/files/1_74f429ef-3dd1-47c1-8595-0b34b838dd7b.jpg?v=1705402288&width=1946",
    },
    {
      name: "Jordan",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWaTQSVW8Z3t6Vbs2VNTNf4WtCVpvNdp152fU7t5lb55j0mPG3QVWFKQiigIxQexQnU2WecRrKmjh9y5VwvD1bST4HJFwqrYmIj0OpAhJXYSdCVFFKRdMLknY",
    },
    {
      name: "Running",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQme7V3emRweriZBg_GuMPM26bLBxKglUjk4iP9zt4CCKUeS4v5rjmHyZIDaOMgAb31CG5hApr59H7fLY1dPIht3JdNINTr",
    },
  ];

  const features = [
    { name: "Comfort", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
    { name: "Durability", img: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png" },
    { name: "Style", img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { name: "Lightweight", img: "https://cdn-icons-png.flaticon.com/512/833/833472.png" },
  ];

  return (
    <div>

      {/* Navbar */}
      <Navbar bg="black" variant="dark" expand="lg" sticky="top" className="shadow">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-uppercase">👟 Nikes</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Products</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}
      <section id="home" style={{backgroundImage:"url('https://images.unsplash.com/photo-1542291026-7eec264c27ff')",backgroundSize:"cover",minHeight:"100vh",position:"relative"}} className="d-flex align-items-center text-white text-center">
        <div style={{position:"absolute",width:"100%",height:"100%",background:"rgba(0,0,0,0.6)"}}></div>
        <Container style={{zIndex:2}}>
          <motion.h1 initial={{opacity:0,y:-40}} animate={{opacity:1,y:0}} className="display-3 fw-bold">Step Into Style 👟</motion.h1>
          <p className="lead">Premium Sneakers Collection</p>
          <Button variant="light" size="lg">Shop Now</Button>
        </Container>
      </section>

      {/* Products */}
      <section id="services" className="p-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Sneakers</h2>
          <Row>
            {products.map((p,i)=> (
              <Col md={4} key={i}>
                <motion.div whileHover={{scale:1.08}}>
                  <Card className="shadow border-0 overflow-hidden">
                    <Card.Img src={p.img} style={{height:"250px",objectFit:"cover",width:"100%"}} />
                    <Card.Body className="text-center">
                      <Card.Title>{p.name}</Card.Title>
                      <Card.Text>Premium quality sneakers.</Card.Text>
                      <Button variant="dark">Buy Now</Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="p-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <Row>
            {features.map((f,i)=> (
              <Col md={3} key={i}>
                <motion.div whileHover={{y:-10}}>
                  <Card className="text-center p-4 shadow border-0">
                    <img src={f.img} style={{width:"60px",margin:"auto"}} />
                    <h5 className="mt-3">{f.name}</h5>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="p-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-5">Pricing</h2>
          <Row>
            {["Basic","Pro","Premium"].map((p,i)=> (
              <Col md={4} key={i}>
                <motion.div whileHover={{scale:1.05}}>
                  <Card className="text-center p-4 shadow border-0">
                    {i===1 && <Badge bg="warning" text="dark">Best</Badge>}
                    <h3>{p}</h3>
                    <h2>₹{(i+1)*1999}</h2>
                    <p>Best for daily wear</p>
                    <Button variant="dark">Buy</Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="p-5 text-center">
        <Container>
          <h2 className="mb-4">Customer Reviews</h2>
          <Row>
            {[1,2,3].map((_,i)=> (
              <Col md={4} key={i}>
                <motion.div whileHover={{y:-8}}>
                  <Card className="shadow border-0 p-4">
                    <img src={`https://randomuser.me/api/portraits/men/${i+10}.jpg`} className="rounded-circle mb-3" style={{width:"70px",margin:"auto"}} />
                    <p>"Amazing sneakers, very comfortable!"</p>
                    <h6>Customer {i+1}</h6>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="p-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">FAQ</h2>
          <Row>
            <Col md={6}>
              <motion.div whileHover={{scale:1.02}}>
                <Accordion defaultActiveKey="0" className="shadow rounded">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Are these original?</Accordion.Header>
                    <Accordion.Body>Yes 100% authentic sneakers with premium quality.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Return policy?</Accordion.Header>
                    <Accordion.Body>7 days easy return and exchange available.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Do you offer COD?</Accordion.Header>
                    <Accordion.Body>Yes Cash on Delivery is available.</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </motion.div>
            </Col>

            <Col md={6} className="d-flex align-items-center">
              <motion.img
                src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
                className="img-fluid rounded shadow"
                whileHover={{scale:1.05}}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="p-5" style={{background:"linear-gradient(135deg,#1f1c2c,#928dab)",color:"white"}}>
        <Container>
          <h2 className="text-center mb-5">Contact Us</h2>
          <Row>
            <Col md={6}>
              <motion.div whileHover={{y:-5}}>
                <h4>Get in Touch</h4>
                <p>Email: support@nikes.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Location: India</p>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div whileHover={{scale:1.02}}>
                <Form className="p-4 bg-white text-dark rounded shadow">
                  <Form.Control className="mb-3" placeholder="Your Name" />
                  <Form.Control className="mb-3" placeholder="Your Email" />
                  <Form.Control as="textarea" rows={3} className="mb-3" placeholder="Message" />
                  <Button className="w-100" variant="dark">Send Message</Button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
           {/* Footer */}
      <footer style={{background:"linear-gradient(135deg,#000000,#434343)"}} className="text-white pt-5">
        <Container>
          <Row>
            <Col md={4}>
              <h4 className="fw-bold">Nikes</h4>
              <p>Premium sneakers for style and comfort. कदम रखो style ke saath.</p>
            </Col>


            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#about" className="text-white text-decoration-none">About</a></li>
                <li><a href="#services" className="text-white text-decoration-none">Service</a></li>
                <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </Col>


            <Col md={4}>
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <span style={{cursor:"pointer"}}>📘</span>
                <span style={{cursor:"pointer"}}>📸</span>
                <span style={{cursor:"pointer"}}>🐦</span>
              </div>
            </Col>
          </Row>


          <hr className="border-light" />


          <div className="text-center pb-3">
            <p className="mb-0">© 2026 Nikes | Designed with ❤️</p>
          </div>
        </Container>
      </footer>


    </div>
  );
}
