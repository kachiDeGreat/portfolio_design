import React from "react";

const Contact: React.FC = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: 600, margin: "0 auto" }}>
      <h1>Contact Me</h1>
      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            name="message"
            rows={5}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button type="submit" style={{ padding: "0.75rem 1.5rem" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
