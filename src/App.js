import React, { useState } from "react"
import logo from "./loading2.gif"
import "./App.scss"
import ReactModal from "react-modal"

import MailIcon from "./mailIcon"
import PhoneIcon from "./PhoneIcon"

function App() {
  const [contactModal, setContactModal] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h1>VELOCITRACKERS</h1>
        <p>...coming soon!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <button
          className="btn draw-border"
          onClick={() => setContactModal(true)}
          style={{ cursor: "pointer", width: 120 }}
        >
          Contact Us
        </button>
        <ReactModal
          isOpen={contactModal}
          contentLabel="Contact Us"
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          shouldReturnFocusAfterClose={true}
          style={{
            overlay: {
              backgroundColor: "282B34"
            },
            content: {
              color: "282B34",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            },
            button: {
              margin: "100px"
            }
          }}
          closeTimeoutMS={200}
        >
          <h1 class="names">General Inquiries</h1>
          <div class="icon-container">
            <div class="icon">
              <a href={"mailto:contact@velocitrackers.com"}>
                <MailIcon />
              </a>
              <p>contact@velocitrackers.com</p>
            </div>
            <div class="icon">
              <a href={"tel:17194661016"}>
                <PhoneIcon />
              </a>
              <p>(719) 466-1016</p>
            </div>
          </div>
          <h1 class="names">Sales</h1>
          <div class="icon-container">
            <div class="icon">
              <a href={"mailto:sales@velocitrackers.com"}>
                <MailIcon />
              </a>
              <p>sales@velocitrackers.com</p>
            </div>
            <div class="icon">
              <a href={"tel:13378527322"}>
                <PhoneIcon />
              </a>
              <p>(337) 852-7322</p>
            </div>
          </div>
          <div>
            <button
              style={{
                cursor: "pointer"
              }}
              onClick={() => {
                setContactModal(false)
              }}
              class="btn draw-border"
            >
              Back
            </button>
          </div>
        </ReactModal>
      </header>
    </div>
  )
}

export default App
